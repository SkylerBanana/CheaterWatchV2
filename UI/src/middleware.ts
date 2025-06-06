import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico|login).*)"],
};
