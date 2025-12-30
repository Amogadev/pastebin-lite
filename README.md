**Pastebin Lite**

A simple Pastebin-like web application that allows users to create text pastes, generate a shareable link, and view the paste until it expires based on time or view limits.

**How to run the app locally**

git clone https://github.com/Amogadev/pastebin-lite.git
cd pastebin-lite
npm install
npm run dev

The app will be available at:
http://localhost:3000

**Persistence layer used**
  Production: Vercel KV (Upstash Redis)
  Local development: In-memory JavaScript Map

Vercel KV is used in production to ensure data persists across serverless requests.
An in-memory store is used locally for simplicity and faster development.

**Important design decisions**

  Implemented time-based expiry (TTL) and view-count limits, where a paste becomes unavailable as soon as any constraint triggers.
  
  Implemented deterministic time testing using TEST_MODE=1 and the x-test-now-ms request header, allowing automated tests to control time.
  
  Ensured all unavailable pastes return HTTP 404 with JSON for API routes.
  
  Designed API responses to be stateless and serverless-safe, avoiding reliance on global mutable state.
  
  Paste content is rendered safely in the UI to prevent script execution.

**Live Demo**

  https://pastebin-lite.vercel.app

**Features**

   Create text pastes via REST API
   Generate shareable links
   Optional expiration by time or number of views
   Server-side enforcement of expiry rules

**Tech Stack**

  Next.js
  Node.js
  Vercel KV (Upstash Redis)

**API Endpoints**

  POST /api/pastes
  GET /api/pastes/{id}
  GET /p/{id}

**Notes**
  Uses in-memory store locally and Vercel KV (Upstash Redis) in production
  Designed for automated API testing

**Repository**

  https://github.com/Amogadev/pastebin-lite
  
