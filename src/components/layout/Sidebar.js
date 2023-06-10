'use client'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { useSelector } from 'react-redux'
import { Button, Navbar } from 'react-daisyui'
import classNames from 'classnames'
import {
  House,
  Whatsapp,
  PersonBadge,
  Key,
  Diagram2,
  People,
  BoxArrowLeft,
} from 'react-bootstrap-icons'
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
    link: '/blast',
    icon: <Whatsapp />
  },
  {
    id: 3,
    label: 'Accounts',
    link: '/accounts',
    icon: <PersonBadge />
  },
  {
    id: 4,
    label: 'Instances',
    link: '/instances',
    icon: <Diagram2 />
  },
  {
    id: 5,
    label: 'Users',
    link: '/users',
    icon: <People />
  },
]

const secondaryMenuList = [
  {
    id: 1,
    label: 'Change Password',
    link: '/change-password',
    icon: <Key />
  }
]


export default function Sidebar() {
  const { isOpen } = useSelector((state) => state.navbar)
  const { data: session } = useSession()
  const sidebarClassNames = classNames('flex flex-col h-screen max-h-screen overflow-hidden transition-[width]', {
    'w-72': isOpen,
    'w-0': !isOpen,
    'p-4': isOpen,
    'p-0': !isOpen
  })

  // if (session?.user?.)

  return (
    <div className={sidebarClassNames}>
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
  )
}