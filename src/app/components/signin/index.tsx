'use client'
import React from 'react'
import { Lock, Mail } from 'lucide-react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { signIn } from 'next-auth/react'

const signInSchema = yup.object({
  email: yup.string().email().required('O email é obrigatório'),
  password: yup
    .string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .required('A senha é obrigatória'),
})

type SignInSchema = {
  email: string
  password: string
}

export function SignInFormInputs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: yupResolver(signInSchema),
  })

  const Submit = async (data: SignInSchema) => {
    // TODO: send data to server for authentication
    await signIn('credentials', {
      ...data,
      callbackUrl: '/dashboard',
    })
  }

  return (
    <form onSubmit={handleSubmit(Submit)}>
      <div className="bg-[#1c1c1e] flex m-2 items-center w-full px-6 gap-1 rounded-xl">
        <Mail size={24} color="#a280ff" />
        <input
          type="email"
          className="w-full bg-[#1c1c1e] p-2 placeholder:text-[#a280ff] outline-none text-white"
          placeholder="Seu email"
          {...register('email')}
        />
      </div>
      <p className="text-[#a280ff]  px-3">{errors.email?.message}</p>
      <div className="bg-[#1c1c1e] flex m-2 items-center w-full px-6 gap-1 rounded-xl mt-5">
        <Lock size={24} color="#a280ff" />
        <input
          type="password"
          className="w-full bg-transparent p-2 placeholder:text-[#a280ff] outline-none text-white"
          placeholder="Sua senha"
          {...register('password')}
        />
      </div>
      <p className="text-[#a280ff]  px-3">{errors.password?.message}</p>
      <div className="flex items-center justify-center  w-full mx-2 py-5">
        <button
          type="submit"
          className="bg-[#007AFF] h-12 w-full rounded-xl text-white font-semibold text-[1rem]"
        >
          Continuar
        </button>
      </div>
    </form>
  )
}
