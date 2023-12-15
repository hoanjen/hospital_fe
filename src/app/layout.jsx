'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import SideBar from '../components/SideBar/sideBar'
import { Providers } from "./provider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
const inter = Inter({ subsets: ['latin'] })
import Script from 'next/script';
import Footer from '@/components/Home/footer';

export default function RootLayout({ children }) {



   return (
      <html lang="en">
         <head>
            
         </head>
         <body className={inter.className}>
            
            <Providers>
               <div >
                  <div >
                     {children}
                  </div>
                   <Footer></Footer>
               </div>
               
            </Providers>
            
         </body>
        
      </html>
   )
}
