import { NextResponse } from "next/server";
import { createHmac } from "crypto";

function deriveToken(password: string): string {
  return createHmac("sha256", password).update("admin-session").digest("hex");
}

export function getExpectedToken(): string | null {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return null;
  return deriveToken(pw);
}

export async function requireAdmin(request: Request): Promise<NextResponse | null> {
  const expected = getExpectedToken();
  if (!expected) {
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  const cookieHeader = request.headers.get("cookie") || "";
  const match = cookieHeader.match(/(?:^|;\s*)admin_token=([^;]*)/);
  const token = match ? decodeURIComponent(match[1]) : undefined;

  if (token !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
