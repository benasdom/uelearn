# Solution Auto-Saving — Frontend Notes (React)

Backend change: solutions returned by `POST /request/solutions` and
`POST /solutions/extension` are now saved to the database **before** the
response is sent back, so a dropped connection, a crashed tab, or a client
bug can never cost a user the solution they just paid credits for.

**Short answer: nothing in the frontend has to change for this to work.**
Both changes below are additive and backward-compatible — existing request
bodies are accepted exactly as before, and the new response field is simply
ignored by any client that doesn't look for it. The rest of this doc covers
what changed, why, and two optional improvements worth making.

---

## 1. What changed on the backend

| Endpoint | Change |
|---|---|
| `POST /request/solutions` | Accepts an optional `courseName` field. Response now includes `solutionId`. |
| `POST /solutions/extension` | Same two changes. |

Nothing about credit deduction, error handling, timeouts, or the shape of
`api_response` changed. If your existing request/response handling works
today, it keeps working after this deploy.

---

## 2. New optional request field: `courseName`

```diff
 fetch("/request/solutions", {
   method: "POST",
   headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
   body: JSON.stringify({
     filename: file.name,
     selectedVal: selectedModel,
     premiumstatus: isPremium,
+    courseName: currentCourse.courseName,
   }),
 });
```

```diff
 fetch("/solutions/extension", {
   method: "POST",
   headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
   body: JSON.stringify({
     content: extractedPageText,
     selectedVal: selectedModel,
+    courseName: currentCourse.courseName,
   }),
 });
```

**Why it's worth adding, even though it's optional:** every saved solution
needs a course to be attached to (`SolutionModel.course`). If you don't
send one, the backend files it under a placeholder course called
`"Uncategorized"` instead of failing the request — so nothing breaks either
way. But `GET /solutions/queries?courseName=...` is how the app already
filters "past solutions for this course", and an auto-saved solution with
no real `courseName` won't show up in that filter. If your UI has any
notion of "which course is the user currently in" at the point they call
either of these two endpoints, passing it along means those solutions are
actually findable later. If you genuinely don't have a course in context at
that point (e.g. the browser extension, which may be scraping from
anywhere), it's fine to leave it out — that's exactly what the fallback is
for.

---

## 3. New response field: `solutionId`

```json
{
  "status": true,
  "message": "Solution retrieved successfully",
  "statusCode": 200,
  "data": {
    "api_response": { "...": "..." },
    "remaining_credits": 40,
    "solutionId": "3f2a1b9c-...-e8d7"
  }
}
```

`solutionId` is the UUID of the `SolutionModel` row that now backs this
response. It can be `null` — the save happens in its own try/except on the
backend specifically so that a database hiccup never blocks the user from
getting a solution they already paid credits for; if that save fails,
you'll get `solutionId: null` alongside an otherwise completely normal,
successful response.

**Nothing requires you to use it.** It's there for anything you build later
that needs to reference this specific saved solution — e.g. a "mark this as
helpful" / upvote action, a share link, or a "here's what you got" history
screen — via `SolutionModel.voteCount` / `validated`, both of which already
exist on the model but aren't wired to any endpoint yet. If you don't have
a use for it today, you can ignore the field entirely.

If you do want to store it (e.g. in component state, right after the
request resolves):

```jsx
const { data } = await requestSolution(payload); // your existing call
setLastSolutionId(data.solutionId); // may be null — handle that in the UI
```

---

## 4. Where these solutions show up

Both endpoints' saved rows are now visible through the existing
`GET /solutions/queries?userId=&courseName=&validated=&page=&pageSize=`
endpoint (see the pagination note below) — no new endpoint was added for
reading them back. If your app already has a "my solutions" / history view
hitting that endpoint, these will simply start appearing there once this
deploys, with `validated: false` and `modelName` set to whatever
`selectedVal` was sent. If it doesn't already have such a view, no action
needed — the data is just sitting there for whenever you want to add one.

Note: `/solutions/queries` was recently paginated. If your existing client
for that endpoint reads `data.solutions` and assumes it's the *complete*
result set, it isn't anymore — see the `page` / `pageSize` / `hasNext`
fields alongside `solutions_count` / `solutions` in that response if you
need to page through more than one page's worth.

---

## 5. Checklist

- [ ] No change required to ship this safely — existing calls to both
      endpoints keep working exactly as before.
- [ ] Recommended: pass `courseName` on both endpoints wherever the current
      course is known in the UI, so auto-saved solutions are filterable
      later.
- [ ] Optional: capture `solutionId` from the response if/when you build
      anything that references a specific saved solution (voting, sharing,
      a "was this validated?" indicator).
