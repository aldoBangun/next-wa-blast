'use client'
import { useSession } from 'next-auth/react'

export default function Users() {
  const session = useSession()
  console.log(session)
  return (
    <div>Users Page</div>
  )
}