'use client'
import { useSession } from 'next-auth/react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Button, Swap, Avatar, Dropdown } from 'react-daisyui'
import {
  List as SidebarOpen,
  ListNested as SidebarClose
} from 'react-bootstrap-icons'
import { toggle } from '@/redux/features/navbarSlice'
import { setTheme } from '@/redux/features/themeSlice'

const themeList = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'wireframe',
  'night',
  'winter',
]

export default function Topbar() {
  const { data: session } = useSession()
  const { isOpen } = useSelector((state) => state.navbar)
  const { theme } = useSelector((state) => state.theme)
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
      <Navbar.End className="flex items-center justify-end gap-4">
        <Dropdown>
          <Dropdown.Toggle color="ghost">
            <div className="flex items-center gap-4">
              <div className="h-4 w-4 rounded-md bg-primary"></div>
              <div>
                {theme}
              </div>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-60">
            {themeList.map((theme) => (
              <Dropdown.Item
                className="capitalize"
                key={theme}
                onClick={() => dispatch(setTheme(theme))}
              >
                {theme}
              </Dropdown.Item>
            ))}
            {/* <Dropdown.Item onClick={() => dispatch(setTheme('dark'))}>Dark</Dropdown.Item>
            <Dropdown.Item onClick={() => dispatch(setTheme('dracula'))}>Dracula</Dropdown.Item>
            <Dropdown.Item onClick={() => dispatch(setTheme('forest'))}>Forest</Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>
        <div className="flex items-center gap-4 py-2 ps-3 pe-6 rounded-full bg-base-300">
          <Avatar
            letters={usernameInitial}
            color="primary"
            shape="circle"
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