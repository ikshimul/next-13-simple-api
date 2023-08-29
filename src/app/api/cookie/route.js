import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
export async function GET(request, response) {
  let headerList = headers();
  let Bearer = headerList.get("Bearer");
  return NextResponse.json(
    {
      msg: "cookie set succesfully",
      Authorization: Bearer,
    },
    {
      status: 200,
      headers: {
        token: "ABC-XYZ",
        Authorization: `Bearer ${Bearer}`,
        "Set-Cookie": ["language=en;Path=/;", "theme=dark;Path=/;"],
      },
    }
  );
}
