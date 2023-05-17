export default function DrawerSide({ children, className }) {
  return (
    <div className="drawer-side w-64 px-4 pb-4 bg-base-300 border-r-2 border-base-200">
      <div className={className}>
        {children}
      </div>
    </div>
  )
}
