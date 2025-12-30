Pastebin Lite
  A simple Pastebin-like web application that allows users to create and share text pastes using a unique URL.

Live Demo
  https://pastebin-lite.vercel.app

Features
   Create text pastes via REST API
   Generate shareable links
   Optional expiration by time or number of views
   Server-side enforcement of expiry rules

Tech Stack
  Next.js
  Node.js
  Vercel KV (Upstash Redis)

API Endpoints
  POST /api/pastes
  GET /api/pastes/{id}
  GET /p/{id}

Repository
  https://github.com/Amogadev/pastebin-lite
