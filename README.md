# Healthlink-Pro-MERN-Project

A simple clinic appointment and prescription management system built with the MERN stack.

## Overview

Healthlink-Pro is a demo MERN (MongoDB, Express, React, Node) application that lets doctors and patients register, book and view appointments, and create/view prescriptions. The repository contains both the frontend (Vite + React + Tailwind) under `form/` and the backend (Express + MongoDB) under `server/`.

## Key Features

- User registration & login (doctors, patients)
- Appointment booking and viewing
- Prescription creation and viewing
- Simple role separation for doctors and patients

## Tech Stack

- Frontend: React (Vite), Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB (assumed)

## Repository Structure

- [form](form) — Frontend (React + Vite)
  - [form/src](form/src) — React source files
  - [form/src/component](form/src/component) — React components (Login, Register, Booking, Dashboard, etc.)
  - [form/package.json](form/package.json)

- [server](server) — Backend (Express)
  - [server/index.js](server/index.js) — App entry
  - [server/controllers](server/controllers) — Route handlers
  - [server/models](server/models) — Mongoose models (Booking, Doctor, Patient, Prescription)
  - [server/routes](server/routes) — Router modules (bookingRoutes.js, doctorRoutes.js, patientRoutes.js, prescriptionRoutes.js)
  - [server/package.json](server/package.json)

## Getting Started

Prerequisites

- Node.js (v14+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

Clone the repo

```bash
git clone https://github.com/Harits77/Healthlink-Pro-MERN-Project.git
cd Healthlink-Pro-MERN-Project
```

Install and run the backend

```bash
cd server
npm install
# create a .env file with at least the MongoDB connection string
# Example .env variables (adjust names according to server code expectations):
# MONGO_URI=<your-mongodb-uri>
# PORT=5000
# JWT_SECRET=<optional-if-used>
npm run dev # or `node index.js` / `npm start` depending on package.json scripts
```

Install and run the frontend

```bash
cd form
npm install
# If the frontend expects a base API URL, set it in an env file (e.g. VITE_API_URL="http://localhost:5000/api")
npm run dev
```

Open the app in your browser at the address shown by Vite (commonly http://localhost:5173).

## Environment Variables

Typical server variables (create `server/.env`):

- `MONGO_URI` — MongoDB connection string
- `PORT` — server port (default: 5000)
- `JWT_SECRET` — secret for JWT auth (if implemented)

Typical frontend variables (create `form/.env` or use Vite env prefix):

- `VITE_API_URL` — base API URL (e.g. `http://localhost:5000/api`)

Note: Check the server code for exact env variable names used in configuration.

## API Overview

The backend organizes endpoints by resource. The exact routes are implemented under `server/routes/` and handled in `server/controllers/`.

Common route groups (examples):

- `/api/doctors` — doctor registration, login, details
- `/api/patients` — patient registration, login, details
- `/api/bookings` — create, list, update, cancel appointments
- `/api/prescriptions` — create and fetch prescriptions

Consult the route files for full endpoint details:

- [server/routes/doctorRoutes.js](server/routes/doctorRoutes.js)
- [server/routes/patientRoutes.js](server/routes/patientRoutes.js)
- [server/routes/bookingRoutes.js](server/routes/bookingRoutes.js)
- [server/routes/prescriptionRoutes.js](server/routes/prescriptionRoutes.js)

## Development Notes

- Frontend: components live in `form/src/component`. Typical pages include `Login.jsx`, `Register.jsx`, `Booking.jsx`, `ViewPrescription.jsx`, etc.
- Backend: models are in `server/models` (Booking, Doctor, Patient, Prescription). Controllers implement business logic in `server/controllers`.

If you add authentication or other middleware, place it in the server and apply routes accordingly.

## Scripts

Check each `package.json` for available scripts. Typical commands:

- Frontend: `npm run dev`, `npm run build`, `npm run preview`
- Backend: `npm run dev` (if using nodemon) or `npm start`

## Contributing

Feel free to open issues or PRs. When contributing, please:

- Fork the repo and create a feature branch
- Open a pull request with a clear description of changes

## Troubleshooting

- If the frontend cannot reach the backend, verify `VITE_API_URL` and that the server is running and not blocked by firewall.
- For database errors, ensure `MONGO_URI` is correct and accessible.

## License

This repository does not include an explicit license; add one if you intend to share or publish the project.

---

If you want, I can also:

- Add example `.env` templates for `server` and `form`.
- Generate more detailed API docs (endpoints + request/response samples) by reading the route/controller code.

File: [README.md](README.md)
