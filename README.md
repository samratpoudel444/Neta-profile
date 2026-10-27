# MediGo — Repository Assessment, Technical Complexity, LOC Sizing & Commercial Valuation

| Item | Value |
|---|---|
| Assessment date | 2026-10-24 |
| Repository | MediGo — `https://github.com/samratpoudel444/MediGo.git` |
| Commit assessed | `f32b2fe1` ("new frontend fixes", 2026-10-13), branch `main` |
| Methodology | *Repository Valuation Methodology: Google-Calibrated, 23-Topic Framework* (as pasted; the brief was truncated after §17.9, so §18–23 follow its evident structure) |
| Tools | cloc 2.10 · gitleaks 8.30.1 · node 22.23.2 · npm 10.9.8 · python3 (classification script) |
| Method of verification | Full read of every backend source file and the key frontend files; `git archive HEAD` extracted to a scratch directory where `npm ci / install`, ESLint, Jest, `vite build` and a server boot were executed. The working tree was **not** modified. MongoDB, Redis, Cloudinary, OCR.space, Gemini and Gmail were **not** available, so no live request flow was demonstrated. |

Legend used throughout: **VERIFIED** = observed directly in the repository or by executing it · **NOT VERIFIED** = plumbing present but not exercised · **UNKNOWN / NOT AVAILABLE** = evidence absent.

---

## SECTION 1 — BASIC REPOSITORY PROFILE

| Attribute | Finding |
|---|---|
| Repository name | MediGo ("Smart Medical Prescription And Consultation System") |
| Primary languages | JavaScript (ES modules) and JSX |
| Frameworks | Backend: Express 5.2, Mongoose 8.14, Socket.IO 4.8, node-cron 4, pino 10. Frontend: React 19.1, Vite 6.3, MUI 7.1, Tailwind CSS 4.1, TanStack Query 5, Formik 2, react-leaflet 5, Chart.js 4 |
| Platforms | Web: Node 24 server (Dockerfile) + browser SPA |
| Application type | Two-app monorepo: REST/WebSocket API + single-page web client. Domain: healthcare appointments, prescriptions, pharmacies |
| Tracked files | 240 (`git ls-files`) |
| Source files | 193 logic files (backend 106 `.js`, frontend 87 `.jsx`/`.js`) |
| Test files | 2 (`backend/server/test/signUp.test.js`, `frontend/test/login.spec.js`) |
| Source LOC | 11,726 code lines (backend 3,068 · frontend 8,658) |
| Test LOC | 114 |
| Total relevant LOC | 11,854 (source + test + 14 markup) |
| Modules | 2 applications. Backend: 10 route modules, 9 Mongoose models, 6 middleware, 7 helpers, 2 cron schedulers, 1 Socket.IO server, 1 seed, 1 data-import script. Frontend: 87 components across 10 feature folders (Admin, DoctorDashboard, Blogs, ChatApp, maps, modal, chart, utils, …) |
| Packages | 2 npm packages (`backend`, `frontend`) |
| Major components | Auth/OTP, Admin, Doctor, Patient, Appointments + priority scheduler, Prescription OCR, Pharmacy/geo, Chat, Blogs, Reminders |
| Build system | npm scripts; Vite for frontend; Babel (`babel.config.cjs`) for Jest; multi-stage `backend/Dockerfile`; GitHub Actions in `backend/.github/workflows/backend-ci.yml` and `frontend/.github/workflows/frontend-ci.yml`; husky pre-commit + lint-staged; ESLint 9 flat configs |
| Configuration files | `backend/.env` (tracked), `backend/.env.example`, `backend/server/config/env.js` (yup-validated), `backend/server/config/rate_limiter.js`, `frontend/vite.config.js`, `frontend/playwright.config.js`, two `eslint.config.js`, `.gitignore`, `.gitignore.backup` (UTF-16), `backend/.gitIgnore`, `backend/.dockerignore` |
| Database | MongoDB (Mongoose). Redis for OTP storage, socket-id presence map, medicine-name cache |
| APIs | ~50 REST endpoints under `/api/v1` (auth, admin, doctor, patient, appointment, pharmacy, chat, blog, reminder). Socket.IO event `chat-message` |
| UI | React SPA with role-gated areas: `/admin/*`, `/doctor/*`, patient routes, `/chat` |
| Background processing | `node-cron`: appointment priority / slot assignment (`FILTER_DOCTOR_SCHEDULER`), medicine reminders mailer (`CRON_REMAINDER`) |
| External integrations | Cloudinary (image store), OCR.space (OCR), Google Gemini (`@google/generative-ai`), Gmail SMTP via Nodemailer, RxNav/NLM (medicine list import), OpenStreetMap tiles, iconfinder CDN icons |
| Executable entry points | `backend/index.js` (`npm start` / `npm run dev`), `frontend/src/main.jsx` (`vite`), `backend/server/db/seeding/adminSeeding.js` (`npm run seedAdmin`), `backend/server/db/migration/medicineMigration.js` (`npm run migrateMedicine`) |

LOC is used only for size eligibility (Section 2) and the LOC factor (Section 17.3), never for complexity.

---

## SECTION 2 — REPOSITORY SIZE ELIGIBILITY

Counting basis: `git ls-files` only; cloc 2.10 with explicit per-category file lists produced by a script applying the §17.1 regex rules in order (EXCLUDE_DIRS → EXCLUDE_GEN → TEST → LOGIC → MARKUP).

### 2.1 Raw count (`cloc --vcs=git`)

| Language | Files | Code |
|---|--:|--:|
| JSON | 4 | 15,955 |
| JSX | 89 | 8,658 |
| JavaScript | 111 | 3,302 |
| YAML | 2 | 82 |
| Markdown | 2 | 61 |
| Dockerfile | 1 | 15 |
| HTML | 1 | 13 |
| SVG | 3 | 13 |
| Bourne Shell | 1 | 3 |
| CSS | 1 | 1 |
| **Total** | **215** | **28,103** |

### 2.2 Mechanical classification

| Rule | Files | Code lines | Files affected |
|---|--:|--:|---|
| LOGIC (production) | 193 | 11,726 | all `.js/.jsx` under `backend/` and `frontend/src/` |
| TEST | 2 | 114 | `backend/server/test/signUp.test.js`, `frontend/test/login.spec.js` |
| MARKUP | 3 | 14 | `frontend/index.html` (13), `frontend/src/App.css` (1), `frontend/src/index.css` (0) |
| EXCLUDE_GEN | 6 | 15,897 | `backend/package-lock.json` (15,777), `babel.config.cjs`, both `eslint.config.js`, `playwright.config.js`, `vite.config.js` |
| EXCLUDE_DIRS (`.github`) | 2 | 82 | two CI workflows |
| Other (config/docs/assets/data) | 34 | 270 | READMEs, package.json ×2, Dockerfile, `.env*`, `roadGraph.json`, 17 images, dotfiles |

### 2.3 Supplementary checks

