'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function AuthTemplate({ children }) {
  const { status } = useSession()
  
  if (status === 'authenticated') return redirect('/')

  return <div>{children}</div>
}