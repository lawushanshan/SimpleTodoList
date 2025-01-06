'use client'

import { useEffect, useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

interface Todo {
  id: string
  title: string
  completed: boolean
}

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    const response = await fetch('/api/todos')
    const data = await response.json()
    setTodos(data)
  }

  const toggleTodo = async (id: string) => {
    await fetch(`/api/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !todos.find(todo => todo.id === id)?.completed }),
    })
    fetchTodos()
  }

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow"
        >
          <Checkbox
            checked={todo.completed}
            onCheckedChange={() => toggleTodo(todo.id)}
          />
          <span
            className={cn(
              "flex-1",
              todo.completed && "line-through text-gray-500"
            )}
          >
            {todo.title}
          </span>
        </div>
      ))}
    </div>
  )
} 