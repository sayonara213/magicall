import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }

  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/app", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/", "/app/", "/auth/"],
};
