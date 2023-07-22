import { comparePasswords, createJWT } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();
  const res = new NextResponse();
  const user = await db.user.findUnique({
    where: {
      email: req.email,
    },
  });

  const isUser = await comparePasswords(req.password, user?.password || "");

  if (isUser) {
    const jwt = await createJWT(user);
    res.cookies.set(process.env.COOKIE_NAME || "", jwt, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    //     res.status(201);
    //   } else {
    //     res.status(402);
  }
  return res;
}
