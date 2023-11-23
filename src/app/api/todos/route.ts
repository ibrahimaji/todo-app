import { prisma } from "@/db/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
export async function GET() {
  try {
    const todos = await prisma.todo.findMany();
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json({ error: "error" });
  }
}
export async function POST(req: NextRequest) {
  const { title } = await req.json();
  try {
    const createTodo = await prisma.todo.create({
      data: {
        title,
      },
    });
    return NextResponse.json(createTodo);
  } catch (error) {
    return NextResponse.json(error);
  }
}
