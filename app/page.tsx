import { TodoList } from '@/components/todo-list'
import { AddTodo } from '@/components/add-todo'

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-10 max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-8">Todo 管理系统</h1>
      <div className="space-y-8">
        <AddTodo />
        <TodoList />
      </div>
    </main>
  )
} 