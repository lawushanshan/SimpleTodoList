'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function AddTodo() {
  const [title, setTitle] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    })

    setTitle('')
    // 触发列表刷新
    window.location.reload()
  }

  return (
    <form onSubmit={handleSubmit} className="flex space-x-4">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="输入新的任务..."
        className="flex-1"
      />
      <Button type="submit">添加</Button>
    </form>
  )
} 