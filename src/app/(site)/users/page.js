'use client'
import { useSession } from 'next-auth/react'

export default function Users() {
  const { data: session } = useSession()

  if (session?.user?.role !== 'superadmin') return <div>Unauthorized</div>

  return (
    <div>Users Page</div>
  )
}