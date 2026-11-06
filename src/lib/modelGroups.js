// Sorts the model catalogue ({ "Display name": "api-value" }) into the three
// sections shown in the picker: text first, then image, then video.
//
// Classification is by regex over BOTH the display name and the API value, so
// it keeps working as providers add models. Video is tested before image
// because names like "image-to-video" contain both words.

const VIDEO_RE = new RegExp(
  [
    'video', '\\bveo[\\s-]?\\d*', '\\bsora\\b', 'kling', 'runway', '\\bgen[\\s-]?[34]\\b',
    'luma', '\\bray[\\s-]?\\d', 'hailuo', 'pika', '\\bwan[\\s-]?\\d', 'seedance',
    'cogvideo', 'mochi', '\\bltx[\\s-]?v', 'pixverse', 'vidu', 'movie', 'text-to-video', 'i2v', 't2v',
  ].join('|'),
  'i'
)

const IMAGE_RE = new RegExp(
  [
    'image', '\\bimg\\b', '-img\\b', 'imagen', 'dall[\\s-]?e', 'flux', 'midjourney',
    'stable[\\s-]?diffusion', '\\bsdxl\\b', '\\bsd[\\s-]?3', 'nano[\\s-]?banana', 'ideogram',
    'recraft', 'firefly', 'seedream', 'kolors', 'diffusion', 'text-to-image', 't2i', 'photo',
    'illustrat', 'sticker', 'playground[\\s-]?v',
  ].join('|'),
  'i'
)

export const SECTIONS = [
  { kind: 'text',  title: 'Text generation',  note: 'Solves questions, explains, writes' },
  { kind: 'image', title: 'Image generation', note: 'Diagrams, illustrations, visuals' },
  { kind: 'video', title: 'Video generation', note: 'Short clips from a prompt' },
]

export function classifyModel(name = '', value = '') {
  const hay = `${name} ${value}`
  if (VIDEO_RE.test(hay)) return 'video'
  if (IMAGE_RE.test(hay)) return 'image'
  return 'text'
}

/** entries: [name, value][] → [{ kind, title, note, items }] (empty sections dropped) */
export function groupModels(entries) {
  const buckets = { text: [], image: [], video: [] }
  entries.forEach(([name, value]) => buckets[classifyModel(name, value)].push([name, value]))
  return SECTIONS
    .map((s) => ({ ...s, items: buckets[s.kind] }))
    .filter((s) => s.items.length > 0)
}
