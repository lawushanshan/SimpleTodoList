'use client'

import { useTransition } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Todo } from '@prisma/client'

interface TodoListProps {
  todos: Todo[]
  toggleTodo: (id: string, completed: boolean) => Promise<void>
  deleteTodo: (id: string) => Promise<void>
}

export function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  const [isPending, startTransition] = useTransition()

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item group">
          <Checkbox
            id={todo.id}
            checked={todo.completed}
            disabled={isPending}
            onCheckedChange={(checked) => {
              startTransition(() => {
                toggleTodo(todo.id, checked as boolean)
              })
            }}
            className="h-5 w-5 rounded-full border-2 border-[#0071e3] data-[state=checked]:bg-[#0071e3]"
          />
          <label
            htmlFor={todo.id}
            className={`flex-1 text-[15px] leading-none ${
              todo.completed ? 'line-through text-[#86868b]' : ''
            }`}
          >
            {todo.title}
          </label>
          <button
            onClick={() => {
              startTransition(() => {
                deleteTodo(todo.id)
              })
            }}
            disabled={isPending}
            className="invisible group-hover:visible text-sm text-[#86868b] hover:text-red-500 transition-colors duration-200"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
} 