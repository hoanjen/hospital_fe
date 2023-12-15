'use client'

import { useRouter } from 'next/navigation'

import { useSelector, useDispatch } from 'react-redux';

import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { selectUserLogin, setAvatar, setName, setDsForm } from '../../app/redux/userLogin/userLoginSlice';
import { useEffect, useState } from 'react';
import Signin from '../auth/signin';
import Signup from '../auth/signup';
import ForgotPassword from '../auth/forgotPassword'
import axios from '@/api/axios'
import { USER_URL } from '@/api/constant/user'
import { toast, ToastContainer } from 'react-toastify';



export default function SideBar() {
   const router = useRouter()
   const user = useSelector(selectUserLogin);
   const [userFullName, setUserFullName] = useState('NULL');
   const [userId, setUserId] = useState('NULL');
   const [avatarr, setAvatarr] = useState('NULL'); 
   const [logoutButton, setLogoutButton] = useState(false);
   const [displaySignup, setDisplaySignup] = useState(false);
   const [displayForgot, setDisplayForgot] = useState(false);
   const dispatch = useDispatch();
   const signout = () => {
      deleteCookie('user_avatar');
      deleteCookie('user_name');
      deleteCookie('user_id');
      setAvatarr('NULL')
      setAvatarr('NULL');
      setUserFullName('NULL');
      deleteCookie('access_token');
      toast.success('Đăng xuất thành công');
   }

   useEffect(() => {
      if (getCookie('user_id')) {
         setUserId(getCookie('user_id'));
      }
      if (getCookie('user_name')){
         setUserFullName(getCookie('user_name'));
      }
      if (getCookie('user_avatar')){
         setAvatarr(getCookie('user_avatar'));
      }
      
   })

   const hiddenForgot = (index) =>{
      setDisplayForgot(index);
   }
   const hiddenSignup = (index) => {
      setDisplaySignup(index);
   }

   const checkLogin = (isLogin) => {
      if(isLogin){
         return (
         <div  className=' ' >
            <div onClick={() => { router.push(`/dashboard/profile/${userId}`) }}>
              
                  
               {userFullName}


            </div>
            <div  className=''>            
                  {logoutButton ? <div onClick={() => { signout()}}  className='absolute z-20 right-0 top-16 rounded-md bg-white p-2'>Đăng xuất</div> : ''}
            </div>
         </div>
         )
      }
      else{
         return (<div className='' onClick={() => { dispatch(setDsForm(true));} }>
            Đăng nhập
            </div>)
      }
   }

   return (
      <div className='flex flex-row bg-white text-black font-semibold shadow-lg shadow-black-500/50 border-b-2 w-screen justify-between relative'>
         <div className='cursor-pointer p-4 text-lg ml-28 flex items-center' onClick={() => router.push('/dashboard')}><img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" /> <div>Bệnh Viện Đa Khoa Hà Nội</div></div>
         <div className='flex flex-row items-center'>
            <div className='cursor-pointer p-4 text-l mr-4' onClick={() => router.push('/dashboard/specialist')}>
               Đặt khám
            </div>
            <div className='cursor-pointer p-4 text-lg mr-4'>Tư vấn trực tuyến</div>
            <div className='cursor-pointer p-4 text-lg mr-4'>Store</div>
            <div className='cursor-pointer p-4 text-lg mr-4'>Tin Y tế</div>
            <div className='cursor-pointer p-4 text-lg mr-4' onClick={() => router.push('/admin/main')}>Dành cho nhân viên Y tế</div>
            <div>
               {avatarr !== 'NULL' ? <div className="">
                  <img onClick={() => { router.push(`/dashboard/profile/${userId}`) }} className="w-12 h-12 cursor-pointer object-cover  rounded-full" src={avatarr} alt="" />
               </div>  : ''}
            </div>
            <div onPointerEnter={() => { setLogoutButton(true) }} onPointerLeave={() => { setLogoutButton(false) }} className='cursor-pointer px-4 h-16 flex items-center text-lg mr-4 relative '>
               {checkLogin(userFullName !== 'NULL')}
            </div>
            
         </div>
         
         <div  className={ user.dsForm ? 'z-10 top-0 left-0 w-screen h-screen absolute' : 'hidden z-10 top-0 left-0 w-screen h-screen absolute'}>
            <div className='flex z-20 w-full absolute justify-center'>
               <Signin hiddenSignup={hiddenSignup} hiddenForgot={hiddenForgot}></Signin>
            </div>
            <div className='backdrop-blur-sm  w-screen h-screen  absolute z-10 left-0 top-0'></div>
         </div>
         <div className={displaySignup ? 'z-10 top-0 left-0 w-screen h-screen absolute' : 'hidden z-10 top-0 left-0 w-screen h-screen absolute'}>
            <div className='flex z-20 w-full absolute justify-center'>
               <Signup hiddenSignup={hiddenSignup}></Signup>
            </div>
            <div className='backdrop-blur-sm w-screen h-screen absolute z-10 left-0 top-0'></div>
         </div>
         <div className={displayForgot ? 'z-10 top-0 left-0 w-screen h-screen absolute' : 'hidden z-10 top-0 left-0 w-screen h-screen absolute'}>
            <div className='flex z-20 w-full absolute justify-center'>
               <ForgotPassword hiddenForgot={hiddenForgot}></ForgotPassword>
            </div>
            <div className='backdrop-blur-sm w-screen h-screen absolute z-10 left-0 top-0'></div>
         </div>
      </div>
   )
}