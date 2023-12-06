'use client'

import { Inter } from 'next/font/google'
import SideBarAdmin from '../../components/SideBar/sideBarAdmin'
import { Providers } from "../provider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
const inter = Inter({ subsets: ['latin'] })



export default function AdminLayout({ children }) {
  


  return (
    <div className='h-screen w-screen bg-slate-100'>
        <div className='flex '>
          <div className='fixed z-20 h-full w-64 border-r-1 border-dashed '>
            <SideBarAdmin></SideBarAdmin>
          </div>
          <div className='ml-[256px]'>
            {children}
          </div>
        </div>
          <ToastContainer/>
      </div>
  )
}
