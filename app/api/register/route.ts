import { createJWT, hashPassword } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();
  const res = new NextResponse();
  const user = await db.user.create({
    data: {
      email: req.email,
      password: await hashPassword(req.password),
      firstName: req.firstName,
      lastName: req.lastName,
    },
  });

  const jwt = await createJWT(user);
  res.cookies.set(process.env.COOKIE_NAME || "", jwt, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}
