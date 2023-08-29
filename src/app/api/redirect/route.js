import { redirect } from "next/navigation";
export async function GET() {
  const redirectTo = "/";
  return redirect(redirectTo);
}
