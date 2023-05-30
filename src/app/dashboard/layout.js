'use client'
import { Avatar, Button, Drawer, Navbar } from 'react-daisyui'
import {
  House,
  Whatsapp,
  PersonBadge,
  Key,
  Diagram2,
  People,
  BoxArrowLeft,
} from 'react-bootstrap-icons'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import SidebarMenu from '@/components/layout/SidebarMenu'

const mainMenuList = [
  {
    id: 1,
    label: 'Dashboard',
    link: '/dashboard',
    icon: <House />
  },
  {
    id: 2,
    label: 'Blast',
    link: '/dashboard/blast',
    icon: <Whatsapp />
  },
  {
    id: 3,
    label: 'Accounts',
    link: '/dashboard/accounts',
    icon: <PersonBadge />
  },
  {
    id: 4,
    label: 'Instances',
    link: '/dashboard/instances',
    icon: <Diagram2 />
  },
  {
    id: 5,
    label: 'Users',
    link: '/dashboard/users',
    icon: <People />
  },
]

const secondaryMenuList = [
  {
    id: 1,
    label: 'Change Password',
    link: '/dashboard/change-password',
    icon: <Key />
  }
]

export default function DashboardLayout({ children }) {
  const { data: session } = useSession()
  const username = session?.user?.username || ''
  const usernameInitial = username[0]?.toUpperCase() || ''
  const role = session?.user?.role || ''

  return (
    <>
      <Drawer
        sideClassName="w-72 p-4"
        mobile={true}
        side={
          <div className="flex flex-col max-h-screen">
            <Navbar className="mb-8">
              <Link href="/dashboard" passHref>
                <Button color="ghost">Next<span className="text-primary">Ji</span></Button>
              </Link>
            </Navbar>
            <div className="flex flex-col justify-between flex-1">
              <SidebarMenu data={mainMenuList} />
              <SidebarMenu data={secondaryMenuList}>
                <SidebarMenu.Item
                  label="Logout"
                  icon={<BoxArrowLeft />}
                  onClick={signOut}
                  color="ghost"
                />
              </SidebarMenu>
            </div>
          </div>
        }
      >
        <div className="p-4">
          <Navbar className="mb-8">
            <Navbar.Start>Test start</Navbar.Start>
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
          {children}
        </div>
      </Drawer>
    </>
  )
}
