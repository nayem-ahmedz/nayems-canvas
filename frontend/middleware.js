// middleware.js
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req) {
  // Get the token from cookies
  const token = await getToken({ req, secret });

  // Get the requested pathname
  const { pathname } = req.nextUrl;

  // Define protected routes
  const protectedRoutes = [
    "/add-blog",
    "/manage-blogs",
    "/view-blog/:path*", // optional, if you have view page by ID
    "/dashboard/:path*" // any other dashboard pages
  ];

  // Check if the current pathname starts with a protected route
  const isProtected = protectedRoutes.some((route) => {
    if (route.includes(":path*")) {
      const base = route.split("/:")[0];
      return pathname.startsWith(base);
    }
    return pathname === route;
  });

  // If user tries to access a protected route without a token, redirect to login
  if (isProtected && !token) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Otherwise, continue
  return NextResponse.next();
}

// Apply middleware only to relevant routes
export const config = {
  matcher: [
    "/add-blog",
    "/manage-blogs",
    "/view-blog/:path*",
    "/dashboard/:path*"
  ],
};