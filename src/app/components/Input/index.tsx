import React from 'react'

type InputProps = {
  className?: string
  placeholder?: string
  children?: React.ReactNode
  type: string
}

export default function TextInput({
  type,
  placeholder,
  className,
  ...rest
}: InputProps) {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      {...rest}
    />
  )
}
