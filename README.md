**_Pastebin Lite_**

  A simple Pastebin-like web application that lets users create text pastes, generate a shareable link, and  view them until they expire by time or view limit.

**_Running Locally_**

  git clone https://github.com/Amogadev/pastebin-lite.git
  cd pastebin-lite
  npm install
  npm run dev


  The app will be available at:
  🔗 http://localhost:3000

**_Live Demo_**

🔗 https://pastebin-lite.vercel.app

**_API Endpoints_**

POST /api/pastes

GET /api/pastes/:id

GET /p/:id

_**Repository**_

🔗 https://github.com/Amogadev/pastebin-lite


_**Persistence Layer**_

  Production: Vercel KV (Upstash Redis)
  
  Local Development: In-memory JavaScript Map
  
  Vercel KV is used to ensure persistence across serverless requests, while an in-memory store is used         locally for simplicity.


_**Design Decisions**_

  Pastes support time-based expiry (TTL) and view-count limits. A paste becomes unavailable as soon as any     constraint is triggered.
  
  Implemented deterministic time testing using TEST_MODE=1 and the x-test-now-ms request header for reliable   automated tests.
  
  All unavailable pastes return HTTP 404 consistently.

  The API is stateless and serverless-safe, avoiding reliance on global mutable state.

  Paste content is rendered safely to prevent script execution.


