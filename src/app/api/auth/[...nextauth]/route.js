import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from '@/utils/axiosInstance'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          const res = await axios.post('Users/login', {
            username: credentials.username,
            password: credentials.password
          })

          if (res.data.code === 1) return res.data.result
          return null

        } catch(err) {
          console.log(err)
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token
      return session
    }
  },
  pages: {
    signIn: '/login',
    error: '/login'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }