# Fleet Management System Monorepo

This monorepo contains a full-stack Fleet Management System using:

- **Frontend:** React (Vite), Tailwind CSS, Shadcn UI
- **Backend:** Node.js/Express
- **API Layer:** Hasura (GraphQL)
- **Database:** PostgreSQL
- **Containerization:** Docker Compose

## Project Structure

- `frontend/` - React app (Vite, Tailwind, Shadcn)
- `backend/` - Node.js/Express app (custom logic, integrations)
- `docker-compose.yml` - Orchestrates all services

## Services

- **frontend:** React app (port 5173)
- **backend:** Node/Express API (port 4000)
- **hasura:** GraphQL engine (port 8080)
- **postgres:** PostgreSQL database (port 5432)

## Getting Started

1. **Clone the repo**
2. **Run all services:**
   ```sh
   docker-compose up --build
   ```
3. **Access services:**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend: [http://localhost:4000](http://localhost:4000)
   - Hasura Console: [http://localhost:8080](http://localhost:8080)

## Environment Variables

See `docker-compose.yml` for all environment variables.

---

You can now proceed to develop each service in its respective folder. 