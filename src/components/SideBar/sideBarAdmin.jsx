'use client'

import { useParams, useRouter } from 'next/navigation'
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import { HomeOutlined, AntDesignOutlined } from "@ant-design/icons";
import { USER_URL } from '@/api/constant/user'

export default function SideBarAdmin() {
   const [active, setActive] = useState(0);
   const router = useRouter()
   const path = useParams()

   useEffect(()=>{
      
   })
   return (
      <div className='flex flex-col items-center'>
         <div onClick={() => { setActive(0); router.push('main')  }} className={active === 0 ? 'flex py-2 pl-2 cursor-pointer rounded-md mt-3 bg-blue-200' : 'flex p-2 cursor-pointer rounded-md  mt-3 hover:bg-slate-200'}>
            <HomeOutlined />
            <div className='min-w-[160px] px-2'>
               Dashboard
            </div>
         </div>
         <div onClick={() => { setActive(1); router.push('user') }} className={active === 1 ? 'flex py-2 pl-2 cursor-pointer rounded-md mt-3 bg-blue-200' : 'flex p-2 rounded-md cursor-pointer mt-3 hover:bg-slate-200'}>
            <AntDesignOutlined />
            <div className='min-w-[160px] px-2'>
               Quản lý khách hàng
            </div>
         </div>
         <div onClick={() => { setActive(2); router.push('role') }} className={active === 2 ? 'flex py-2 pl-2 cursor-pointer rounded-md mt-3 bg-blue-200' : 'flex p-2 rounded-md cursor-pointer mt-3 hover:bg-slate-200'}>
            <AntDesignOutlined />
            <div className='min-w-[160px] px-2'>
               Quản lý quyền
            </div>
         </div>
         <div onClick={() => { setActive(3); router.push('department') }} className={active === 3 ? 'flex py-2 pl-2 cursor-pointer rounded-md mt-3 bg-blue-200' : 'flex p-2 rounded-md cursor-pointer mt-3 hover:bg-slate-200'}>
            <AntDesignOutlined />
            <div className='min-w-[160px] px-2'>
               Quản lý chuyên khoa
            </div>
         </div>
         <div onClick={() => { setActive(4); router.push('doctor') }} className={active === 4 ? 'flex py-2 pl-2 cursor-pointer rounded-md mt-3 bg-blue-200' : 'flex p-2 rounded-md cursor-pointer mt-3 hover:bg-slate-200'}>
            <AntDesignOutlined />
            <div className='min-w-[160px] px-2'>
               Quản lý Bác sĩ
            </div>
         </div>
         
         
         
      </div>
   )
}