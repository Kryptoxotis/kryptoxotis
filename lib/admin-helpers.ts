import { NextResponse } from "next/server";

export async function requireAdmin(request: Request): Promise<NextResponse | null> {
  const cookieHeader = request.headers.get("cookie") || "";
  const match = cookieHeader.match(/(?:^|;\s*)admin_token=([^;]*)/);
  const token = match ? decodeURIComponent(match[1]) : undefined;

  if (token !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
