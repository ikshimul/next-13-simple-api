import { NextResponse } from "next/server";

export function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/header-modification")) {
    // const reqHeader = new Headers(req.headers);
    // reqHeader.set("Bearer", "ikshimul");
    // return NextResponse.next({
    //   request: { headers: reqHeader },
    // });
    const reqHeader = new Headers(req.headers);
    const token = reqHeader.get("Authorization");
    const with_prefix = `Bearer ${token}`;
    if (with_prefix === "Bearer ABC-XYZ-FGH-IJK") {
      console.log("middleware for header modification");
      return NextResponse.next();
    } else {
      return NextResponse.json({ message: "Request fail" }, { status: 401 });
    }
  }
}

// export const config = {
//   matcher: ["/api/:path*", "cookie"],
// };
