import Sidebar from '../components/Sidebar.jsx'
import '../globals.css'

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard | Ishak Benfredj',
}

export default function RootLayout({ children }) { 
  return (
    <div className='flex bg-gray-800 w-screen h-screen'>
        <Sidebar />
        {children}
    </div>
  )
}