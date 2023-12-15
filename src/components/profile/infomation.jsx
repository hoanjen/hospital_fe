'use client'

import { useState, useEffect } from "react";
import React from 'react';
import { DatePicker, Space, Radio } from 'antd';
import axios from '@/api/axios'
import { USER_URL } from '@/api/constant/user'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import dayjs from "dayjs";
import { toast, ToastContainer } from 'react-toastify';
export default function Information(){
   const    onChange = (date, dateString) => {
      setDate(dateString); 
   };
   const [value, setValue] = useState(1);
   const onChange2 = (e) => {
      if(e.target.value === 1){
         setGender('Nam');
      } else if (e.target.value === 2){
         setGender('Nữ');
      }
      else if (e.target.value === 3){
         setGender('Khác');
      }
   };
   const [changeInfo, setChangeInfo] = useState(false);
   const [isloading, setIsloading] = useState(false);

   const init = {
      dateOfBirth: dayjs('15/10/2003'),
   };
   const [userProfile, setUserProfile] = useState('');
   const [name,setName] = useState('');
   const [phone, setPhone] = useState('');
   const [date,setDate] = useState('14/10/2003');
   const [gender,setGender] = useState('');
   const [address, setAddress] = useState('');
   const [CMND, setCMND] = useState('');
   const [nation, setNation] = useState('');
   const [job, setJob] = useState('');
   const [BHYT, setBHYT] = useState('');
   const updateProfile = async () => {
      const tmp = await axios.put(`${USER_URL.UPDATEPROFILE}`, {fullName:name,phone,date,gender,address,CMND,nation,job,BHYT});
      if (tmp?.data?.code === 200) {
         toast.success('Thay đổi thông tin thành công');
         setChangeInfo(false);

      } else {
         toast.error(tmp?.response?.data?.message);
      }

   }
   const callProfileById = async () => {
      setIsloading(true);
      const user = await axios.get(`${USER_URL.USERS}`);
      const userDetail = user.data.data;
      setUserProfile(user.data.data);
      setName(userDetail.fullName);
      if(userDetail.phone){
         setPhone(userDetail.phone)
      }
      if (userDetail.address) {
         setAddress(userDetail.address)
      }
      if (userDetail.date) {
         setDate(userDetail.date)
      }
      if (userDetail.gender) {
         setGender(userDetail.gender)
      }
      if (userDetail.CMND) {
         setCMND(userDetail.CMND)
      }
      if (userDetail.nation) {
         setNation(userDetail.nation)
      }
      if (userDetail.job) {
         setJob(userDetail.job)
      }  
      if (userDetail.BHYT) {
         setBHYT(userDetail.BHYT)
      }
      setIsloading(false);
      console.log(user.data.data);
   }

   useEffect(() => {
      callProfileById();
   }, [])



   return (
      <div className="mt-10 ml-5 w-[1140px]">
         {changeInfo ? <div>
            <div className="font-semibold py-5 text-xl">Hồ sơ</div>
            <div className="bg-white rounded-lg p-5 pt-16 w-[1140px] flex justify-around">
               <div className="">
                  <div>
                     <h2 className="text-lg font-medium pb-4">Điều chỉnh thông tin</h2>
                  </div>
                  <div className="my-4">
                     <label className="block text-sm font-medium text-gray-700">Họ và tên <span className="text-red-500">*</span></label>
                     <input value={name || ''} onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Họ và tên" className="mt-1 px-3 py-2 block w-full shadow-sm placeholder:text-sm border focus:border-bluehome border-gray-200 rounded-md "></input>
                  </div>
                  <div className="my-4">
                     <label className="block text-sm font-medium text-gray-700">Số điện thoại <span className="text-red-500">*</span></label>
                     <input value={phone || ''} onChange={(e) => { setPhone(e.target.value) }} type="text" placeholder="Số điện thoại" inputMode="numeric" pattern="[0-9]*" digitonly="" className="mt-1 px-3 py-2 focus:ring-primary focus:border-primary block w-full shadow-sm placeholder:text-sm border border-gray-200 rounded-md ng-untouched ng-pristine ng-valid" />
                  </div>
                  <div className="my-4">
                     <label className="block text-sm font-medium text-gray-700">Ngày sinh <span className="text-red-500">*</span></label>
                     <div className="mt-2">
                        <Space direction="vertical">
                           <DatePicker defaultValue={dayjs(date,'DD/MM/YYYY')} className="w-96 h-10" onChange={onChange} format={'DD/MM/YYYY'} />

                        </Space>
                     </div>   
                  </div>
                  <div className="my-4">
                     <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Giới tính<span className="text-red-500">*</span></label>
                     <Radio.Group defaultValue={gender === 'Name' ? 1 : gender === 'Nữ' ? 2 : 3} onChange={onChange2}>
                        <Radio value={1}>Nam</Radio>
                        <Radio value={2}>Nữ</Radio>
                        <Radio value={3}>Khác</Radio>
                     </Radio.Group>
                  </div>
               </div>
               <div>
                  <div className="my-4">
                     <label htmlFor="address" className="block text-sm font-medium text-gray-700">Địa chỉ cụ thể</label>
                     <input value={address || ''} onChange={(e) => { setAddress(e.target.value) }} type="text" placeholder="Số nhà, tên đường" className="mt-1 px-3 py-2 focus:ring-primary focus:border-primary block w-full shadow-sm placeholder:text-sm border border-gray-200 rounded-md ng-untouched ng-pristine ng-valid"></input>
                  </div>
                  <div className="my-4 flex ">
                     <div className="mr-5">
                        <label className="block text-sm font-medium text-gray-700">Số CMND/CCCD</label>
                        <input value={CMND || ''} onChange={(e) => { setCMND(e.target.value) }} type="text" placeholder="Số CMND hoặc CCCD" inputMode="numeric" pattern="[0-9]*" digitonly="" className="mt-1 px-3 py-2 focus:ring-primary focus:border-primary block w-full shadow-sm placeholder:text-sm border border-gray-200 rounded-md ng-pristine ng-valid ng-touched"></input>
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700">Dân tộc</label>
                        <input value={nation || ''} onChange={(e) => { setNation(e.target.value) }} type="text" placeholder="Dân tộc" inputMode="numeric" pattern="[0-9]*" digitonly="" className="mt-1 px-3 py-2 focus:ring-primary focus:border-primary block w-full shadow-sm placeholder:text-sm border border-gray-200 rounded-md ng-pristine ng-valid ng-touched"></input>
                     </div>
                  </div>
                  <div className="my-4">
                     <label className="block text-sm font-medium text-gray-700">Nghề nghiệp</label>
                     <input value={job || ''} onChange={(e) => { setJob(e.target.value) }} type="text" placeholder="Nghề nghiệp" inputMode="numeric" pattern="[0-9]*" digitonly="" className="mt-1 px-3 py-2 focus:border-bluehome block w-full shadow-sm placeholder:text-sm border border-gray-200 rounded-md ng-pristine ng-valid ng-touched"></input>
                  </div>
                  <div className="my-4">
                     <label htmlFor="hiCardCode" className="block text-sm font-medium text-gray-700">Mã thẻ BHYT</label>
                     <input value={BHYT || ''} onChange={(e) => { setBHYT(e.target.value) }} formcontrolname="hiCardCode" type="text" nz-input="" placeholder="Mã số trên thẻ Bảo hiểm y tế" className="mt-1 px-3 py-2 focus:ring-primary focus:border-primary block w-full shadow-sm placeholder:text-sm border border-gray-200 rounded-md ng-untouched ng-pristine ng-valid" />
                  </div>
                  <div className="flex justify-end mt-5 cursor-pointer">
                     <div onClick={() => { setChangeInfo(false) }} className="p-2 w-16 text-bluehome">Hủy</div>
                     <div onClick={updateProfile} className="p-2 w-32 bg-bluehome text-white rounded-md">Lưu thông tin</div>
                  </div>
               </div>
            </div>

         </div> : !isloading ? <div>
            <div className="font-semibold py-5 text-xl">Hồ sơ</div>
            <div className="bg-white rounded-lg p-5 w-[550px]">
               <div className="flex items-center p-6">
                  <div className="">
                     <img className="w-16 object-cover h-16 rounded-full" src={userProfile.avatar} alt="" />
                  </div>
                  <div className="pl-5">
                        <div className="font-semibold text-lg">{userProfile.fullName}</div>
                        <div className="opacity-70 text-sm">Mã BN: {userProfile.id}</div>
                  </div>
               </div>
               
               <div>
                  <div className="font-medium">Thông tin cơ bản</div>
                  <div>
                     <div className="flex justify-between mt-3">
                        <div>Họ và tên</div>
                           <div className="font-medium">{userProfile.fullName}</div>
                     </div>
                     <div className="flex justify-between mt-3">
                        <div>Điện thoại</div>
                           <div className="font-medium">{userProfile.number ? userProfile.number : 'Chưa cập nhật'}</div>
                     </div>
                     <div className="flex justify-between mt-3">
                        <div>Ngày sinh</div>
                           <div className="font-medium">{userProfile.date ? userProfile.date : 'Chưa cập nhật'}</div>
                     </div>
                     <div className="flex justify-between mt-3">
                        <div>Giới tính</div>
                           <div className="font-medium">{userProfile.gender ? userProfile.gender : 'Chưa cập nhật'}</div>  
                     </div>
                     <div className="flex justify-between mt-3">
                        <div>Địa chỉ</div>
                           <div className="font-medium">{userProfile.address ? userProfile.addresss : 'Chưa cập nhật'}</div>
                     </div>
                  </div>
                  <div className="font-medium mt-5">Thông tin bổ sung</div>
                  <div>
                     <div className="flex justify-between mt-3">
                        <div>Mã BHYT</div>
                           <div className="font-medium">{userProfile.BHYT ? userProfile.BHYT : 'Chưa cập nhật'}</div>
                     </div>
                     <div className="flex justify-between mt-3">
                        <div>Số CMND/CCCD</div>
                           <div className="font-medium">{userProfile.CMND ? userProfile.CMND : 'Chưa cập nhật'}</div>
                     </div>
                     <div className="flex justify-between mt-3">
                        <div>Dân tộc</div>
                           <div className="font-medium">{userProfile.nation ? userProfile.nation : 'Chưa cập nhật'}</div>
                     </div>
                     <div className="flex justify-between mt-3">
                        <div>Nghề nghiệp</div>
                           <div className="font-medium">{userProfile.job ? userProfile.job : 'Chưa cập nhật'}</div>
                     </div>
                     <div className="flex justify-between mt-3">
                        <div>Email</div>
                           <div className="font-medium">{userProfile.email}</div>
                     </div>
                  </div>
               </div>

               <div onClick={() => { setChangeInfo(true) }} className="flex justify-end mt-5 cursor-pointer">
                  <div className="p-2 w-40 text-center bg-bluehome text-white rounded-md">Thay đổi thông tin</div>
               </div>

            </div>
         </div> :
         <div>
            <div className="font-semibold py-5 text-xl">Hồ sơ</div>
            <div className="bg-white rounded-lg p-5 w-[550px]">
               <div className="flex items-center p-6">
                  <div className="">
                           <Skeleton width={64} height={64}></Skeleton>

                  </div>
                  <div className="pl-5">
                           <Skeleton width={200} height={25}></Skeleton>
                           <Skeleton width={300} height={25}></Skeleton>
                  </div>
               </div>
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
                  <br />   
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
               </div>

               <div onClick={() => { setChangeInfo(true) }} className="flex justify-end mt-5 cursor-pointer">
                        <Skeleton width={150} height={40}></Skeleton>

               </div>

            </div>
         </div>
         }
      </div>
   )
}
