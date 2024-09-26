import { jwtVerify } from "jose";
import { NextResponse, NextRequest } from "next/server";
export const config = {
  matcher: ["/login", "/logout", "/dashboard", "/chat", "/team"],
};
const JWT_SECRET = "mysecret";
const isAuthenticated = async (sessionToken) => {
  try {
    const userSession = await jwtVerify(
      sessionToken,
      new TextEncoder().encode(JWT_SECRET)
    );
    return userSession;
  } catch (e) {
    return false;
  }
};
export async function middleware(request) {
  try {
    const sessionToken = request.cookies.get("sessionToken")?.value || null;
    if (request.nextUrl.pathname === "/logout") {
      const response = NextResponse.redirect(new URL("/", request.url));
      response.cookies.set({
        name: "sessionToken",
        value: "",
        path: "/",
        maxAge: 0,
      });
      return response;
    }
    if (!sessionToken) {
<<<<<<< HEAD
=======
      // console.log("No sessionToken");
      // If the user is already on the login page, continue
>>>>>>> fbe612953c2fcf2680eaee0cd3799976f94d839c
      if (request.nextUrl.pathname === "/login") {
        return NextResponse.next();
      }
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  } catch (e) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
