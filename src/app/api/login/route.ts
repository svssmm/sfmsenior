import { NextResponse } from "next/server";
import { encrypt } from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  // For this project, we use the specific credentials provided
  // In a real app, you'd check this against the database
  if (username === "admin" && password === "sfmadmin") {
    const expires = new Date(Date.now() + 2 * 60 * 60 * 1000); // 2 hours
    const session = await encrypt({ username, expires });

    const cookieStore = await cookies();
    cookieStore.set("session", session, {
      expires,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 });
}
