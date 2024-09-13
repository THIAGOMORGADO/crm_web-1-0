/* eslint-disable @typescript-eslint/no-unused-vars */
import nextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    role: string | undefined
  }
}
