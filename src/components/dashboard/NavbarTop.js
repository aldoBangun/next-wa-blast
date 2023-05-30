'use client'
import { useSession } from 'next-auth/react'
import Navbar from '../layout/Navbar'
import Image from 'next/image'

export default function NavbarTop() {
  const { data:  session } = useSession()
  const username = session?.user?.username || ''
  const role = session?.user?.role || ''
  
  return (
    <Navbar className="justify-between">
      <div>Dashboard</div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 p-2">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <Image
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div>
            <span className="block text-sm font-semibold -mb-1">{username}</span>
            <span className="text-xs">{role}</span>
          </div>
        </div>
      </div>
    </Navbar>
  )
}