import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_PATHS = ["/favicon.ico", "/robots.txt", "/manifest.json"];

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  if (
    PUBLIC_PATHS.includes(pathname) ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  const hasLocale = /^\/(en|fa|pt)(\/|$)/.test(pathname);
  if (hasLocale) return NextResponse.next();

  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const acceptLang = request.headers.get("accept-language");
  const browserLang = acceptLang?.split(",")[0]?.split("-")[0];
  const locale = cookieLocale || browserLang || "en";

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|.*\\..*).*)"],
};
