# Uday Creative Portfolio

Production-ready Next.js App Router portfolio for photography, video editing, and frontend work. Existing visual sections remain in `app/components`; server infrastructure lives in `lib` and `app/api`.

## Local setup

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

`MONGODB_URI` is required for contact submissions and seeding. Configure `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM`, and `CONTACT_EMAIL` for email notifications. Set `NEXT_PUBLIC_SITE_URL` to the deployed canonical URL.

## Database

Create a MongoDB Atlas database, configure its network policy, set `MONGODB_URI`, then seed sample portfolio items and a testimonial:

```bash
npm run seed
```

Schemas are in `lib/models.ts`; the inquiry endpoint is `app/api/inquiries/route.ts`.

## Quality checks

```bash
npm run lint
npm run format:check
npm run build
```

Husky runs lint-staged on commit. GitHub Actions repeats lint and build for pushes to `main` and pull requests.

## Deployment

Import the repository into Vercel, configure the environment variables in project settings, and use the default Next.js build command. Vercel serves the App Router API route as a serverless function, while MongoDB Atlas provides persistence.

SEO endpoints are available at `/sitemap.xml` and `/robots.txt`.
