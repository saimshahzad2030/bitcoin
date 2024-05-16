import { NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

export function middleware(request) {
  const cookie = request.cookies.get("token");
  const token = cookie?.value;
  const decoded = cookie ? jwtDecode(token) : "";

  const path = request.nextUrl.pathname;
  if (!cookie && path != "/login") {
    return NextResponse.redirect(new URL("/user/home", request.url));
  }
  if (cookie && path != "/login") {
    return NextResponse.next();
  }
  if (cookie && path == "/login") {
    return NextResponse.redirect(new URL("/user/home", request.url));
  }
  if (
    decoded &&
    decoded.user.role == "user" &&
    (path != "/user/home" || path != "/user/calculator")
  ) {
    return NextResponse.redirect(new URL("/404", request.url));
  }
}

export const config = {
  matcher: ["/login", "/user/home", "/user/calculator"],
};
