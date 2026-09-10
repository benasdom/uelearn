// Extracts plain text from uploaded files entirely client-side so the AI
// Generator can turn any study material — not just pasted text — into
// questions, without ever sending the raw file anywhere except the local
// browser tab (PDF/DOCX parsing and OCR all happen in-browser).

const MAX_FILE_BYTES = 25 * 1024 * 1024 // 25MB — generous for lecture PDFs, guards against pathological uploads

export const SUPPORTED_ACCEPT = '.pdf,.docx,.txt,.md,.csv,.json,image/png,image/jpeg,image/webp,.png,.jpg,.jpeg,.webp'

function extOf(name) {
  const m = /\.([a-z0-9]+)$/i.exec(name || '')
  return m ? m[1].toLowerCase() : ''
}

export function classifyFile(file) {
  const ext = extOf(file.name)
  const type = file.type || ''

  if (type === 'application/pdf' || ext === 'pdf') return 'pdf'
  if (
    type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
    ext === 'docx'
  ) return 'docx'
  if (ext === 'doc' || type === 'application/msword') return 'legacy-doc'
  if (type.startsWith('image/') || ['png', 'jpg', 'jpeg', 'webp', 'bmp', 'gif'].includes(ext)) return 'image'
  if (
    type.startsWith('text/') ||
    ['txt', 'md', 'csv', 'json', 'log'].includes(ext)
  ) return 'text'

  return 'unknown'
}

// ===== PDF =====
// pdfjs-dist is already a project dependency (used elsewhere for the PDF
// viewer). The worker is bundled locally via Vite's `?url` import so
// extraction works fully offline instead of depending on a CDN at runtime.
async function extractPdf(file, onProgress) {
  const [pdfjsLib, { default: workerSrc }] = await Promise.all([
    import('pdfjs-dist'),
    import('pdfjs-dist/build/pdf.worker.mjs?url'),
  ])
  pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc

  const buffer = await file.arrayBuffer()
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise

  let text = ''
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum)
    const content = await page.getTextContent()
    const pageText = content.items.map((item) => ('str' in item ? item.str : '')).join(' ')
    text += pageText + '\n\n'
    onProgress?.(pageNum / pdf.numPages)
  }

  return text.trim()
}

// ===== DOCX =====
async function extractDocx(file) {
  const mammoth = await import('mammoth')
  const buffer = await file.arrayBuffer()
  const { value } = await mammoth.extractRawText({ arrayBuffer: buffer })
  return value.trim()
}

// ===== IMAGES (OCR) =====
let sharedOcrWorker = null
async function getOcrWorker(onProgress) {
  if (sharedOcrWorker) return sharedOcrWorker
  const { createWorker } = await import('tesseract.js')
  sharedOcrWorker = await createWorker('eng', 1, {
    logger: (m) => {
      if (m.status === 'recognizing text' && typeof m.progress === 'number') onProgress?.(m.progress)
    },
  })
  return sharedOcrWorker
}

async function extractImage(file, onProgress) {
  const worker = await getOcrWorker(onProgress)
  const { data } = await worker.recognize(file)
  return (data.text || '').trim()
}

// Call once when the AI Generator unmounts / the user is done uploading,
// so the OCR worker (a persistent web worker) doesn't linger forever.
export async function releaseOcrWorker() {
  if (sharedOcrWorker) {
    const w = sharedOcrWorker
    sharedOcrWorker = null
    await w.terminate()
  }
}

// ===== PLAIN TEXT =====
async function extractPlainText(file) {
  return (await file.text()).trim()
}

// ===== PUBLIC API =====

/**
 * @param {File} file
 * @param {(progress:number)=>void} [onProgress] 0..1, only meaningful for pdf/image
 * @returns {Promise<string>}
 */
export async function extractTextFromFile(file, onProgress) {
  if (file.size > MAX_FILE_BYTES) {
    throw new Error(`"${file.name}" is larger than 25MB — try a smaller file.`)
  }

  const kind = classifyFile(file)

  switch (kind) {
    case 'pdf': {
      const text = await extractPdf(file, onProgress)
      if (!text) throw new Error(`Couldn't find any text in "${file.name}" — it may be a scanned/image-only PDF.`)
      return text
    }
    case 'docx': {
      const text = await extractDocx(file)
      if (!text) throw new Error(`"${file.name}" appears to be empty.`)
      return text
    }
    case 'legacy-doc':
      throw new Error(`"${file.name}" is an old .doc file — please save it as .docx (or PDF) and re-upload.`)
    case 'image': {
      const text = await extractImage(file, onProgress)
      if (!text) throw new Error(`Couldn't read any text in "${file.name}" — try a clearer image.`)
      return text
    }
    case 'text':
      return extractPlainText(file)
    default:
      throw new Error(`"${file.name}" isn't a supported file type. Try PDF, DOCX, an image, or a text file.`)
  }
}
