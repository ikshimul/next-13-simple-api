import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
export async function GET(request, response) {
  return NextResponse.json(
    {
      msg: "New Authorization set succfully",
    },
    {
      status: 200,
      headers: {
        Authorization: "ABC-XYZ-FGH-IJK",
      },
    }
  );
}