- **Foreign packages / vendored source:** none. No `third_party`, `vendor`, submodules, or copied libraries.
- **Embedded data:** five logic files have ≥300 code lines (`location.jsx` 431, `usableNavbar.jsx` 369, `PrescriptionUpload.jsx` 309, `CreateDoctor.jsx` 305, `UserDoctorRegistrationPage.jsx` 303); the highest share of lines containing a string literal is 47 % (< 70 % threshold). None excluded.
- **Generator scripts / generated models:** none found.
- **Test-pattern review:** only the two test directories; no production package is misnamed as a test.
- **Duplicates D1** (identical after whitespace/import normalisation, ≥10 lines): **none**. Nine *near*-duplicate pairs exist (Section 11) and remain in L per the rules.
- **D2:** not applicable (single application, no sibling services or forks).

### 2.4 Effective LOC

| Category | LOC |
|---|--:|
| Raw tracked code | 28,103 |
| Production logic LOC — JSX | 8,658 |
| Production logic LOC — JavaScript | 3,068 |
| **Production logic total** | **11,726** |
| Vendored / third-party LOC (excluded) | 0 |
| Test LOC (excluded) | 114 (test-to-production ratio **0.97 %**) |
| Embedded data LOC (excluded) | 0 |
| Generated LOC (excluded) | 0 (120 LOC of tool config excluded by EXCLUDE_GEN) |
| Duplicated LOC (excluded, D1/D2) | 0 |
| Authored markup LOC | 14 → × 0.5 = 7 |
| Configuration & documentation LOC (excluded) | 16,249 |
| **Effective LOC (L)** | **11,733** |

**Vendor Size Eligibility (1,000 ≤ L ≤ 500,000): PASS.**
The vendor's exact counting methodology is UNKNOWN; if it counts raw lines (28,103) or excludes JSX markup differently the figure changes but eligibility does not.

---

## SECTION 3 — END-TO-END APPLICATION ASSESSMENT

### 3.1 Actual execution flow

```
USER (browser, React SPA; Formik/yup client validation)
  ↓ axios (Bearer token read from localStorage; baseURL hard-coded http://localhost:3000)
EXPRESS ENTRY  backend/index.js
  ↓ cors(allow-list localhost:5173/5174) → helmet → express.json(100kb) → cookieParser → global rate limiter
ROUTER  /api/v1/*  (10 routers)
  ↓ route-level limiter (login/register/forgot/otp) → authMiddleware (JWT verify) → isAdmin | isDoctor | isPatient
  ↓ validateReqBody(yup) / validateMongoId / isOwnerOfAppointment (where wired)
CONTROLLER  (one file per use case)
  ↓ Mongoose model → MongoDB
  ↓ side effects: Redis (OTP, presence, cache) · Cloudinary upload · Nodemailer · Socket.IO emit
RESPONSE  JSON {message|data}  — or next({code,message}) → errorMiddleware
  ↓
UI  TanStack Query cache → MUI/Tailwind components → react-toastify
BACKGROUND  node-cron → FilterDoctors() priority sort → AppointmentTable.findOneAndUpdate
            node-cron → checkRemainder() → sendMailToUser()
```

Per-stage findings:

| Stage | Evidence | Status |
|---|---|---|
| Entry point | `backend/index.js` mounts 10 routers, error handler, listens on `config.PORT` | VERIFIED (boots) |
| Input | React forms (Formik + yup), multer for images | VERIFIED (code) |
| Validation | `env.js` (3 vars), `userValidation.js`, `pharmacyValidation.js`, `appointmentValidation.js`, `passwordValidation.js`; `validateReqBody` middleware is defined but only partially used | VERIFIED (code) |
| Business logic | role gating, doctor approval, appointment uniqueness + priority rules, OTP reset | VERIFIED (code) |
| Data processing | Jimp image preprocessing → OCR → regex extraction; Haversine distance; Mongo aggregations | VERIFIED (code) |
| Persistence | 9 Mongoose schemas; Redis via `redisHelper.js` | NOT VERIFIED at runtime (no Mongo/Redis) |
| External communication | Cloudinary, OCR.space, Gemini, SMTP, RxNav, Socket.IO | NOT VERIFIED (no credentials/services) |
| Output | JSON responses; SPA views | VERIFIED (build) / NOT VERIFIED (runtime) |
| Error handling | central `errorMiddleware.js` | VERIFIED **defective** (see 3.3) |
| Configuration | `.env` + yup schema | VERIFIED (loads) |
| Testing | 1 Jest file, 1 Playwright spec | VERIFIED (2 of 5 Jest tests fail) |
| Build / run | npm scripts, Vite, Dockerfile, CI | VERIFIED partially (see 3.2) |

### 3.2 Executability — what was actually run

| Step | Command (scratch copy) | Result |
|---|---|---|
| Backend install | `npm ci --ignore-scripts` | OK, 1,124 packages |
| Backend lint | `npx eslint .` | **FAIL** — `markAppointmentCompleted.js:24:22 'err' is not defined (no-undef)` |
| Backend tests (with committed `.env`) | `npx jest --ci` | **2 failed, 3 passed** — expected `"User created sucessfully"` vs actual `"User created successfully"`; doctor-creation test: `DoctorTable.create` called 0 times |
| Backend tests (without `.env`) | same | **Suite aborts**: `env.js` prints "Invalid environment configuration … MONGO_URI is required" and calls `process.exit(1)` |
| Backend syntax | `node --check` on all 107 files | all pass (two *directories* are named `chatController.js/` and `blogController.js/`) |
| Backend boot | `node index.js` | first attempt `EADDRINUSE :::5000` (hard-coded Socket.IO port, busy on this machine); after changing that port **in the scratch copy only**, logs `Server started port 3000`, then repeated `Redis Client Error` (no Redis); Mongo connection not established within 8 s |
| Frontend install | `npm ci` | **FAIL** — no `package-lock.json` tracked; `npm install` succeeded (429 packages) |
| Frontend lint | `npx eslint .` | OK (1 warning, `MessageBar.jsx:60` exhaustive-deps) |
| Frontend build | `npx vite build` | **OK** in 6.0 s; main chunk 972.89 kB (warning >500 kB) |
| Playwright e2e | not run | requires live backend + DB and a real user account |

Required but missing to run the full flow: MongoDB, Redis, Cloudinary account, OCR.space key (code uses the public demo key `"helloworld"`), Google API key, Gmail app password, a seeded admin (`npm run seedAdmin`), medicine import (`npm run migrateMedicine`, downloads ~14,500 RxNav concepts).

### 3.3 Defects that break or bypass main flows (all VERIFIED by reading code)

