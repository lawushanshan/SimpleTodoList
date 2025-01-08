'use client'

import { useRef } from 'react'
import { useFormStatus } from 'react-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface AddTodoProps {
  addTodo: (formData: FormData) => Promise<void>
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button 
      type="submit" 
      disabled={pending}
      className="todo-button"
    >
      Add Reminder
    </Button>
  )
}

export function AddTodo({ addTodo }: AddTodoProps) {
  const ref = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await addTodo(formData)
        ref.current?.reset()
      }}
      className="flex gap-4"
    >
      <Input
        type="text"
        name="title"
        placeholder="New Reminder"
        required
        className="todo-input flex-1"
      />
      <SubmitButton />
    </form>
  )
} 