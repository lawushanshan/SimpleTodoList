import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { completed } = await request.json()
  const todo = await prisma.todo.update({
    where: { id: params.id },
    data: { completed },
  })
  return NextResponse.json(todo)
} 