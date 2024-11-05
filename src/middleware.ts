import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token");
  const { pathname } = req.nextUrl;

  if (pathname === "/" && token?.value) {
    return NextResponse.redirect(new URL("/blog", req.url));
  }

  if (!token?.value && pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/blog","/blog/:path*"],
};
