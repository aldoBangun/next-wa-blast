export { default } from 'next-auth/middleware'

export const config = {
  matcher: [
    '/dashboard',
    '/accounts',
    '/users',
    '/blast',
    '/change-password'
  ]
}