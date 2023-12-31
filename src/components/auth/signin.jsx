'use client';

import { useEffect, useState } from 'react';
import axios from '@/api/axios';
import { USER_URL } from '@/api/constant/user';
import { toast, ToastContainer } from 'react-toastify';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { selectUserLogin, setAvatar, setName, setDsForm } from '@/app/redux/userLogin/userLoginSlice';
import { useDispatch } from 'react-redux';
import Logo from '@/image/shortCutLogo.jpg';
import { useRef } from 'react';

export default function Signin(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentPasswordDisplay,setCurrentPasswordDisplay] = useState(false)
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const inputRefpass = useRef(null);
  const clear = () => {
    setEmail('');
    setPassword('');
  };
  const signin = async () => {
    setIsLoading(true);
    const tmp = await axios.post(`${USER_URL.LOGIN}`, { email, password });
    const user = tmp.data?.data;
    if (tmp?.data?.code === 200) {
      toast.success('Đăng nhập thành công');
      console.log(user);
      setCookie('access_token', user.tokens.access.token);
      setCookie('refresh_token', user.tokens.refresh.token);
      setCookie('user_avatar', user.user.avatar);
      setCookie('user_name', user.user.fullName);
      setCookie('user_id', user.user.id);
      clear();
      inputRef.current.value = '';
      inputRefpass.current.value = '';
      dispatch(setDsForm(false));
      let roles = "";
      const data = await axios.post('https://medical-booking-server.onrender.com/api/v1/auth/token', { token: user.tokens.access.token  });
      data.data.user.roles.map((item) => {
        roles += item.roleIndex;
      })
      setCookie('roles',roles);
    } else {
      toast.error(tmp?.response?.data?.message);
    }
    setIsLoading(false);
  };
  return (
    <div className="">
      <section className="">
        <div className="flex flex-col w-[500px]  items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className='mt-6 relative'>
              <a href="#" className="flex items-center justify-center text-2xl font-semibold dark:text-white">
                <img
                  className="w-16 h-16 mr-2"
                  src={Logo.src}
                  alt="logo"
                />
                BV Đa Khoa Hà Nội
              </a>
              <div
                onClick={() => {
                  dispatch(setDsForm(false));
                }}
                className="absolute p-1 m-4 top-[-24px] right-0 cursor-pointer hover:text-red500 rounded-full"
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
            </div>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              
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
                  <input ref={inputRef}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                    required=""
                  />
                </div>
                <div className='relative'>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Mật khẩu
                  </label>
                  <input ref={inputRefpass}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type={!currentPasswordDisplay ? 'password' : 'text'}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {!currentPasswordDisplay ? (
                    <div
                      onClick={() => {
                        setCurrentPasswordDisplay(!currentPasswordDisplay);
                      }}
                      className="cursor-pointer absolute right-5 top-[43px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye-slash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486z" />
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708" />
                      </svg>
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        setCurrentPasswordDisplay(!currentPasswordDisplay);
                      }}
                        className="cursor-pointer absolute right-5 top-[43px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                      </svg>
                    </div>
                  )}
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
                  className={isLoading ? "w-full text-white bg-primary-600 bg-bluehome hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative opacity-70" : "w-full text-white bg-primary-600 bg-bluehome hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative"}
                >
                  Đăng nhập
                  <div className={isLoading ? 'absolute top-1 left-44' : 'absolute hidden'}>
                    <svg
                      aria-hidden="true"
                      className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                </button>
                <p className="text-sm font-light text-graybg-gray500 dark:text-gray-400">
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
