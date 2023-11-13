import { Inter } from 'next/font/google'
import './globals.css'
import SideBar from '@/components/SideBar/sideBar'
import { Providers } from "./provider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className='flex flex-col bg-slate-100 h-full  '>
            <div className='fixed z-20 w-screen  '>
              <SideBar></SideBar>
            </div>
            <div className='mt-[62px]'>
              {children}
            </div>
          </div>
            <ToastContainer/>
        </Providers>
        </body>
    </html>
  )
}
