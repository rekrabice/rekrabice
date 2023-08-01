import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const { data } = await supabase.auth.getSession();
  const { pathname, searchParams } = req.nextUrl;

  if (pathname.startsWith("/internal") && !data.session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (pathname === "/internal" && data.session) {
    return NextResponse.redirect(new URL("/internal/scanner", req.url));
  }

  if (pathname.startsWith("/system") && !data.session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (pathname === "/system" && data.session) {
    return NextResponse.redirect(new URL("/system/prijmout", req.url));
  }

  if (pathname === "/login" && data.session) {
    return NextResponse.redirect(new URL("/system/prijmout", req.url));
  }

  if (pathname === "/auth/callback" && searchParams.get("code")) {
    return NextResponse.redirect(
      new URL(`/login?code=${searchParams.get("code")}`, req.url),
    );
  }

  return res;
}

export const config = {
  matcher: [
    "/system/:path*",
    "/login/:path*",
    "/auth/:path*",
    "/internal/:path*",
  ],
};
