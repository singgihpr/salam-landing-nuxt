# Salam Landing - Nuxt 3 Application

A Nuxt 3 landing page application for Salam Solusi Nusantara, built with Tailwind CSS, Pinia for state management, and optimized for SEO.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Development](#development)
- [Production Deployment](#production-deployment)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)

---

## Prerequisites

- **Node.js** v20 or later
- **npm** (or your preferred package manager)

## Development

Follow these steps to set up the project for local development:

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy the `.env.example` file to `.env` and update the values:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
NUXT_PUBLIC_COMPANY_URL="https://your-domain.com"
NUXT_PUBLIC_COMPANY_NAME="Your Company"
NUXT_PUBLIC_COMPANY_NAME_ORG="Your Company Ltd"
NUXT_PUBLIC_FOOTER_ADDRESS="Your Address"
NUXT_PUBLIC_FOOTER_EMAIL="contact@your-domain.com"
NUXT_PUBLIC_FOOTER_PHONE="(+62) xxx xxxx xxxx"
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

---

## Production Deployment

### Docker

Build and run the application using Docker:

```bash
# Build the Docker image
docker build -t salam-nuxt .

# Run the container
docker run -d -p 4000:3000 --restart unless-stopped --env-file .env --name salam salam-nuxt
```

The application will be accessible at `http://localhost:4000`.

#### Useful Commands

```bash
# Stop and remove the container
docker stop salam && docker rm salam

# View logs
docker logs -f salam

# Rebuild and redeploy (update image, then restart container)
docker build -t salam-nuxt .
docker stop salam && docker rm salam
docker run -d -p 4000:3000 --restart unless-stopped --env-file .env --name salam salam-nuxt
```

#### Notes

- Environment variables are injected at **runtime** via `--env-file .env`, so you don't need to rebuild the image to change config values.
- `--restart unless-stopped` ensures the container auto-starts on system reboot.
- `.env` is excluded from the Docker image (via `.dockerignore` or `.gitignore`), so secrets are not baked into the image.

---

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NUXT_PUBLIC_COMPANY_URL` | Company website URL | `https://example.com` |
| `NUXT_PUBLIC_COMPANY_NAME` | Display company name | `Salam Solusi Nusantara` |
| `NUXT_PUBLIC_COMPANY_NAME_ORG` | Official organization name | `Salam Solusi Nusantara Ltd` |
| `NUXT_PUBLIC_FOOTER_ADDRESS` | Company address for footer | `Suite 957 Jl. Hotel Laid No. 81` |
| `NUXT_PUBLIC_FOOTER_EMAIL` | Contact email | `contact@example.com` |
| `NUXT_PUBLIC_FOOTER_PHONE` | Contact phone number | `(+62) 123 456 789` |

---

## Project Structure

```
salam-landing-nuxt/
├── assets/          # CSS, images, and other static assets
├── components/      # Vue components
├── composables/     # Vue composables (custom hooks)
├── pages/           # Application routes
├── public/          # Public static files (favicon, robots.txt, etc.)
├── .env.example     # Example environment variables
├── Dockerfile       # Docker configuration
├── ecosystem.config.cjs  # PM2 configuration
├── nuxt.config.ts   # Nuxt configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json     # Project dependencies and scripts
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run generate` | Generate static site |
