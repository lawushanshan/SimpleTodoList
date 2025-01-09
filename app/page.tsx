import { TodoList } from '@/components/todo-list'
import { AddTodo } from '@/components/add-todo'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

async function getTodos() {
  return await prisma.todo.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export default async function Home() {
  const todos = await getTodos()

  async function addTodo(formData: FormData) {
    'use server'
    const title = formData.get('title') as string
    await prisma.todo.create({
      data: { title }
    })
    revalidatePath('/')
  }

  async function toggleTodo(id: string, completed: boolean) {
    'use server'
    await prisma.todo.update({
      where: { id },
      data: { completed }
    })
    revalidatePath('/')
  }

  async function deleteTodo(id: string) {
    'use server'
    await prisma.todo.delete({
      where: { id }
    })
    revalidatePath('/')
  }

  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-8 text-center text-4xl font-semibold text-[#1d1d1f]">
          Reminders
        </h1>
        <div className="rounded-2xl bg-white/80 backdrop-blur-xl shadow-xl p-6">
          <AddTodo addTodo={addTodo} />
          <div className="mt-8">
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          </div>
        </div>
      </div>
    </main>
  )
} 