'use client'

import { useParams, useRouter } from 'next/navigation'
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import { USER_URL } from '@/api/constant/user'

export default function SideBarAdmin() {
   const [active, setActive] = useState(0);
   const router = useRouter()
   const path = useParams()

   useEffect(()=>{
      
   })
   return (
      <div className='w-64 flex flex-col items-center'>
         <div className='mb-20'>Jaydon Frankie</div>
         <div onClick={() => { setActive(0); router.push('main')  }} className={active === 0 ? 'flex p-2 px-5 cursor-pointer rounded-md mt-3 bg-blue-200' : 'flex p-2 px-5 cursor-pointer rounded-md  mt-3 hover:bg-slate-200'}>
            <div className='mr-3'>
               <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 20V4C2 3.44772 2.44772 3 3 3H8.44792C8.79153 3 9.11108 3.17641 9.29416 3.46719L10.5947 5.53281C10.7778 5.82359 11.0974 6 11.441 6H21C21.5523 6 22 6.44772 22 7V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20Z" stroke="#200E32" stroke-width="2"></path> <path d="M14.5 16L9.5 11" stroke="#200E32" stroke-width="2" stroke-linecap="round"></path> <path d="M9.5 16L14.5 11" stroke="#200E32" stroke-width="2" stroke-linecap="round"></path> </g></svg>
            </div>
            <div className='min-w-[160px]'>
               Trang chủ
            </div>
         </div>
         <div onClick={() => { setActive(1); router.push('user') }} className={active === 1 ? 'flex p-2 px-5 cursor-pointer rounded-md mt-3 bg-blue-200' : 'flex p-2 px-5 rounded-md cursor-pointer mt-3 hover:bg-slate-200'}>
            <div className='mr-3'>
               <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 20V4C2 3.44772 2.44772 3 3 3H8.44792C8.79153 3 9.11108 3.17641 9.29416 3.46719L10.5947 5.53281C10.7778 5.82359 11.0974 6 11.441 6H21C21.5523 6 22 6.44772 22 7V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20Z" stroke="#200E32" stroke-width="2"></path> <path d="M14.5 16L9.5 11" stroke="#200E32" stroke-width="2" stroke-linecap="round"></path> <path d="M9.5 16L14.5 11" stroke="#200E32" stroke-width="2" stroke-linecap="round"></path> </g></svg>
            </div>
            <div className='min-w-[160px]'>
               Quản lý khách hàng
            </div>
         </div>
         <div onClick={() => { setActive(2); router.push('role') }} className={active === 2 ? 'flex p-2 px-5 cursor-pointer rounded-md mt-3 bg-blue-200' : 'flex p-2 px-5 rounded-md cursor-pointer mt-3 hover:bg-slate-200'}>
            <div className='mr-3'>
               <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 20V4C2 3.44772 2.44772 3 3 3H8.44792C8.79153 3 9.11108 3.17641 9.29416 3.46719L10.5947 5.53281C10.7778 5.82359 11.0974 6 11.441 6H21C21.5523 6 22 6.44772 22 7V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20Z" stroke="#200E32" stroke-width="2"></path> <path d="M14.5 16L9.5 11" stroke="#200E32" stroke-width="2" stroke-linecap="round"></path> <path d="M9.5 16L14.5 11" stroke="#200E32" stroke-width="2" stroke-linecap="round"></path> </g></svg>
            </div>
            <div className='min-w-[160px]'>
               Quản lý quyền
            </div>
         </div>
         <div onClick={() => { setActive(3); router.push('department') }} className={active === 3 ? 'flex p-2 px-5 cursor-pointer rounded-md mt-3 bg-blue-200' : 'flex p-2 px-5 rounded-md cursor-pointer mt-3 hover:bg-slate-200'}>
            <div className='mr-3'>
               <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 20V4C2 3.44772 2.44772 3 3 3H8.44792C8.79153 3 9.11108 3.17641 9.29416 3.46719L10.5947 5.53281C10.7778 5.82359 11.0974 6 11.441 6H21C21.5523 6 22 6.44772 22 7V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20Z" stroke="#200E32" stroke-width="2"></path> <path d="M14.5 16L9.5 11" stroke="#200E32" stroke-width="2" stroke-linecap="round"></path> <path d="M9.5 16L14.5 11" stroke="#200E32" stroke-width="2" stroke-linecap="round"></path> </g></svg>
            </div>
            <div className='min-w-[150px]'>
               Quản lý chuyên khoa
            </div>
         </div>
         <div onClick={() => { setActive(4); router.push('doctor') }} className={active === 4 ? 'flex p-2 px-5 cursor-pointer rounded-md mt-3 bg-blue-200' : 'flex p-2 px-5 rounded-md cursor-pointer mt-3 hover:bg-slate-200'}>
            <div className='mr-3'>
               <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 20V4C2 3.44772 2.44772 3 3 3H8.44792C8.79153 3 9.11108 3.17641 9.29416 3.46719L10.5947 5.53281C10.7778 5.82359 11.0974 6 11.441 6H21C21.5523 6 22 6.44772 22 7V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20Z" stroke="#200E32" stroke-width="2"></path> <path d="M14.5 16L9.5 11" stroke="#200E32" stroke-width="2" stroke-linecap="round"></path> <path d="M9.5 16L14.5 11" stroke="#200E32" stroke-width="2" stroke-linecap="round"></path> </g></svg>
            </div>
            <div className='min-w-[160px]'>
               Quản lý Bác sĩ
            </div>
         </div>
         
         
         
      </div>
   )
}