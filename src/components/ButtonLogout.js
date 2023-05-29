'use client'
import DrawerMenuItem from './layout/DrawerMenuItem'
import { BoxArrowLeft } from 'react-bootstrap-icons'
import { signOut } from 'next-auth/react' 

export default function ButtonLogout() {
  return (
    <DrawerMenuItem
      label="Logout"
      icon={<BoxArrowLeft />}
      onClick={signOut}
    />
  )
}