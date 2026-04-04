# EBST Monorepo

A monorepo containing the EBST web application and API backend.

## Structure

```
ebst/
├── apps/
│   ├── ebst/          # Next.js frontend (@ebst/web)
│   └── nest-backend/  # NestJS backend (@ebst/api)
├── shared/
│   ├── prisma/
│   │   ├── schema.prisma  # Shared Prisma schema
│   │   ├── migrations/    # Database migrations
│   │   └── prisma.config.ts
│   └── prisma-generated/  # Generated Prisma Client (auto-generated)
├── package.json       # Root package.json with workspaces
├── tsconfig.json      # Shared TypeScript configuration
├── docker-compose.yaml # PostgreSQL database
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

Install all dependencies for all workspaces:

```bash
npm install
```

### Development

Run all apps in development mode:

```bash
npm run dev
```

Run specific apps:

```bash
# Frontend only
npm run dev:web

# Backend only
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

### Database

Start the PostgreSQL database:

```bash
docker-compose up -d
```

Generate Prisma client:

```bash
npm run db:generate
```

Push database schema:

```bash
npm run db:push
```

## Workspaces

- **@ebst/web** - Next.js 16 frontend with React 19, TailwindCSS, and shadcn/ui
- **@ebst/api** - NestJS 11 backend with Prisma ORM and Socket.IO

## Available Scripts

- `npm run dev` - Run all apps in development mode
- `npm run dev:web` - Run frontend only
- `npm run dev:api` - Run backend only
- `npm run build` - Build all apps
- `npm run start` - Start all apps in production mode
- `npm run lint` - Lint all apps
- `npm run test` - Test all apps
- `npm run db:generate` - Generate Prisma client for all apps
- `npm run db:push` - Push database schema for all apps

## Package Naming

- `@ebst/web` - Frontend application
- `@ebst/api` - Backend application

## Adding Dependencies

Add dependencies to specific workspaces:

```bash
# Add to frontend
npm install <package> -w @ebst/web

# Add to backend
npm install <package> -w @ebst/api
```

Add dev dependencies:

```bash
npm install <package> -D -w @ebst/web
```
