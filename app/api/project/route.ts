import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();
  const cookieStore = cookies();
  const token = cookieStore.get(process.env.COOKIE_NAME!);
  const user = await validateJWT(token?.value!);

  await db.project.create({
    data: {
      name: req.name,
      ownerId: user.id,
    },
  });
  return new NextResponse(new Blob(), {
    status: 200,
    statusText: "Project created successfully",
  });
}
