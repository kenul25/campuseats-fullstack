
# CampusEats - Full-Stack Deployment

**SE3090 | Software Engineering Frameworks | Lab Practical 11**

CampusEats is a full-stack application deployed using cloud hosting services for the frontend, backend API, and PostgreSQL database.

## Tech Stack & Deployment

| Component | Technology | Hosting Platform |
|---|---|---|
| Frontend | React + Vite | Vercel |
| Backend API | ASP.NET Core 8 | Railway (Docker) |
| Database | PostgreSQL | Neon |
| Version Control | Git + GitHub | GitHub |

## Architecture

```text
User Browser
     |
     v
React + Vite (Vercel)
     |
     v
ASP.NET Core API (Railway)
     |
     v
PostgreSQL Database (Neon)
```

## Environment Configuration

Configure the following environment variables on the respective hosting platforms. **Never commit production secrets to GitHub.**

**Frontend - Vercel**

| Variable | Description |
|---|---|
| `VITE_API_URL` | Deployed backend API base URL |

**Backend - Railway**

| Variable | Description |
|---|---|
| `ConnectionStrings__Default` | Neon PostgreSQL connection string with SSL |
| `Jwt__Key` | Strong production JWT secret |
| `Jwt__Issuer` | `CampusEats` |
| `Jwt__Audience` | `CampusEatsUsers` |
| `Cors__AllowedOrigins` | Deployed frontend origin |

## Local Development

**Frontend**

```bash
cd web
npm install
npm run build
npm run dev
```

**Backend API**

```bash
cd api
dotnet restore
dotnet run
```

Configure local secrets using .NET User Secrets or environment variables.

## Deployment Workflow

1. Push source code to GitHub.
2. Deploy the frontend through Vercel.
3. Deploy the backend API through Railway using Docker.
4. Configure the Neon database connection and production environment variables.
5. Update `VITE_API_URL` and configure backend CORS.
6. Verify the application, API responses, deployment status, and logs.

## Security

- Keep `.env`, database credentials, JWT secrets, and other sensitive values out of Git.
- Use platform environment variables for production configuration.
- Enable SSL for PostgreSQL connections.
- Restrict CORS to the deployed frontend origin.

---

