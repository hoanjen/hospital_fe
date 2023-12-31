'use client';

import { useState, useEffect } from 'react';
import axios from '@/api/axios';
import { USER_URL } from '@/api/constant/user';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import moment from 'moment';
import { toast, ToastContainer } from 'react-toastify';
import { useRef } from 'react';
export default function Account(props) {
  const [userProfile, setUserProfile] = useState('');
  const [currentPasswordDisplay, setCurrentPasswordDisplay] = useState(false);
  const [newPasswordDisplay, setNewPasswordDisplay] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const inputRef = useRef(null);
  const currentInputRef = useRef(null);
  const callProfileById = async () => {
    const user = await axios.get(`${USER_URL.USERS}`);
    setIsLoadingPage(true);
    setUserProfile(user.data.data);
    setIsLoadingPage(false);
  };

  const updatePassword = async () => {
    if(isChangePassword === false){
      setIsChangePassword(true);
      const data = { password: newPassword};
      const tmp = await axios.put(`${USER_URL.UPDATEPROFILE}`, data);
       if (tmp?.data?.code === 200) {
         setNewPassword(''); 
         inputRef.current.value = '';
         currentInputRef.current.value = '';
         setNewPasswordDisplay(false);
         toast.success('Thay đổi mật khẩu thành công');
  
       } else {
          toast.error(tmp?.response?.data?.message);
       }
      setIsChangePassword(false);
    }

  }

  useEffect(() => {
    callProfileById();
  }, []);

  return (
    <div className="m-5 mt-10">
      <div className="font-semibold py-5 text-xl">Tài khoản</div>
      <div className="flex ">
        <div className="bg-white rounded-lg p-5 w-[550px]">
          {
            isLoadingPage ?
            <div>
                <Skeleton width={200} height={25}></Skeleton>
                <div>
                  <div className="flex justify-between mt-2">
                    <Skeleton width={140} height={25}></Skeleton>
                    <Skeleton width={140} height={25}></Skeleton>
                  </div>
                  <div className="flex justify-between mt-2">
                    <Skeleton width={140} height={25}></Skeleton>
                    <Skeleton width={140} height={25}></Skeleton>
                  </div>
                  <div className="flex justify-between mt-2">
                    <Skeleton width={140} height={25}></Skeleton>
                    <Skeleton width={140} height={25}></Skeleton>
                  </div>
                  <div className="flex justify-between mt-2">
                    <Skeleton width={140} height={25}></Skeleton>
                    <Skeleton width={140} height={25}></Skeleton>
                  </div>
                  <div className="flex justify-between mt-2">
                    <Skeleton width={140} height={25}></Skeleton>
                    <Skeleton width={140} height={25}></Skeleton>
                  </div>
                </div>
                <Skeleton className='my-5 mt-7' width={240} height={25}></Skeleton>
            </div> 
            : 
            <div>
                <div className="font-medium">Thông tin tài khoản</div>
                <div>
                  <div className="flex justify-between mt-3">
                    <div>Họ và tên</div>
                    <div className="font-medium">{userProfile.fullName}</div>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div>Điện thoại</div>
                    <div className="font-medium">{userProfile.phoneNumber}</div>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div>Ngày sinh</div>
                    <div className="font-medium">{moment(userProfile.dateOfBirth).format("DD/MM/YYYY")}</div>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div>Giới tính</div>
                    <div className="font-medium">{userProfile.gender}</div>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div>Địa chỉ</div>
                    <div className="font-medium">{userProfile.address}</div>
                  </div>
                  <div
                    onClick={() => {
                      props.toInfo();
                    }}
                    className=" text-blue-500 my-5 cursor-pointer"
                  >
                    Thay đổi thông tin
                  </div>
                </div>
            </div>
          }
          
        </div>
        <div className="bg-white rounded-lg ml-5 p-5 w-[550px]">
            {
              isLoadingPage ? 
              <div>
                <Skeleton width={240} height={25}></Skeleton>
                <div className="mt-5">

                  <Skeleton className='mt-15' width={200} height={20}></Skeleton>
                  <Skeleton width={340} height={42}></Skeleton>
                  <Skeleton className='mt-15' width={96} height={40}></Skeleton>
                </div>

              </div>
              :
              <div>
                <div className="font-medium">Thay đổi mật khẩu </div>
                <div className="mt-5">
                  <label className="block text-sm font-medium text-gray-700 ng-tns-c15-46">
                    Mật khẩu hiện tại <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input ref={currentInputRef}
                      type={!currentPasswordDisplay ? 'password' : 'text'}
                      placeholder="Mật khẩu hiện tại của bạn"
                      className="mt-1 px-3 py-2 block w-2/3 shadow-sm placeholder:text-sm border border-gray-200 rounded-md "
                    ></input>
                    {!currentPasswordDisplay ? (
                      <div
                        onClick={() => {
                          setCurrentPasswordDisplay(!currentPasswordDisplay);
                        }}
                        className="cursor-pointer absolute right-[180px] top-1/4"
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
                        className="cursor-pointer absolute right-[180px] top-1/4"
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
                  <label className="block text-sm font-medium mt-5 text-gray-700 ng-tns-c15-46">
                    Mật khẩu mới<span className="text-red500">*</span>
                  </label>
                  <div className="relative mt-3">
                    <input ref={inputRef} onChange={(e)=>{ setNewPassword(e.target.value);}}
                      type={!newPasswordDisplay ? 'password' : 'text'}
                      placeholder="Nhập mật khẩu mới"
                      className="mt-1 px-3 py-2 block w-2/3 shadow-sm placeholder:text-sm border border-gray-200 rounded-md "
                    ></input>
                    {!newPasswordDisplay ? (
                      <div
                        onClick={() => {
                          setNewPasswordDisplay(!newPasswordDisplay);
                        }}
                        className="cursor-pointer absolute right-[180px] top-1/4"
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
                          setNewPasswordDisplay(!newPasswordDisplay);
                        }}
                        className="cursor-pointer absolute right-[180px] top-1/4"
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
                  <button onClick={() => { updatePassword() }} className={isChangePassword ? "p-2 mt-15 text-center w-24 bg-bluehome text-white rounded-md cursor-not-allowed"  :"p-2 mt-15 text-center w-24 bg-bluehome text-white rounded-md cursor-pointer"}>Thay đổi</button>
                </div>
              </div>
            }
        </div>
      </div>
    </div>
  );
}
