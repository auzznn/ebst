# EBST Monorepo

A monorepo containing the EBST web application, API backend, and shared database package.

## Structure

```
ebst/
├── apps/
│   ├── ebst/                    # Next.js 16 frontend (@ebst/web)
│   │   ├── app/                 # Next.js App Router
│   │   ├── components/          # React components
│   │   ├── hooks/               # Custom React hooks
│   │   ├── lib/                 # Utilities (auth, etc.)
│   │   └── public/              # Static assets
│   └── nest-backend/            # NestJS 11 backend (@ebst/api)
│       └── src/                 # NestJS application
├── packages/
│   └── db/                      # Shared database package (@ebst/db)
│       ├── prisma/
│       │   ├── schema.prisma    # Prisma schema
│       │   └── migrations/      # Database migrations
│       ├── prisma-generated/    # Generated Prisma Client
│       ├── src/                 # Database utilities
│       └── prisma.config.ts     # Prisma configuration
├── shared/                      # Legacy shared code (deprecated)
├── package.json                 # Root package.json with workspaces
├── tsconfig.json                # Shared TypeScript configuration
├── docker-compose.yaml          # PostgreSQL database
├── .env                         # Environment variables (gitignored)
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Docker & Docker Compose

### Installation

Install all dependencies for all workspaces:

```bash
npm install
```

### Database Setup

1. **Create environment file:**

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/ebst?schema=public

# PostgreSQL Docker Configuration
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=ebst
```

2. **Start PostgreSQL database:**

```bash
docker-compose up -d
```

3. **Generate Prisma client:**

```bash
npm run db:generate
```

4. **Run database migrations:**

```bash
npm run db:migrate
```

Alternatively, push the schema directly (development only):

```bash
npm run db:push
```

### Development

Run all apps in development mode:

```bash
npm run dev
```

Run specific apps:

```bash
# Frontend only (Next.js)
npm run dev:web

# Backend only (NestJS)
npm run dev:api
```

### Building

Build all apps:

```bash
npm run build
```

Build specific apps:

```bash
# Frontend only
npm run build:web

# Backend only
npm run build:api
```

## Workspaces

- **@ebst/web** - Next.js 16 frontend with React 19, TailwindCSS 4, shadcn/ui, Better Auth, and React Hook Form
- **@ebst/api** - NestJS 11 backend with Prisma ORM, Socket.IO, and Redis adapter support
- **@ebst/db** - Shared database package with Prisma Client

## Available Scripts

### Application Scripts

- `npm run dev` - Run all apps in development mode
- `npm run dev:web` - Run frontend only
- `npm run dev:api` - Run backend only
- `npm run build` - Build all apps
- `npm run build:web` - Build frontend only
- `npm run build:api` - Build backend only
- `npm run start` - Start all apps in production mode
- `npm run lint` - Lint all apps
- `npm run test` - Test all apps

### Database Scripts

Run from the root or from `/packages/db`:

- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run database migrations (development)
- `npm run db:push` - Push database schema (development only)
- `npm run db:studio` - Open Prisma Studio (database GUI)
- `npm run db:reset` - Reset database and re-run all migrations

## Tech Stack

### Frontend (@ebst/web)

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, TailwindCSS 4, shadcn/ui
- **Authentication:** Better Auth with Prisma adapter
- **Forms:** React Hook Form with Zod validation
- **Icons:** Lucide React
- **Components:** Radix UI primitives

### Backend (@ebst/api)

- **Framework:** NestJS 11
- **ORM:** Prisma
- **WebSockets:** Socket.IO with Redis adapter
- **Validation:** class-validator, class-transformer

### Database (@ebst/db)

- **Database:** PostgreSQL 18 (via Docker)
- **ORM:** Prisma 7
- **Migrations:** Prisma Migrate

## Package Naming

- `@ebst/web` - Frontend application
- `@ebst/api` - Backend application
- `@ebst/db` - Database package

## Adding Dependencies

Add dependencies to specific workspaces:

```bash
# Add to frontend
npm install <package> -w @ebst/web

# Add to backend
npm install <package> -w @ebst/api

# Add to database package
npm install <package> -w @ebst/db
```

Add dev dependencies:

```bash
npm install <package> -D -w @ebst/web
```

## Environment Variables

### Required Environment Variables

```env
# Database (required)
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public

# PostgreSQL Docker (for docker-compose)
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=ebst
```

## Architecture Notes

- **Database Access:** The `@ebst/db` package centralizes database operations. Import Prisma client from this package rather than generating it in individual apps.
- **Authentication:** Uses Better Auth with Prisma adapter for user management, session handling, and username support.
- **Real-time Communication:** Backend supports WebSockets via Socket.IO with optional Redis adapter for horizontal scaling.
- **Frontend Architecture:** Next.js 16 with App Router, server components, and React 19 features.
