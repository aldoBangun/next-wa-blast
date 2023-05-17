import DrawerMenuItem from './DrawerMenuItem'

export default function DrawerMenu({ data, children = '' }) {
  return (
    <ul className="menu text-sm">
      {data.map((item) => (
        <DrawerMenuItem
          key={item.id}
          label={item.label}
          link={item.link}
          icon={item.icon}
          gap={16}
        />
      ))}
      {children}
    </ul>
  )
}
