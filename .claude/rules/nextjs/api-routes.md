---
paths:
  - "app/api/**"
---

# API Route Handlers

## Structure

```tsx
// app/api/auth/callback/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  if (!code) {
    return NextResponse.json({ error: 'Missing code' }, { status: 400 });
  }
  // exchange token server-side
  return NextResponse.redirect(new URL('/', request.url));
}
```

## Rules

- Export `GET`, `POST`, etc. — named HTTP methods only
- `await params` in dynamic routes: `{ params }: { params: Promise<{ id: string }> }`
- Return `NextResponse.json()` with correct status codes
- Secrets from `process.env` — never hardcode or commit
- OAuth: exchange code server-side; store token in **httpOnly** `Set-Cookie`
- No business logic in Route Handlers that belongs in `app/lib/` — keep handlers thin

## Proxy (Next.js 16)

Use `proxy.ts` at project root instead of legacy `middleware.ts` for new request interception.
