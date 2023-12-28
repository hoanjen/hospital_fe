'use client';

import { useRouter } from 'next/navigation';

import { useSelector, useDispatch } from 'react-redux';

import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { selectUserLogin, setAvatar, setName, setDsForm } from '../../app/redux/userLogin/userLoginSlice';
import { useEffect, useState } from 'react';
import Signin from '../auth/signin';
import Signup from '../auth/signup';
import ForgotPassword from '../auth/forgotPassword';
import axios from '@/api/axios';
import { USER_URL } from '@/api/constant/user';
import { toast, ToastContainer } from 'react-toastify';
import Logo from '@/image/shortCutLogo.jpg';
import Link from 'next/link';


export default function SideBar() {
  const router = useRouter();
  const user = useSelector(selectUserLogin);
  const [userFullName, setUserFullName] = useState('NULL');
  const [userId, setUserId] = useState('NULL');
  const [avatarr, setAvatarr] = useState('NULL');
  const [logoutButton, setLogoutButton] = useState(false);
  const [displaySignup, setDisplaySignup] = useState(false);
  const [displayForgot, setDisplayForgot] = useState(false);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const signout = () => {
    deleteCookie('user_avatar');
    deleteCookie('user_name');
    deleteCookie('user_id');
    setAvatarr('NULL');
    setAvatarr('NULL');
    setUserFullName('NULL');
    deleteCookie('access_token');
    toast.success('Đăng xuất thành công');
  };

  useEffect(() => {
    if (getCookie('user_id')) {
      setUserId(getCookie('user_id'));
    }
    if (getCookie('user_name')) {
      setUserFullName(getCookie('user_name'));
    }
    if (getCookie('user_avatar')) {
      setAvatarr(getCookie('user_avatar'));
    }
  });

  const hiddenForgot = (index) => {
    setDisplayForgot(index);
  };
  const hiddenSignup = (index) => {
    setDisplaySignup(index);
  };

  const checkLogin = (isLogin) => {
    if (isLogin) {
      return (
        <div onClick={() => { setToggle(!toggle)}}>
          <button id="dropdownDefaultButton" className="text-black text-lg  rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue600 dark:hover:bg-blue700 dark:focus:ring-bluebg-blue800" type="button">{userFullName} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>


          <div id="dropdown" className={toggle ? "z-10 absolute mt-2 bg-white divide-y divide-gray100 rounded-lg shadow w-44 dark:bg-gray700" : "z-10 hidden mt-2 bg-white divide-y divide-gray100 rounded-lg shadow w-44 dark:bg-gray700"}>
            <ul className="py-2 text-sm text-gray700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              {/* <li onClick={() => {
                router.push(`/profile/${userId}`);
              }}>
                <a  className="flex items-center px-4 py-2 hover:bg-gray100 dark:hover:bg-gray600 dark:hover:text-white">

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="mr-2 bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                  </svg>

                  Hồ Sơ
                  
                  </a>
              </li> */}
              <Link href={`/profile/${userId}`}>
                <div>abc</div>
              </Link>
              <li onClick={() => {
                signout();
              }}>
                
                <a  className="flex items-center px-4 py-2 hover:bg-gray100 dark:hover:bg-gray600 dark:hover:text-white">

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="mr-2 bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                  </svg>
                  Sign out
                  
                  </a>
              </li>
            </ul>
          </div>

        </div>
      );
    } else {
      return (
        <div
          className=""
          onClick={() => {
            dispatch(setDsForm(true));
          }}
        >
          Đăng nhập
        </div>
      );
    }
  };

  return (
    <div className="flex flex-row bg-white text-black font-semibold shadow-lg shadow-black-500/50 border-slate-200 w-screen justify-between relative">
      
      <div className="cursor-pointer text-lg ml-28 flex items-center" onClick={() => router.push('/')}>
        <img className="w-16 h-16 mr-2" src={Logo.src} alt="logo" />{' '}
        <div className='text-center'>Bệnh Viện Đa Khoa Hà Nội</div>
      </div>
      <div className="flex flex-row items-center">
        <div className="cursor-pointer p-4 text-l mr-4" onClick={() => router.push('/specialist')}>
          Đặt khám
        </div>
        <div className="cursor-pointer p-4 text-lg mr-4">Tư vấn trực tuyến</div>
        <div className="cursor-pointer p-4 text-lg mr-4">Store</div>
        <div className="cursor-pointer p-4 text-lg mr-4">Tin Y tế</div>
        <div className="cursor-pointer p-4 text-lg mr-4" onClick={() => router.push('/manage')}>
          Dành cho nhân viên Y tế
        </div>
        <div>
          {avatarr !== 'NULL' ? (
            <div className="">
              <img
                onClick={() => {
                  router.push(`/profile/${userId}`);
                }}
                className="w-12 h-12 cursor-pointer object-cover  rounded-full"
                src={avatarr}
                alt=""
              />
            </div>
          ) : (
            ''
          )}
        </div>
        <div
          onPointerEnter={() => {
            setLogoutButton(true);
          }}
          onPointerLeave={() => {
            setLogoutButton(false);
          }}
          className="cursor-pointer px-4 h-16 flex items-center text-lg mr-4 relative "
        >
          {checkLogin(userFullName !== 'NULL')}
        </div>
        
      </div>

      <div
        className={
          user.dsForm
            ? 'z-10 top-0 left-0 w-screen h-screen absolute'
            : 'hidden z-10 top-0 left-0 w-screen h-screen absolute'
        }
      >
        <div className="flex z-20 w-full absolute justify-center">
          <Signin hiddenSignup={hiddenSignup} hiddenForgot={hiddenForgot}></Signin>
        </div>
        <div className="backdrop-blur-sm  w-screen h-screen  absolute z-10 left-0 top-0"></div>
      </div>
      <div
        className={
          displaySignup
            ? 'z-10 top-0 left-0 w-screen h-screen absolute'
            : 'hidden z-10 top-0 left-0 w-screen h-screen absolute'
        }
      >
        <div className="flex z-20 w-full absolute justify-center">
          <Signup hiddenSignup={hiddenSignup}></Signup>
        </div>
        <div className="backdrop-blur-sm w-screen h-screen absolute z-10 left-0 top-0"></div>
      </div>
      <div
        className={
          displayForgot
            ? 'z-10 top-0 left-0 w-screen h-screen absolute'
            : 'hidden z-10 top-0 left-0 w-screen h-screen absolute'
        }
      >
        <div className="flex z-20 w-full absolute justify-center">
          <ForgotPassword hiddenForgot={hiddenForgot}></ForgotPassword>
        </div>
        <div className="backdrop-blur-sm w-screen h-screen absolute z-10 left-0 top-0"></div>
      </div>
    </div>
  );
}
