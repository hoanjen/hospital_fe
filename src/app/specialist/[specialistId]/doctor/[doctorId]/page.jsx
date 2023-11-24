'use client'

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import WorkingTimeList from "@/components/PageRedirect/workingTimeList";

import axios from '@/api/axios'
import { USER_URL } from '@/api/constant/user'
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { selectUserLogin, setAvatar, setName, setDsForm } from '@/app/redux/userLogin/userLoginSlice';
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "cookies-next";




export default function DoctorDetailPage() {
   const dispatch = useDispatch();
   const pathname = useParams();
   const router = useRouter(pathname);
   const [userName, setUserName] = useState('NULL')
   const [doctor, setDoctor]= useState({});
   const [workingTime, setWorkingTime] = useState();
   const callDoctorDetailById = async () => {
      const list = await axios.get(`${USER_URL.DOCTOR}/${pathname.doctorId}`)
      setDoctor(list.data.data)
   }

   useEffect(() => {
      setUserName(getCookie('user_name'));
      callDoctorDetailById();
   },[])

   const getWorkingTime = (id) => {
      setWorkingTime(id)
   }
   const logToast = () => {
      toast.error('Bạn phải chọn khung giờ khám');
      return;
   }
   const useForm = (tmp) => {
      if(tmp){
         return workingTime ?
            <div onClick={() => { router.push(`/specialist/${pathname.specialistId}/doctor/${pathname.doctorId}/booking/${workingTime}`); }} className="cursor-pointer m-5 mx-32 p-2 bg-bluehome text-lg text-white font-medium rounded-xl text-center">
               Đặt Khám Ngay
            </div> :
            <div onClick={logToast} className="cursor-pointer m-5 mx-32 p-2 bg-bluehome text-lg text-white font-medium rounded-xl text-center">
               Đặt Khám Ngay
            </div>
      }
      else{
         return workingTime ?
            <div onClick={() => { dispatch(setDsForm(true)) }} className="cursor-pointer m-5 mx-32 p-2 bg-bluehome text-lg text-white font-medium rounded-xl text-center">
               Đặt Khám Ngay
            </div> :
            <div onClick={logToast} className="cursor-pointer m-5 mx-32 p-2 bg-bluehome text-lg text-white font-medium rounded-xl text-center">
               Đặt Khám Ngay
            </div>
      }
   }
   return (
      
      <div className="h-screen">
         <div className="flex justify-center mt-10 "> 
            <div className="bg-white rounded-2xl w-[900px] ">
               <div className=" m-5">
                  <div className="flex">
                     <div className="w-44 h-44 rounded-full overflow-hidden"> 
                        <img className="w-44" src={doctor.image} alt="" />
                     </div>   
                     <div className="ml-10 mt-5">
                        <div className="text-lg font-bold">{doctor.degree} {` ${doctor.name}`}</div>
                        <div className="flex mt-2">
                           <div className=" text-bluehome font-bold flex ">
                              <div className="">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                 </svg>
                              </div>
                              <div className="flex items-center text-center ">Bác sĩ</div>
                           </div>
                           <div className="ml-3"></div>
                           <div className="flex items-center border-l-1 pl-3 ">{doctor.experience} Năm kinh nghiệm</div>
                        </div>
                        <div className="flex mt-2">
                           <div>Chuyên khoa: </div>
                           <div className="pl-2 text-blue-600">Tiêu hóa</div>
                        </div>
                        <div className="flex mt-2">
                           <div>Nơi công tác:</div>
                           <div className="pl-2">Bệnh viện Đa Khoa Hà Nội</div>
                        </div>
                        
                     </div>
                     
                  </div>
                  <div className="my-10">
                     <div className="text-lg font-bold">Đặt khám nhanh</div>
                     <div>
                        <WorkingTimeList getWorkingTime={getWorkingTime}></WorkingTimeList>
                     </div>
                  </div>
                  <div>
                     <div className="text-lg  font-bold mb-2">Giới thiệu</div>
                     <div>{doctor.description}</div>
                  </div>
                  
                  <div>
                     {
                        useForm(userName !== 'NULL')
                     }
                  </div>
                  
               </div>
               
            </div>
            
         </div>
      </div>
   )
}