1. **Error middleware throws on every handled error.** `backend/server/middleware/errorMiddleware.js:31` — `return res.status(err.code).message(err.message)`. `res.message` is not an Express method, so every `next({code: 401|403|404|409, …})` raises a `TypeError` inside the error handler and Express returns a generic HTML 500. Mongo duplicate-key errors (`err.code === 11000`) would hit `res.status(11000)` → `RangeError`. Introduced in commit `4e72e5e0` "made the error middleware better" (2026-10-12).
2. **Real-time chat cannot connect.** Server: `initializeSocket.js` listens on **5000** (and logs "port 1000"). Client: `SocketInitialize.jsx` dials `http://localhost:1001` with websocket transport. Vite proxy targets `localhost:1000`. No pair matches. Messages are still persisted via REST; live delivery never happens.
3. **Medicine identification is disconnected.** `ocrTest.js:36` has `//const a = await Redis(structuredData["medicineName"]);` commented out, so the Damerau-Levenshtein / Redis matcher is dead code. The Gemini `generateContent` result is awaited and discarded. OCR.space is called with the public demo key.
4. **Navigation / A\* does not exist.** `routes/astarRoute/astarRoute.js` is 100 % comments; `controllers/astarController/astarAlgorithm.js` was deleted (commit `e8b54390`) and was itself fully commented out before deletion (contained a hard-coded Windows path). `MapWithPath.jsx` posts to `/api/v1/astar`, which is not mounted. `jsonData/roadGraph.json` (4 nodes) is referenced by nothing. The README's "shortest navigation route" feature is therefore not implemented; `location.jsx` does show nearby pharmacies via Haversine.
5. **`.env.example` cannot start the application.** `JWT_SECRET=medigo` (6 chars) fails the `min(18)` rule in `env.js`. It also sets `ACCESS_SECRET ≠ JWT_SECRET`, while `signInUser.js` signs the access token with `ACCESS_SECRET` and `authMiddleware.js` verifies with `JWT_SECRET`; a fresh deployment from the example would reject every authenticated request. It works today only because the committed `.env` sets both secrets to the same 38-character value (verified with a jsonwebtoken sign/verify script).
6. **Case-sensitive import.** `PrescriptionUpload.jsx:19` imports `"./prescriptionImage"`; the file is `PrescriptionImage.jsx`. Builds on macOS; fails on Linux CI/Docker.
7. **Scheduler correctness.** `FilterDoctors()` uses `forEach(async …)` (unawaited) and `priorityQueue.js` keeps at most 8 appointments per doctor, silently dropping the rest; the comparator keys on `"new"|"urgent"|"regular"` while the model stores `appointmentType ∈ {1,2,3}`, so every appointment gets priority 99 and ordering falls back to age/date only.

### 3.4 Classification

**C. Partially Complete Application.**
Evidence for completeness: login/registration, role-gated dashboards, admin CRUD for users/doctors/pharmacies, appointment booking with ownership checks, blog CRUD with image upload, reminders with cron mailer, pharmacy radius search with map, prescription upload to Cloudinary — all wired from UI to database.
Evidence against: the three differentiating features advertised in the README (OCR → medicine information, nearest-pharmacy navigation, real-time doctor chat) are stubbed, mis-wired or absent; the error path is broken for every endpoint; CI fails as committed.

| Verdict | Value |
|---|---|
| Executable | **PARTIAL** (frontend builds; backend boots; services, credentials and the fixes above required) |
| End-to-End | **PARTIAL** |
| Platform adaptation | Full-stack web; no adaptation applied |

---

## SECTION 4 — APPLICATION MATURITY

| Dimension | Evidence | Assessment |
|---|---|---|
| Architecture | Layered Express; React SPA with lazy routes | conventional, adequate |
| Feature completeness | see Section 3.3 | partial |
| Error handling | consistent `next({code,message})` pattern, but central handler broken; `uploadPrescription.js` tests `err.mesasge` (typo) | defective |
| Validation | yup for env/user/pharmacy/appointment/password; Mongoose constraints; `validateReqBody` rarely applied | moderate |
| Testing | 5 unit tests (2 failing), 1 e2e | weak |
| Security | see Section 13.8; critical reset bypass | weak |
| Persistence | Mongoose schemas, one compound unique index, no migrations/versioning | basic |
| Configuration | env validated for 3 of ~28 keys; `.env` committed; hard-coded origins/ports/URLs | weak |
| Logging | pino with redaction of cookie/token fields; some `console.*` remain | adequate |
| Monitoring | none (no health endpoint; CI curls `/` which has no route) | absent |
| Performance | Redis cache of medicine list (1 h TTL); lazy-loaded routes | basic |
| Scalability | single-process socket presence map; no clustering | n/a |
| Refactoring | Oct-2026 hardening (logger, rate limits, env schema, route protection) | some |
| Documentation | root README with setup; inaccurate in places; frontend README is Vite template | minimal |
| Git evolution | 17 months, 3 contributors, bursts | moderate |
| Dependency management | backend lockfile; frontend none; `nodemon ^1.14` (2018) | mixed |
| Edge cases / recovery | scheduler drops >8 appointments; OTP never consumed; no retries on external calls | weak |
| Maintainability | typos baked into identifiers and URLs; duplicated components | weak |

**Classification: Early-stage. Application Maturity Score: 4/10.**

---

## SECTION 5 — PROPRIETARY / ORIGINAL CODE ASSESSMENT

| Material | Finding |
|---|---|
| First-party source | 11,726 logic LOC, all application-specific; no copied libraries detected |
| Third-party libraries | consumed via npm only (Section 6) |
| Vendored / generated source | none |
| Templates / boilerplate | `frontend/README.md` is the stock Vite template; `react.svg`, `vite.svg` are template assets (unused) |
| Copied code | Damerau-Levenshtein and Haversine are textbook formulas (not copyright-significant) |
| External assets | 17 images; at least two are third-party stock (Section 6) |
| Fonts / icons | MUI icons, lucide-react, react-icons via npm; one hot-linked iconfinder PNG |
| Sample data | `roadGraph.json` (hand-written, 4 nodes, unused); admin seed with personal emails |

**Original implementation: HIGH** for code. Image assets are excluded from that judgement. Legal ownership is not asserted; see Section 23 on contributor consent.

---

## SECTION 6 — THIRD-PARTY DEPENDENCY & ASSET AUDIT

### 6.1 Runtime dependencies (npm, not vendored)

Licenses were read from each installed package's manifest in the scratch install.

| App | Scope | MIT | Apache-2.0 | BSD-2 | ISC | MIT-0 | Hippocratic-2.1 |
|---|---|--:|--:|--:|--:|--:|--:|
| backend | 27 deps + 14 dev | 36 | 2 (`@google/generative-ai`, `mongodb`) | 1 (`dotenv`) | 1 (`node-cron`) | 1 (`nodemailer`) | 0 |
| frontend | 29 deps + 13 dev | 36 | 2 (`formik`, `@playwright/test`) | 2 (`leaflet`, `leaflet-control-geocoder`) | 1 (`lucide-react`) | 0 | **1 (`react-leaflet@5.0.0`)** |

Notes: `react-leaflet` 5.x is licensed under the Hippocratic License 2.1, an ethical-use license that is not OSI-approved; whether that is acceptable to the vendor requires verification. `@tanstack/react-query` is listed as a backend dependency but unused there. `nodemon ^1.14.10` is a 2018 release. Only the backend has a lockfile.

Significant dependencies and purpose:

