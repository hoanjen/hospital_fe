'use client'

import axios from '@/api/axios'
import { USER_URL } from '@/api/constant/user'
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import moment from "moment/moment"
import Signin from '@/components/auth/signin';

export default function Booking() {
   const pathname = useParams();
   const [user,setUser] = useState('');
   const [doctor, setDoctor] = useState('');
   const [form,setForm] = useState('');
   const [workingTime, setWorkingTime] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const booking = async (booking) => {
      
      if(form === ''){
         toast.error('Phải điền triệu chứng');
         return;
      }
      setIsLoading(true);
      const mes = await axios.post(`${USER_URL.BOOKING}`, {workingTime:booking, note: form} );
      if(mes?.data?.code !== 201){
         toast.error(tmp?.response?.data?.message);
      }
      setIsLoading(false);
      
   }

   const callWorkingTimeById = async () => {
      const workingTime = await axios.get(`${USER_URL.WORKINGTIME}/${pathname.bookingId}`);
      console.log(workingTime)
      setWorkingTime(workingTime.data.data);
   }

   const callDoctorDetail = async () => {
      const doctor = await axios.get(`${USER_URL.DOCTOR}/${pathname.doctorId}`);
      setDoctor(doctor.data.data);
   }

   const callUserProfile = async () => {
      const user = await axios.get(`${USER_URL.USERS}`);
      console.log(user)
      setUser(user.data.data);
   }

   useEffect(() => {
      callUserProfile();
      callDoctorDetail();
      callWorkingTimeById();
   },[])

   return (
      <div className="h-screen">
         
         <div className="flex justify-center">
            <div className="m-5 flex">
               <div className="bg-white w-[600px] m-5 rounded-xl pb-10">
                  <div  className="m-5 font-bold text-xl">
                     Hồ sơ bệnh nhân
                  </div>
                  <div className="m-5">
                     <div className="flex items-center">
                        <div className="w-16 rounded-xl overflow-hidden">
                           <img className="w-16 h-16 object-cover" src={user.avatar} alt="" />
                        </div>
                        <div className="ml-5 ">
                           <div className="font-medium">{user.fullName}</div>
                           <div className="text-sm opacity-70">{user.email}</div>
                        </div>
                     </div>
                     <div className="flex justify-between border-t-1 p-2 mt-7">
                        <div className="opacity-90">Mã bệnh nhân</div>
                        <div className="font-normal">{user.id}</div>
                     </div>
                     <div className="flex justify-between border-t-1 p-2"> 
                        <div className="opacity-90">Giới tính</div>
                        <div className="font-normal">{user.gender ? user.gender : 'Chưa cập nhật'}</div>
                     </div>
                     <div className="flex justify-between border-t-1 p-2">
                        <div className="opacity-90">Ngày sinh</div>
                        <div className="font-normal">{user.dateOfBirth ? user.dateOfBirth : 'Chưa cập nhật'}</div>
                     </div>
                     <div className="flex justify-between border-t-1 p-2">
                        <div className="opacity-90">Số điện thoại</div>
                        <div className="font-normal">{user.phoneNumber ? user.phoneNumber : 'Chưa cập nhật'}</div>
                     </div>
                     <div className="flex justify-between border-t   -1 p-2">
                        <div className="opacity-90">Địa chỉ</div>
                        <div className="font-normal">{user.address ? user.address : 'Chưa cập nhật'}</div>
                     </div>
                  </div>
                  <div className="m-5 p-2">
                     <div className="mb-2">Ghi chú</div>
                     <div className="w-[400px] h-28">
                        <textarea onChange={(e) => { setForm(e.target.value) }} placeholder="Triệu chứng, thuốc đang dùng, v.v"  className="text-sm w-[400px] h-28 max-h-36 border-2 rounded-lg" type="text" />
                     </div>
                  </div>
               </div>
               <div className="bg-white w-[400px] h m-5 ml-0 rounded-xl">
                  <div className="m-5">
                     <div className=" rounded-xl">
                        Thông tin đặt khám
                     </div>
                     <div className="flex items-center border-y-1 p-2">
                        <div className="w-16 rounded-full overflow-hidden">
                           <img className="w-16 h-16 object-cover" src={doctor.image} alt="" />
                        </div>
                        <div className="ml-5">
                           Bác sĩ {doctor.name}
                        </div>
                     </div>
                     <div className="mt-3 flex justify-between">
                        <div>Ngày khám</div>
                        <div>{moment(workingTime?.workingPlan?.dateOfBirth).format('DD/MM/YYYY')}</div>
                     </div>
                     <div className="mt-3 flex justify-between">
                        <div>Giờ khám </div>
                        <div>{workingTime.startTime}-{workingTime.endTime}</div>
                     </div>
                     <div className="mt-3 flex justify-between">
                        <div>
                           Bệnh nhân
                        </div>
                        <div>
                           {user.fullName}
                        </div>
                     </div>
                     <div className="mt-3 flex justify-between">
                        <div>Phòng khám</div>
                        <div>{workingTime?.workingPlan?.place}</div>
                     </div>
                     
                     
                     <div onClick={() => { booking(pathname.bookingId);  }} className={isLoading ? "bg-bluehome text-base text-white flex items-center justify-center p-3 mt-56 rounded-md cursor-pointer relative opacity-70" : "bg-bluehome text-base text-white flex items-center justify-center p-3 mt-56 rounded-md cursor-pointer relative"}>
                        Đặt lịch
                        <div className={isLoading ? 'absolute' : 'absolute hidden'}>
                           <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
