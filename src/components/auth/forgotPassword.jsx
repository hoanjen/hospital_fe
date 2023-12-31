'use client';

import { useEffect, useState } from 'react';
import axios from '@/api/axios';
import { USER_URL } from '@/api/constant/user';
import { toast, ToastContainer } from 'react-toastify';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { selectUserLogin, setAvatar, setDsForm, setName } from '@/app/redux/userLogin/userLoginSlice';
import { useDispatch } from 'react-redux';
export default function Signup(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const dispatch = useDispatch();

  const signup = async () => {
    const tmp = await axios.post(`${USER_URL.REGISTER}`, { email, password, fullName });
    const user = tmp.data?.data;
    console.log(tmp);

    if (tmp?.data?.code === 201) {
      toast.success('Đăng ký thành công, vào email để xác thực');
      props.hiddenSignup(false);
      dispatch(setDsForm(true));
    } else {
      toast.error(tmp.response.data.message);
    }
  };
  return (
    <div className="">
      <section className="">
        <div className="flex flex-col w-[500px] items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white dark:text-white">
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            BV Đa Khoa Hà Nội
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 relative">
              <div
                onClick={() => {
                  props.hiddenFogot(false);
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
                Đăng ký tài khoản của bạn
              </h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Tên của bạn
                  </label>
                  <input
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nguyễn Văn A"
                    required=""
                  />
                </div>
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
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nhập lại mật khẩu
                  </label>
                  <input
                    onChange={(e) => {
                      setPasswordAgain(e.target.value);
                    }}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  onClick={signup}
                  className="w-full text-white bg-primary-600 bg-bluehome hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Đăng ký
                </button>
              </form>
            </div>
            <div
              onClick={() => {
                props.hiddenFogot(false);
                dispatch(setDsForm(true));
              }}
              className="ml-5 mb-5 cursor-pointer opacity-60 text-base"
            >
              Về đăng nhập
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
