'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import { Button, Menu } from 'react-daisyui'

export default function SidebarMenuItem({
  link,
  icon = '',
  label,
  gap = 16,
  ...args
}) {
  const pathname = usePathname()
  const isActivePage = link === pathname
  const itemClassNames = {
    flex: true,
    'items-center': true,
    gap: `gap-${gap}`,
    'rounded-lg': true,
  }

  if (link) {
    itemClassNames['bg-primary'] = isActivePage
    itemClassNames['text-primary-content'] = isActivePage
  }

  const linkClassNames = classNames(itemClassNames)

  return (
    <Menu.Item>
      {link
        ? (
            <Link className={linkClassNames} href={link} {...args}>
              <span>{icon}</span>
              <span>{label}</span>
            </Link>
          )
        : (
            <button className={`${linkClassNames}`} {...args}>
              <span>{icon}</span>
              <span>{label}</span>
            </button>
          )
      }
    </Menu.Item>
  )
}