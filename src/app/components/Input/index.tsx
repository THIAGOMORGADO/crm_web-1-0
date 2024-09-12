import { Input } from '@/components/ui/input'

import React from 'react'

type InputProps = {
  className?: string
  placeholder?: string
  children?: React.ReactNode
}

export default function TextInput({ placeholder }: InputProps) {
  return <Input placeholder={placeholder} />
}
