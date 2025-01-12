// /api/createNoteBook
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return new NextResponse("unauthorised", { status: 401 });
  }
  const body = await req.json();
  const { name } = body;
}
