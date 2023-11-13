'use client'

import { useRouter } from 'next/navigation'

import { useSelector, useDispatch } from 'react-redux';

import { selectUserLogin } from '@/app/redux/userLogin/userLoginSlice';
import { useEffect, useState } from 'react';
import Signin from '../auth/signin';
import axios from '@/api/axios'
import { USER_URL } from '@/api/constant/user'


export default function SideBar() {
   const router = useRouter()
   const userName = useSelector(selectUserLogin).name;
   const [logoutButton, setLogoutButton] = useState(false);
   const [displayLogin, setDisplayLogin] = useState(false);
   

   const hiddenLogin = (index) =>{
      setDisplayLogin(index);
   }
   const checkLogin = (isLogin) => {
      if(!isLogin){
         return (<div onPointerEnter={() => {setLogoutButton(true)}} onPointerLeave={()=>{setLogoutButton(false)}} className='cursor-pointer p-4 text-l mr-4 relative' onClick={() => {router.push('/profile')}}>
            <div>
               {userName}
            </div>
            <div className=''>            
               {logoutButton ? <div onClick={(event) => { event.stopPropagation(); logout()}} className='absolute z-20 right-0 top-14 rounded-md bg-white p-2'>Logout</div> : ''}
            </div>
         </div>)
      }
      else{
         return (<div className='cursor-pointer p-4 text-l mr-4' onClick={() => { setDisplayLogin(true)} }>
            SignIn
            </div>)
      }
   }

   return (
      <div className='flex flex-row bg-white text-black font-semibold shadow-lg shadow-black-500/50 border-b-2 w-screen justify-between relative'>
         <div className='cursor-pointer p-4 text-lg ml-28' onClick={() => router.push('/')}>Youmed</div>
         <div className='flex flex-row'>
            <div className='cursor-pointer p-4 text-l mr-4' onClick={() => router.push('/specialist')}>
               Đặt khám
            </div>
            <div className='cursor-pointer p-4 text-l mr-4'>Tư vấn trực tuyến</div>
            <div className='cursor-pointer p-4 text-l mr-4'>Store</div>
            <div className='cursor-pointer p-4 text-l mr-4'>Tin Y tế</div>
            <div className='cursor-pointer p-4 text-l mr-4' onClick={() => router.push('/admin')}>Dành cho nhân viên Y tế</div>
            <div >
               {checkLogin(userName === 'NULL')}
            </div>
            
         </div>
         <div  className={displayLogin ? 'z-10 top-0 left-0 w-screen h-screen absolute' : 'hidden z-10 top-0 left-0 w-screen h-screen absolute'}>
            <div className='flex z-20 w-full absolute justify-center'>
               <Signin hiddenLogin={hiddenLogin}></Signin>
            </div>
            <div className='bg-slate-800 w-screen h-screen opacity-50 absolute z-10 left-0 top-0'></div>
         </div>
      </div>
   )
}