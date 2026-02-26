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
# Configure the MongoDB connection and port directly in the server code (see `server/index.js`)
npm run dev # or `node index.js` / `npm start` depending on package.json scripts
```

Install and run the frontend

```bash
cd form
npm install
# If the frontend needs a base API URL, configure it directly in the code or in Vite configuration
npm run dev
```

Open the app in your browser at the address shown by Vite (commonly http://localhost:5173).

## Configuration

This project does not require `.env` files by default. Configuration values such as the MongoDB connection string, server port, or frontend API base URL are defined directly in the application code or configuration files. Please inspect the following locations to change runtime settings:

- Server: `server/index.js` (or any config module used by the server)
- Frontend: check `form/src` for where the API base URL is referenced, or `vite.config.js` for Vite-level configuration

Note: If you prefer to use environment files, you may add them and update the code to read from `process.env` or Vite envs accordingly.

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
