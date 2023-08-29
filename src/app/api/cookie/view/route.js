import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function GET(request, response) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme").value;
  const language = cookieStore.get("language").value;

  return NextResponse.json(
    { theme: theme, language: language },
    {
      status: 200,
    }
  );
}
