'use client';

import { Inter } from 'next/font/google';
import SideBar from '../../components/SideBar/sideBar';
// import { Providers } from "../provider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <div>
      <div className="flex flex-col bg-slate-100 h-full  ">
        <div className="fixed z-20 w-screen ">
          <SideBar></SideBar>
        </div>
        <div className="mt-[62px]">{children}</div>
      </div>

      <ToastContainer />
    </div>
  );
}
