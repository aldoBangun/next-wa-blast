'use client'
import Link from 'next/link'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

export default function DrawerMenuItem({
  link,
  icon = '',
  label,
  gap = 16,
  ...props
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
    <li>
      {link 
        ? <Link className={linkClassNames} href={link} {...props}>{icon}{label}</Link>
        : <button className={linkClassNames} {...props}>{icon}{label}</button>
      }
    </li>
  )
}