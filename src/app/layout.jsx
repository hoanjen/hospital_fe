'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './provider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ['latin'] });
import Footer from '@/components/Home/footer';
import Link from '@/components/Home/link';
import SideBar from '../components/SideBar/sideBar';
import { usePathname } from 'next/navigation';



export default function RootLayout({ children }) {
  const pathname = usePathname()
  
  return (
    <html lang="en">
      <Link></Link>
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col bg-slate h-full">
            <div className={pathname.includes("manage") ? "hidden" :"fixed z-20 w-screen"}>
              <SideBar></SideBar>
            </div>
            <div>
              <div className={pathname.includes("manage") ? "" : "mt-[62px]"}>{children}</div>
            </div>
            <Footer></Footer>
          </div>
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
