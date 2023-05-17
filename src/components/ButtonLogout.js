'use client'
import DrawerMenuItem from './layout/DrawerMenuItem'
import { BoxArrowLeft } from 'react-bootstrap-icons'

export default function ButtonLogout() {
  return (
    <DrawerMenuItem
      label="Logout"
      icon={<BoxArrowLeft />}
      onClick={() => console.log('logout..')}
    />
  )
}