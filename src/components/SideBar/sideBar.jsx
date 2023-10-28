'use client'

import { useRouter } from 'next/navigation'


export default function SideBar() {
   const router = useRouter()
   return (
      <div className='flex flex-row bg-white text-black font-semibold shadow-lg shadow-black-500/50 border-b-2 w-screen justify-between '>
         <div className='cursor-pointer p-4 text-lg ml-28' onClick={() => router.push('/')}>Youmed</div>
         <div className='flex flex-row'>
            <div className='cursor-pointer p-4 text-l mr-4' onClick={() => router.push('/')}> 
               Đặt khám
            </div>
            <div className='cursor-pointer p-4 text-l mr-4'>Tư vấn trực tuyến</div>
            <div className='cursor-pointer p-4 text-l mr-4'>Store</div>
            <div className='cursor-pointer p-4 text-l mr-4'>Tin Y tế</div>
            <div className='cursor-pointer p-4 text-l mr-4' onClick={() => router.push('/admin')}>Dành cho nhân viên Y tế</div>
            <div className='cursor-pointer p-4 text-l mr-4' onClick={() => router.push('/profile')}>Nguyễn Văn Hoàn</div>
         </div>
      </div>
   )
}