| Name | Version | Purpose | License |
|---|---|---|---|
| express | ^5.2.1 | HTTP framework | MIT |
| mongoose / mongodb | ^8.14 / ^6.16 | ODM / driver | MIT / Apache-2.0 |
| socket.io, socket.io-client | ^4.8.1 | chat transport | MIT |
| redis | ^5.6.0 | OTP, presence, cache | MIT |
| jsonwebtoken, bcrypt | ^9.0.2 / ^6.0.0 | auth | MIT |
| helmet, express-rate-limit, cors | — | HTTP hardening | MIT |
| cloudinary | ^2.6.1 | image storage | MIT |
| jimp | ^0.22.12 | image preprocessing | MIT |
| @google/generative-ai | ^0.24.1 | Gemini call (result unused) | Apache-2.0 |
| nodemailer | ^10.1.0 | SMTP | MIT-0 |
| node-cron | ^4.2.1 | schedulers | ISC |
| yup | ^1.6.1 | validation (both apps) | MIT |
| react, react-dom, react-router-dom | ^19.1 / ^7.6 | UI | MIT |
| @mui/* , @emotion/* | ^7.x | UI kit | MIT |
| leaflet, react-leaflet | ^1.9.4 / ^5.0.0 | maps | BSD-2 / Hippocratic-2.1 |
| chart.js, react-chartjs-2, @mui/x-charts | — | charts | MIT |

### 6.2 Assets in the tree

| File | Size | Referenced | Observation | Risk |
|---|--:|:-:|---|---|
| `frontend/src/assets/bigdocor.png` | 367 kB | yes | Cartoon doctor; **visible "envato" watermark** → unlicensed stock preview | **HIGH** |
| `frontend/src/assets/a.png` | 545 kB | yes | Photograph of a model in a white coat; stock-style crop badge | **HIGH** |
| `frontend/src/assets/doctor.png` | 58 kB | yes | Clip-art doctor + nurse | unknown origin |
| `hand.png`, `scope.png`, `prescription.png`, `stethoscope.jpg`, `appointmenthouse.jpg`, `download.jpg`, `navimage.png`, `try.png`, `calender.avif` | 8–224 kB | mostly yes | clip-art / photos; `download.jpg` and `try.png` names suggest web downloads | unknown origin |
| `MEDIGO.png`, `logo.svg` | 64 kB / 0.3 kB | yes | project logo | plausibly first-party, NOT VERIFIED |
| `samrat.png` | 248 kB | yes | cartoon avatar named after an author | plausibly first-party, NOT VERIFIED |
| `react.svg`, `vite.svg` | — | no / yes | Vite template (MIT) | low |
| `backend/server/jsonData/roadGraph.json` | 684 B | no | hand-written 4-node graph | low |

Hot-linked at runtime: `https://{s}.tile.openstreetmap.org/...` (ODbL; attribution present in `location.jsx`), `https://cdn0.iconfinder.com/.../678111-map-marker-512.png` (license unknown; used for both user and pharmacy markers), `https://unpkg.com/leaflet@1.9.3/dist/images/...`.
Git submodules: none. Native deps: `bcrypt` (prebuilt binaries).

**Status: Third-party dependencies identified; ownership/license status of images requires verification.**
**Third-Party Dependency Risk: HIGH** (assets) · LOW (npm runtime packages, subject to the Hippocratic-license decision).

---

## SECTION 7 — PII & SENSITIVE INFORMATION AUDIT

Scope: current tree (manual read of every config/seed/test file + gitleaks) and full Git history (`gitleaks git .`, 173 commits scanned, 146.9 MB, 255 findings in 20 commits). Values below are masked.

### 7.1 Current tree — FOUND

| Location | Content | Type |
|---|---|---|
| `backend/.env` (tracked, 6 commits since 2025-05-09) | `MONGO_DB_URL`, `JWT_SECRET` (38 chars), `ACCESS_SECRET` (same value), `cloudinaryAPIKey` (15 digits), `cloudinaryAPISecret` (27 chars), `cloudinaryAPIEnvironmentEVariable` (full `cloudinary://key:secret@cloud` URL), `EMAIL_USER` (`medi…@gmail.com`), `EMAIL_PASSWORD` (16-char Gmail app password), `GOOGLE_API_KEY` (`AIza…`, 39 chars) | secrets |
| `backend/.env.example` | identical Cloudinary key/secret, Gmail app password and Google API key as `.env`; weaker JWT secret | secrets |
| `backend/server/db/seeding/adminSeeding.js` | three personal `@gmail.com` addresses, first/last names, bcrypt hashes, a shared coordinate | PII |
| `frontend/test/login.spec.js` | a developer's personal email and plaintext password `Test@…` | PII + credential |
| `backend/server/controllers/scanPrescriptionController/ocrTest.js` | OCR.space key literal `"helloworld"` (public demo key, not a secret) | note |

The `.env` header states the values are "cred for testing that may or may not be valid". Validity was NOT tested (no outbound calls were made). Treat as live until rotated.

### 7.2 Git history — FOUND

| Finding | Where | Commit(s) |
|---|---|---|
| Hard-coded Google API key in source | `backend/server/controllers/scanPrescriptionController/ocrTest.js` and ~45 `.history/…/ocrTest_2025082807*.js` snapshots | `1588f1c5` and earlier |
| Credential literal in Redis client config | `backend/server/helper/redisHelper.js`, `.history/…/redisHelper_20250627103207.js` | `a2514ade` (2025-08-29) |
| `.env` snapshots | `.history/backend/.env_2026100…` ×14 | Oct 2025–Oct 2026 |
| `backend/.env` committed | 6 commits (`693e9f1d`, `72852470`, `a9635b35`, `48708c3c`, `074ab3a0`, `f32b2fe1`) | 2025-05-09 → 2026-10-13 |
| `MediGo project proposal.pdf` | added `3f281dfe` (2025-05-08), deleted `95e09d5d` (2025-10-05); still retrievable | — |
| `node_modules/` | 4,530 paths added then removed | May 2025 |
| `.history/` (VS Code Local History) | 40,923 paths added then removed in several passes | Jun 2025–Oct 2026 |

### 7.3 Summary

| Check | Result |
|---|---|
| Current Sensitive Information Findings | **FOUND** |
| Historical Sensitive Information | **FOUND** (gitleaks executed over full history) |
| Potential PII | **FOUND** (developer emails, names, a plaintext password) |
| Potential Security Secrets | **FOUND** (Cloudinary secret, Gmail app password, Google API key, JWT secrets) |
| Medical / customer / financial data | NONE found (no patient data in repo) |
| Internal infrastructure | localhost only; no internal hostnames |

Gate G1 is open. Remediation requires credential rotation **and** history rewrite (git filter-repo) followed by a clean gitleaks run.

---

## SECTION 8 — GIT HISTORY, CHANGES & COMMITS

| Metric | Value |
|---|---|
| First commit | `98ba06a2` 2025-05-08 "Add frontend directory as a normal folder" |
| Latest commit | `f32b2fe1` 2026-10-13 "new frontend fixes" |
| Total commits on `main` | 247 (248 across all refs) |
| Unique (author-date, subject) pairs | **137** — the log is nearly fully duplicated; two parallel chains with identical messages and dates indicate a history rewrite/re-merge |
| Non-merge commits / unique | 193 / 108 |
| Merge commits | 54 (30 are GitHub "Merge pull request" commits, 12 are branch syncs, rest conflict fixes) |
| Active (distinct) commit days | 45 |
| Development period | 17 months, but effectively May–July 2025 (194 commits) + Aug–Sep 2025 (12) + Oct 2025 & Oct 2026 hardening (41) |
| Authors | 3 people under 7 identities: Samrat Poudel 203 non-merge commits (4 identities incl. `@swifttech.com` / `.com.np`), Utsav Luitel 44 (2 identities), Jenish Oli 4 |
| Branches | `main`, `origin/project/samrat` (1 ahead, 212 behind), `origin/project/utsav`, `origin/project/jenish` (stale) |
| Tags | none |
| Commit hours (author local) | peak 19:00–22:00 (113 commits), secondary 11:00–15:00 |

Commit-size distribution: largest commits are hygiene events — removing committed `node_modules` (−937,572 lines, `26c5d4d0`), adding/removing the Vite template `node_modules` (±317,510), `.history` additions of 100k+ lines. Feature commits are typically 5–40 files.

Commit-message analysis:

| Pattern | Examples | Count |
|---|---|---|
| Generic / repeated | "added files" ×8, "added all files" ×4, "husky" ×4, "fixed all", "push", "message", "fixing code" | ~40 % of unique messages |
| Feature-oriented | "added chat message in system", "added pharmacy and maps in system", "OCR completed", "added priority queue", "added forgot password route" | ~35 % |
| Bug-fix / security | "fixed editPatientDetails abd Pharmacy delete/approve unauthenticated", "fixes for routes protection, saltrounf and socker auth similarly user password leakage" | ~10 % |
| Infra / tooling | "configured docker and github actions", "frontend ci/cd and eslint config", "configured logger in systen", "rate limiter and token sepration done" | ~10 % |
| Hygiene | "Remove node_modules and update .gitignore", "Delete .history directory" ×3, "Delete backend/.env", "Add .env to gitignore" | ~5 % |

Refactoring commits: few (logger introduction, rate-limiter extraction, env schema). Dependency updates: "Add redis dependency". Architectural changes: socket server added July 2025; config/env schema Oct 2026.

Assessment: the history demonstrates real, incremental, multi-person development with a plausible chronology (models → routes → controllers → admin UI → doctor UI → OCR → chat → hardening). It is degraded by committed `node_modules`, `.history` and `.env`, a duplicated commit chain, generic messages and misspellings.

**Git History Quality: 4/10.**

---

## SECTION 9 — PULL REQUEST ANALYSIS

Evidence available only from merge commits (the GitHub API was not queried; `gh` is not installed).

| PR | Date | Branch | Merged by |
|---|---|---|---|
| #1–#3, #5–#7 | 2025-05-15 → 05-21 | project/samrat | Samrat Poudel (own branch) |
| #4, #8–#10, #12, #14–#16 | 2025-05-16 → 06-22 | project/utsav | #4 by Samrat; others by Utsav (own branch) |
| #13 | 2025-06-17 | project/jenish | Jenish (own branch) |
| #11 | — | absent from history (closed or unmerged) | — |

Fifteen PRs merged in 5½ weeks, then the workflow stopped; all later work (July 2025 onward, 100+ commits) was pushed directly to `main`. PR titles beyond branch names, descriptions, review comments, requested changes and iteration counts are **NOT AVAILABLE**. Most PRs appear self-merged.

**PR / Code Review Maturity: 4/10** (a PR workflow existed briefly; review content unverified).

---

## SECTION 10 — TESTING & COVERAGE

| Item | Finding |
|---|---|
| Unit tests | `backend/server/test/signUp.test.js` — 5 Jest cases for `signUpUser` with mocked Mongoose models, bcrypt and the yup schema; covers success (patient, doctor), 409 duplicate, 400 validation, 500 generic |
| Integration / API tests | none |
| End-to-end | `frontend/test/login.spec.js` — 1 Playwright case (login → expect `/dashboard` and "Welcome"); uses a developer's real email/password; `playwright.config.js` starts both dev servers |
| UI / functional / performance / security tests | none |
| Fixtures, mocks, test data | inline `jest.mock` only |
| Failure-path tests | 3 of 5 unit cases |
| Test LOC / ratio | 114 / 0.97 % |
| Result as committed | Jest: **3 pass, 2 fail** (message typo; doctor-path mock expectation). Playwright: not run |
| Coverage report | `npm run test:coverage` script exists; no report in repo. **Measured test coverage was not available.** |
| CI | both workflows run lint (+ Jest for backend) — currently failing; Dockerfile `test` stage would also fail at `npm run lint` |

Also: tests cannot run without the committed `.env` (env validation exits the process), and the Playwright login spec asserts a `/dashboard` URL that no route in `App.jsx` matches for Patients (`/Home`) — only `/doctor/dashboard` would.

**Testing Maturity Score: 2.5/10.**

---

## SECTION 11 — CODE QUALITY & READABILITY

### Positives (with examples)
- One use case per file, short functions (most controllers 15–40 lines).
- Uniform error convention `return next({ code, message })` across ~45 controllers.
- `env.js`: schema-validated, frozen config object; `loggerHelper.js`: pino with `redact` for cookies/tokens.
- `showAllPharmacy.js`: small pure helpers (`getAllPharmacies`, `formatPharmacyResponse`) separated from the handler.
- `location.jsx`: `useCallback`/`useMemo`, marker cleanup, geolocation permission handling, debounced radius.
- `App.jsx`: route-level code splitting with `lazy`, nested role guards.

### Negatives (with examples)
- **Typos baked into identifiers and URLs:** `recieverId` (schema + API), `Remainder`/`reaminderRoute.js`, `gerAllUnapprovedAppointment.js`, `getAllToadysAppointment.js`, `verfiyOTP.js`, `extraxtText` (schema field, so OCR text is never persisted under the intended name), `err.mesasge`; 9 files with "sucessful".
- **Odd structure:** directories named `chatController.js/` and `blogController.js/`; routes split between `routes/authRoute/patientRoute.js` and `routes/patientRoute.js`.
- **Duplication:** 9 near-duplicate pairs by sequence similarity — `CreateDoctor.jsx` ↔ `UserDoctorRegistrationPage.jsx` 0.99, `AdminProfile.jsx` ↔ `Profile.jsx` 0.98, `PopUpModal.jsx` ↔ `UserPopUp.jsx` 0.97, `AdminProfile.jsx` ↔ `viewProfile.jsx` 0.90, `gerAllUnapprovedAppointment.js` ↔ `getAllToadysAppointment.js` 0.84, `getAllAppointments.js` ↔ `getAllPatient.js` 0.83, `DeletePharmacy.jsx` ↔ `removeDoctor.jsx` 0.80, `deleteDoctor.js` ↔ `deletePatient.js` 0.77.
- **Dead code:** `AuthContext.jsx` (2 lines, unused), `UserData.jsx` (empty), `astarRoute.js` (all comments), `MapWithPath.jsx` (calls missing endpoint), `roadGraph.json`, unused imports (`express`, `AxiosError`, `useQueryClient` partially), stray statements `getAllAppointmentForDoctor;` and `getBlogsOfSpecificUser;` in route files.
- **Debug residue:** 53 `console.log` in frontend; 4 `console.*` in backend.
- **Hard-coding:** 10 `localhost` URLs in source; socket ports 5000/1000/1001; CORS allow-list; bcrypt rounds `10` in `changePassword.js` despite `SALT_ROUND` env.
- **Inconsistent formatting:** tabs (`MapWithPath.jsx`) vs 2-space; trailing-comma styles differ; mixed quote styles.
- **HTTP semantics:** `201` for read endpoints (`userCount.js`); `401` for "no chat users"; `signOut.js` clears cookie `accessToken` twice though the cookie set at login is `token`.
- **Three `.gitignore` files**, one UTF-16 encoded with a `.backup` suffix.

| Score | Value |
|---|--:|
| Code Quality | **4.5/10** |
| Readability | **5/10** |
| Maintainability | **4/10** |

---

## SECTION 12 — AI-GENERATED CODE LIKELIHOOD

**Git signals.** Organic chronology with weekly feature increments (May–July 2025), merge conflicts, hygiene mistakes, and a late 41-commit burst (2025-10-05/06, 2026-10-12/13) that added Docker, CI, pino, rate limiters, env validation and security fixes in two days. Timestamps cluster in evenings. The duplicated chain is a tooling artefact, not an authorship signal.

**Source signals.** Later files (`Dockerfile`, `.dockerignore`, `env.js`, `rate_limiter.js`, `showAllPharmacy.js`, `location.jsx`, `ProtectedRoute.jsx`, `index.js` CORS comment "Allow requests without an Origin header, such as server-to-server calls.") are noticeably more polished and commented than the May–July code. Error-handling templates are uniform. Against: pervasive human misspellings, inconsistent naming, commented-out experiments, a Windows absolute path left in a deleted file, mismatched ports and secrets, a failing test left in place.

| Category | Evidence |
|---|---|
| Strong | none |
| Moderate | stylistic discontinuity between the 2025 core and the Oct-2025/2026 hardening files |
| Weak | uniform try/catch → `next()` scaffolding; descriptive comments in a few files |
| Against | typos in identifiers, organic bug-fix commits, three identifiable contributors, academic-project artefacts |
| Inconclusive | duplicated commit chain; no tool-specific markers |

**AI Code Likelihood Score: 5/10 (moderate / inconclusive).** No specific tool is identified. Value-neutral per §17.7.

---

## SECTION 13 — DEEP TECHNICAL COMPLEXITY ANALYSIS

### 13.1 Architecture — 4/10
Layered Express (routes → middleware → controllers → Mongoose models) with helper singletons; React SPA with route-based role guards and TanStack Query. Not Clean/Hexagonal: controllers call models directly; there is no service layer; `doctorRoute.js` imports admin controllers; `patientRoute.js` upload route lacks `isPatient`; a second Express/http instance exists solely to host Socket.IO (`initializeSocket.js`), created as an import side effect. Extensibility is by adding files; coupling is moderate; cohesion per file is good.

### 13.2 Module complexity — 4.5/10

| Module | Purpose | Key files | Difficulty |
|---|---|---|---|
| Auth / OTP | sign-up/in, roles, JWT, OTP reset | `userAuthController/*`, `authMiddleware.js`, `rate_limiter.js` | moderate |
| Admin | user/doctor/pharmacy management, counts | `adminController/*` | low |
| Doctor | appointments, patients, age aggregation, prescriptions | `doctorController/*` | low–moderate |
| Appointment + priority | booking, ownership, cron slot assignment | `appointmentController/*`, `appointmentPriority/*` | moderate (and buggy) |
| Prescription OCR | multer → Jimp → OCR.space → Gemini → regex → Cloudinary | `scanPrescriptionController/*`, `multerHelper.js` | highest in repo |
| Pharmacy / geo | CRUD, Haversine radius search | `pharmacyController/*`, `geoUtils.js`, `location.jsx` | moderate |
| Chat | REST persist + Socket.IO emit via Redis presence | `chatController.js/*`, `socketIo/*`, `ChatApp/*` | moderate |
| Blog, Reminder | CRUD; cron mailer | `blogController.js/*`, `ReminderController/*` | low |

### 13.3 Algorithmic complexity — 3.5/10

| Algorithm | What / where | Difficulty & notes |
|---|---|---|
| Damerau-Levenshtein (OSA) | `damerauLevenshtein.js`, 38 lines, O(m·n) matrix | textbook; used by `Redis.js` to pick the nearest of ~14.5k names (O(N·m·n) per lookup, no early exit); **not wired in** |
| Haversine + radius filter | `geoUtils.js` | standard formula; map → filter → sort |
| Appointment "priority queue" | `priorityQueue.js` | array push + full re-sort per insert, capped at 8; comparator keys mismatch the numeric enum; slot assignment by index |
| OCR text extraction | `extractText.js` | regex per line; naive (`/age/i` also matches "manage") |
| Age-bucket aggregation | `getDoctorPatientByAge.js` | three `$match/$group` pipelines |
| Image preprocessing | `uploadPrescription.js` | Jimp resize/grayscale/contrast/sharpen kernel/threshold |
| A\* path-finding | claimed in README and commit messages | **absent** |

No correctness-critical math, protocol parsing or original primitives. Reimplementation difficulty: low.

### 13.4 Business logic — 5/10
Rules: three roles with distinct dashboards; doctors require admin approval (`isApproved`); pharmacies have approval too; appointment uniqueness (patient, doctor, date, slot) via compound index plus a pre-check; priority by type → age band (≥70, ≤16) → date; completed/approved state flags; reminders match `HH:mm` each minute; OTP reset with 5-minute Redis TTL. Workflows are multi-entity but shallow; several rules are inconsistent (string vs numeric type, slot enum vs free text), and the reset workflow has no binding between OTP verification and password change.

### 13.5 Concurrency / async — 4/10
`async/await` throughout; two `node-cron` jobs; Socket.IO with Redis `userId → socketId` presence (set on connect, deleted on disconnect); unawaited `forEach(async)` in `FilterDoctors`; `createReminder` does not await `RemainderTable.create`; no transactions, locks, queues or idempotency.

### 13.6 Database / data — 4/10
Nine schemas (User, Doctor, Pharmacy, Appointment, Prescription, Chat, Blog, Reminder, Medicine). Relationships via `ObjectId` refs with `populate` in a few places. One explicit compound unique index; `unique` on email/licenseNo/userId. Validation: `select:false` on password, enums, maxlength (note latitude/longitude ranges swapped in `userModels.js`). No migrations; `medicineMigration.js` is a one-off RxNav import (`insertMany ordered:false`). Redis caches the full medicine list as one JSON string (1 h TTL).

### 13.7 Networking / integrations — 5/10
Cloudinary SDK upload; OCR.space multipart POST (axios, demo key, no timeout); Gemini `generateContent` (result discarded); Nodemailer Gmail service; RxNav GET; Socket.IO server+client; Leaflet/OSM tiles; browser Geolocation API. No retries, timeouts, circuit breaking or idempotency; errors bubble to the (broken) error handler.

### 13.8 Security — 4/10
Implemented: JWT bearer auth (`authMiddleware.js`), role guards, bcrypt (env salt rounds), helmet, global + four route-specific rate limiters, yup validation, Mongo ObjectId validation middleware, appointment ownership check, OTP in Redis with TTL, pino redaction, httpOnly cookies also set (unused by client).
Defects (VERIFIED in code):
1. **Account takeover:** `PATCH /api/v1/resetPassword` (`authRoute.js:23`) has no auth middleware; `changePassword.js` with no `req.user` takes `req.body.email` and sets the new password without verifying any OTP. `verifyOTP` is a separate, stateless 200/400 check and never deletes the OTP.
2. `PUT /approvePharmacy/:id` lacks `isAdmin` (`pharmacyRoute.js:13`).
3. Access token stored in `localStorage` (XSS-exposed); refresh token cookie set without `secure`.
4. Secrets committed (Section 7); `JWT_SECRET` and `ACCESS_SECRET` identical.
5. `express.static("uploads")` serves the raw upload directory.
6. Error handler leaks `err.stack` whenever `NODE_ENV !== "production"` — and `NODE_ENV` is not in the validated schema.

### 13.9 Scalability / performance — 3/10
Single-process assumptions (socket presence per instance, in-memory rate-limit store); full-collection scans (`PharmacyTable.find()` then in-memory filter; medicine matching linear over 14.5k names); 972 kB main bundle; no pagination on list endpoints.

### 13.10 Infrastructure / build — 4.5/10
Multi-stage Dockerfile (test stage runs lint + Jest, production stage `npm ci --omit=dev`); backend CI: lint → test → start → curl → docker build/run/curl; frontend CI: lint → build; husky + lint-staged. Weaknesses: CI fails as committed (lint error, 2 failing tests, missing frontend lockfile for `npm ci`, `curl http://localhost:3000` hits no route); no environment matrix, no deploy, no compose for Mongo/Redis.

### 13.11 Testing complexity — 5/10
Seven external boundaries (Mongo, Redis, Cloudinary, OCR.space, Gemini, SMTP, Socket.IO) plus cron timing and file-system uploads make meaningful integration testing non-trivial; nothing in the repo addresses this (no test containers, no mocks beyond one unit file).

---

## SECTION 14 — TECHNICAL COMPLEXITY SCORE

| Category | Score | Weight | Weighted |
|---|--:|--:|--:|
| Architecture | 4.0 | 15 % | 0.600 |
| Algorithms | 3.5 | 15 % | 0.525 |
| Business Logic | 5.0 | 15 % | 0.750 |
| Modules | 4.5 | 10 % | 0.450 |
| Concurrency / Async | 4.0 | 10 % | 0.400 |
| Database / Data | 4.0 | 10 % | 0.400 |
| Networking / Integrations | 5.0 | 10 % | 0.500 |
| Security | 4.0 | 5 % | 0.200 |
| Scalability / Performance | 3.0 | 5 % | 0.150 |
| Infrastructure / Build | 4.5 | 3 % | 0.135 |
| Testing Complexity | 5.0 | 2 % | 0.100 |
| **Technical Complexity Score (C)** | | **100 %** | **4.21 / 10 — Low** |

No category reaches 9–10; none shows an original algorithm, correctness-critical computation, binary protocol or distributed coordination. LOC and file counts did not influence any score.

---

## SECTION 15 — DEVELOPMENT EFFORT (sanity check only)

Considerations: modest architecture, no requirements discovery artefacts beyond README, textbook algorithms, moderate multi-role business logic, seven integrations to wire, simple schema, security to be done properly, testing largely absent, infra partially done.

| Profile | Person-months |
|---|--:|
| Junior developer | 10–12 |
| Mid-level developer | 6–8 |
| Senior developer | 4–5 |
| Senior/architect-led team | 4 |

Estimated realistic team: 2–3 developers · calendar duration: 3–4 months · total engineering effort: ≈ 7 person-months.
Band cross-check: C < 5 → 1,500–2,500 LOC per person-month → 11,733 / 2,500 … 11,733 / 1,500 = **4.7–7.8 person-months**. Consistent with three part-time authors across May–July 2025 plus a hardening burst. Effort is **not** a price input.

---

## SECTION 16 — VENDOR QUALIFICATION SCORE

| Component | Score | Source |
|---|--:|---|
| Repository Size Eligibility | 10 (PASS) | §2 |
| End-to-End Completeness | 5.5 | §3 (class C) |
| Executability | 5.0 | §3.2 |
| Application Maturity | 4.0 | §4 |
| Originality | 7.5 (HIGH) | §5 |
| Code Quality | 4.5 | §11 |
| Git History | 5.0 | §8 (M sub-score) |
| Testing | 3.0 | §10 (M sub-score) |
| **Mean** | **44.5 / 8 = 5.6** | |

Not counted as passes: PR review content (unknown), runtime success against live services (not verified), code completeness of advertised features (partial), reusability (low; app-specific). **Vendor Qualification Score: 5.6/10.** Informational only; not a price input.

---

## SECTION 17 — COMMERCIAL VALUATION

> Proposed internal estimation model from the pasted methodology; not a confirmed vendor formula.

### 17.1 Effective LOC
L = 11,726 − 0 − 0 − 0 + 0.5 × 14 = **11,733** (Section 2).

### 17.2 Technical Complexity
C = **4.21** (Section 14).

### 17.3 LOC Size Factor
LOCf = min(1, 1.2 × 11,733 / (11,733 + 100,000)) = min(1, 14,079.6 / 111,733) = **0.1260**.

### 17.4 Maturity & Commercial Readiness (M)

| Sub-score | Weight | Score | Weighted | Evidence |
|---|--:|--:|--:|---|
| End-to-end completeness | 20 % | 5.5 | 1.100 | Classification C: core CRUD wired; OCR→medicine, navigation, live chat stubbed/broken |
| Executability | 15 % | 5.0 | 0.750 | Frontend builds; backend boots with committed `.env`; lint/tests fail; no frontend lockfile; hard-coded ports; `.env.example` invalid; requires 6 external services |
| Application maturity | 15 % | 3.5 | 0.525 | Error handler broken for all handled errors; no migrations/monitoring; unawaited async; config partially validated |
| Testing | 15 % | 3.0 | 0.450 | 3 passing real unit tests + 2 failing; ratio 0.97 % (< 2 %) |
| Code quality | 15 % | 4.5 | 0.675 | mean of 4.5 / 5 / 4 |
| Git history | 10 % | 5.0 | 0.500 | 247 commits (137 unique), 45 active days, 3 authors → "≥100 commits or ≥40 active days" band; hygiene issues keep it at the band floor |
| PR / review | 5 % | 5.0 | 0.250 | 15 PRs merged, review content not visible |
| Documentation | 5 % | 3.5 | 0.175 | README with setup steps (duplicated numbering, inaccurate Jest claim); no API or architecture docs; frontend README is template |
| **M** | 100 % | | **4.43** | **Early-stage** (0.07 below the Intermediate threshold) |

### 17.5 Engineering score & multiplier
E = 4.21 × 0.70 + 4.43 × 0.30 = 2.947 + 1.329 = **4.28**
EngMult = 1 − (1 − 0.428)² = 1 − 0.3272 = **0.6728** (≈ 0.6724 with unrounded inputs)

### 17.6 Base value
Base = $50,000 × 0.1260 × 0.6724 = **$4,236**

### 17.7 Evidence flags

| Flag | Value | Evidence |
|---|---|---|
| NoRealTests | **0** (×1.0000) | `signUp.test.js` contains five mock-based tests with meaningful assertions, three of which pass; small but real, not IDE stubs |
| LegacyStack | **0** (×1.0000) | React 19 / Express 5 / Node 24 / ESM; function components with hooks; none of the four criteria hold |
| A | **1.0000** | |
| Out-of-calibration overlay | none (1.0) | the repository builds; no verified copyleft contamination |

### 17.8 Gates and final value

| Gate | Status | Evidence |
|---|---|---|
| G1 Secrets / PII | **OPEN** | Section 7 (tree and history) |
| G2 Licence / ownership | **OPEN** | Envato-watermarked `bigdocor.png`, unknown-origin images, Hippocratic-licensed `react-leaflet` to review |
| G3 Critical safety defect | **OPEN** | unauthenticated password reset (account takeover); error handler converting all handled errors to 500 |
| G4 Bundle | closed | single product |

**V = min($50,000, max($0, $4,236 × 1.0000)) ≈ $4,200** (uncapped $4,236; cap not reached). Conditional on all open gates being remediated.
Reachability note: at L = 11,733 the ceiling at E = 10 is $50,000 × 0.1260 = **$6,300**; engineering improvements alone cannot move the estimate past that.

### 17.9 Multi-repository
Single repository; no related repositories were assessed.

---

## SECTION 18 — SCORE SUMMARY

| Metric | Value |
|---|--:|
| Effective LOC (L) | 11,733 — PASS |
| Application Maturity | 4/10 (Early-stage) |
| Git History Quality | 4/10 |
| PR / Code Review Maturity | 4/10 |
| Testing Maturity | 2.5/10 |
| Code Quality / Readability / Maintainability | 4.5 / 5 / 4 |
| AI Code Likelihood | 5/10 (inconclusive) |
| Technical Complexity (C) | 4.21 (Low) |
| Maturity & Readiness (M) | 4.43 |
| Engineering Score (E) / EngMult | 4.28 / 0.6724 |
| LOCf | 0.1260 |
| Vendor Qualification Score | 5.6/10 |
| Estimated Commercial Value (V) | ≈ $4,200 (conditional) |
| Gates open | G1, G2, G3 |

---

## SECTION 19 — RISK REGISTER

| # | Risk | Severity | Section |
|---|---|---|---|
| 1 | Live-looking third-party credentials in tree and history | Critical | 7 |
| 2 | Unauthenticated password reset by email | Critical | 13.8 |
| 3 | Error middleware breaks every handled error response | High | 3.3 |
| 4 | Unlicensed stock images (Envato watermark) | High | 6 |
| 5 | Personal emails / plaintext password in seed and test | High | 7 |
| 6 | Advertised features (OCR→medicine, A\*, live chat) not delivered | High | 3 |
| 7 | CI/Docker test stage fails as committed; no frontend lockfile | Medium | 3.2, 13.10 |
| 8 | Hippocratic-licensed dependency | Medium | 6 |
| 9 | Contributor / institutional consent to submit unverified | Medium | 23 |
| 10 | Duplicated history and committed `node_modules`/`.history` inflate the log | Low | 8 |

---

## SECTION 20 — EVALUATION PROCEDURE LOG

1. `git ls-files`, `git log` (authors, dates, merges, branches, tags), `git shortlog`, per-commit size stats, duplicate-chain detection by tree hash and (date, subject) pairs.
2. `cloc --vcs=git`; classification script implementing §17.1 rules; per-file LOC; embedded-data and D1 duplicate checks; difflib near-duplicate scan.
3. Full read of all 106 backend files and ~20 key frontend files (routing, auth, API client, sockets, maps, chat, upload), configs, CI, Dockerfile, READMEs.
4. `gitleaks git .` over full history with redaction; manual review of `.env`, `.env.example`, seed and test files; history search for ever-tracked sensitive paths.
5. Scratch-copy execution: `npm ci/install`, ESLint, Jest (with and without `.env`), `node --check`, server boot, `vite build`; jsonwebtoken sign/verify check of secret separation; dependency license extraction from installed manifests.
6. Visual inspection of four bundled images.
7. Scoring per §13–17 anchors; no parameter was tuned.

---

## SECTION 21 — REMEDIATION PLAN (pre-submission)

1. **Secrets (G1):** rotate Cloudinary, Gmail app password, Google API key, JWT/access secrets; delete `backend/.env` from the tree; scrub literals from `.env.example`; rewrite history with `git filter-repo` to drop `backend/.env`, `.history/`, `node_modules/`, `MediGo project proposal.pdf`; force-push; re-run gitleaks until clean.
2. **PII:** replace personal emails/passwords in `adminSeeding.js` and `login.spec.js` with environment-driven fixtures.
3. **Assets (G2):** remove `bigdocor.png`; replace `a.png` and other unknown-origin images with owned or licensed files; replace the iconfinder hot-link; decide on `react-leaflet` (Hippocratic) or pin to a BSD-licensed alternative.
4. **Critical defects (G3):** require OTP verification (consume the Redis key) and authentication on `/resetPassword`; fix `errorMiddleware.js` (`res.status(code).json(...)`, validate numeric range); add `isAdmin` to `approvePharmacy`.
5. **Executability:** align Socket.IO port across server/client/proxy and read it from env; fix `prescriptionImage` import case; make `.env.example` pass `env.js`; fix the ESLint error and the two failing tests; commit a frontend lockfile; add a `/health` route for CI.
6. **Completeness (optional, raises M):** wire the medicine matcher, remove or implement navigation, remove dead files.
7. **Consent:** written authorisation from all three contributors (and any academic institution associated with the original project proposal) that the submitter may sell the repository.

---

## SECTION 22 — UNKNOWNS / NOT VERIFIED

- Vendor LOC counting method and any vendor-specific scoring rules.
- Runtime behaviour against live MongoDB, Redis, Cloudinary, OCR.space, Gemini and Gmail.
- Whether the committed credentials are currently valid.
- PR descriptions, review comments, and iteration counts.
- Ownership/licence of 15 of 17 images.
- Authorship/ownership chain: commit authors are Samrat Poudel, Utsav Luitel and Jenish Oli; the assessing workstation account is not among them.

---

## SECTION 23 — RECOMMENDATION

**Do not submit in the current state.** Three gates are open (secrets/PII in tree and history, unlicensed assets, a critical authentication defect), and the repository's advertised differentiators are not implemented.

After remediation, MediGo would qualify as a **small, low-complexity (C = 4.21), partially complete (class C) full-stack web application** with an estimated value of **≈ $4,000–$4,500** under the proposed model. Size is the binding constraint: the LOC factor of 0.126 caps the achievable value at about $6,300 even with perfect engineering scores. Growing effective LOC through real feature completion (not padding) and raising M by fixing executability and tests are the only levers that materially change the estimate.

*This is an analytical estimate, not an appraisal, guarantee or statement of vendor policy.*
