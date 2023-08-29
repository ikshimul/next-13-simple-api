import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function GET(request, response) {
  // cookies().set("theme", "dark");
  // cookies().set("language", "en");

  return NextResponse.json(
    { msg: "cookie set succesfully" },
    {
      status: 200,
      headers: {
        "Set-Cookie": ["language=en;Path=/;", "theme=dark;Path=/;"],
      },
    }
  );
}
