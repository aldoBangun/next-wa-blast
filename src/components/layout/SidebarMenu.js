import { Menu } from 'react-daisyui'
import SidebarMenuItem from './SidebarMenuItem'

export default function SidebarMenu({ data, children = '', ...args }) {
  return (
    <Menu className="text-sm" {...args}>
      {data.map((item) => (
        <SidebarMenuItem
          key={item.id}
          link={item.link}
          icon={item.icon}
          label={item.label}
          hidden={item.hidden}
        />
      ))}
      {children && children}
    </Menu>
  )
}

SidebarMenu.Item = SidebarMenuItem
