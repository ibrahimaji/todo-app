"use server";
import { prisma } from "@/db/utils/prisma";
export async function createData(formData: FormData) {
  const todo = formData.get("todo") as string;
  await prisma.todo.create({
    data: {
      title: todo,
    },
  });
}
