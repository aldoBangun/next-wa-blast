import AppBar from '@/components/layout/AppBar'
import Sidebar from '@/components/layout/Sidebar'
import Topbar from '@/components/layout/Topbar'

export default function DashboardLayout({ children }) {
  return (
    <>
      <AppBar
        sidebar={<Sidebar />} 
      >
      <Topbar />
      {children}
    </AppBar>
    </>
  )
}
