export default function AppBar({ sidebar, children }) {
  return (
    <div className="flex">
      {sidebar}
      <div className="app-bar-content flex-1 p-4">
        {children}
      </div>
    </div>
  )
}