'use client'
import { useSession } from 'next-auth/react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Button, Swap, Avatar } from 'react-daisyui'
import {
  List as SidebarOpen,
  X as SidebarClose
} from 'react-bootstrap-icons'
import { toggle } from '@/redux/features/navbarSlice'

export default function Topbar() {
  const { data: session } = useSession()
  const { isOpen } = useSelector((state) => state.navbar)
  const dispatch = useDispatch()

  const username = session?.user?.name || ''
  const usernameInitial = username[0]?.toUpperCase() || ''
  const role = session?.user?.role || ''

  return (
    <Navbar className="mb-8">
      <Navbar.Start>
        <Button onClick={() => dispatch(toggle())} color="ghost" shape="square">
          <Swap
            offElement={<SidebarOpen />}
            onElement={<SidebarClose />}
            active={isOpen}
            className="pointer-events-none"
          />
        </Button>
      </Navbar.Start>
      <Navbar.End className="flex items-center justify-end">
        <div className="flex items-center gap-4">
          <Avatar
            letters={usernameInitial}
            color="primary"
            shape="square"
            size="xs"
          />
          <div>
            <div className="font-semibold">{username}</div>
            <div className="text-sm">{role}</div>
          </div>
        </div>
      </Navbar.End>
    </Navbar>
  )
}