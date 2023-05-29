export default function DrawerSide({ children, className }) {
  return (
    <div className="drawer-side relative z-50 w-64 px-4 pb-4 bg-base-100 border-r-1 border-base-200">
      <div className={className}>
        {children}
      </div>
    </div>
  )
}
