import Sidebar from '../components/Sidebar.jsx'
import '../globals.css'
import { Providers } from '../rtk/provider.jsx'

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard | Ishak Benfredj',
}

export default function RootLayout({ children }) { 
  return (
    <div className='flex bg-gray-800 w-screen h-screen'>
        <Sidebar />
        <Providers>
          <div className='w-full h-screen relative overflow-y-auto'>
            {children}
          </div>
        </Providers>
    </div>
  )
}