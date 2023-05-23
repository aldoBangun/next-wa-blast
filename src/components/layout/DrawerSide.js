export default function DrawerSide({ children, className }) {
  return (
    <div className="drawer-side w-64 px-4 pb-4 border-r-1 border-base-200">
      <div className={className}>
        {children}
      </div>
    </div>
  )
}
