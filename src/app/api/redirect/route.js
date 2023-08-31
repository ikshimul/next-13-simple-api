import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
export async function GET(req) {
  const redirectTo = "/";
  return NextResponse.redirect(new URL("/", req.url));
}
