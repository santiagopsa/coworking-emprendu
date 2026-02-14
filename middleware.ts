import { NextRequest, NextResponse } from "next/server";

const SEEN_COOKIE = "firo_locale_seen";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const seen = request.cookies.get(SEEN_COOKIE)?.value === "1";

  if (pathname === "/" && !seen) {
    const acceptLanguage = request.headers.get("accept-language")?.toLowerCase() ?? "";
    const prefersSpanish = acceptLanguage.startsWith("es") || acceptLanguage.includes(",es");

    if (prefersSpanish) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = "/es";
      const response = NextResponse.redirect(redirectUrl);
      response.cookies.set(SEEN_COOKIE, "1", { path: "/", maxAge: 60 * 60 * 24 * 365 });
      return response;
    }

    const response = NextResponse.next();
    response.cookies.set(SEEN_COOKIE, "1", { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  if (pathname === "/es" && !seen) {
    const response = NextResponse.next();
    response.cookies.set(SEEN_COOKIE, "1", { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/es"],
};
