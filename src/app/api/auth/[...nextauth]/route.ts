import NextAuth, { type User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  pages: {
    signIn: '/',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null
        }
        if (
          credentials.email === 'thiago@hotmail.com' &&
          credentials.password === '12345678'
        ) {
          return {
            id: '1',
            name: 'Thiago',
            email: 'thiago@hotmail.com',
            role: 'admin',
          } as User
        }

        return null
      },
    }),
  ],
})

export { handler as GET, handler as POST }
