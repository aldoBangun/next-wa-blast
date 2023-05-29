'use client'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, usePathname } from 'next/navigation'

export default function RootTemplate({ children }) {
  const { data: session } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname.includes('/auth/login')) {
      if (session?.user) router.push('/dashboard')
    } else {
      if (!session?.user) router.push('/auth/login')
    }
  }, [router, session, pathname])

  return <>{children}</>
}