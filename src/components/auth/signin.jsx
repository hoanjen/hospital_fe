'use client';

import { useEffect, useState } from 'react';
import axios from '@/api/axios';
import { USER_URL } from '@/api/constant/user';
import { toast, ToastContainer } from 'react-toastify';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { selectUserLogin, setAvatar, setName, setDsForm } from '@/app/redux/userLogin/userLoginSlice';
import { useDispatch } from 'react-redux';
export default function Signin(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const clear = () => {
    setEmail('');
    setPassword('');
  };
  const signin = async () => {
    const tmp = await axios.post(`${USER_URL.LOGIN}`, { email, password });
    const user = tmp.data?.data;

    if (tmp?.data?.code === 200) {
      toast.success('Đăng nhập thành công');
      console.log(user);
      setCookie('access_token', user.tokens.access.token);
      setCookie('user_avatar', user.user.avatar);
      setCookie('user_name', user.user.fullName);
      setCookie('user_id', user.user.id);
      clear();
      dispatch(setDsForm(false));
    } else {
      toast.error(tmp?.response?.data?.message);
    }
  };
  return (
    <div className="">
      <section className="">
        <div className="flex flex-col w-[500px]  items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white dark:text-white">
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            BV Đa Khoa Hà Nội
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 relative">
              <div
                onClick={() => {
                  dispatch(setDsForm(false));
                }}
                className="absolute p-1 m-4 top-0 right-0 cursor-pointer hover:text-red-500 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Đăng nhập tài khoản của bạn
              </h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Mật khẩu
                  </label>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                  <div
                    onClick={() => {
                      props.hiddenForgot(true);
                      dispatch(setDsForm(false));
                    }}
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Quên mật khẩu?
                  </div>
                </div>
                <button
                  onClick={() => {
                    signin();
                  }}
                  className="w-full text-white bg-primary-600 bg-bluehome hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Đăng nhập
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Bạn chưa có tài khoản?{' '}
                  <a
                    onClick={() => {
                      props.hiddenSignup(true);
                      dispatch(setDsForm(false));
                    }}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
                  >
                    Đăng ký
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
