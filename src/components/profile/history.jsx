'use client'

import { useEffect, useState } from "react"
import axios from '@/api/axios'
import { USER_URL } from '@/api/constant/user'
import { useParams } from "next/navigation"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function History() {
   const path = useParams();
   const [history, setHistory] = useState('');
   

   const callHistoryByUserId = async () => {
      const historyy = await axios.get(`${USER_URL.HEALFORM}/?userId=${path.profileId}&populate=doctor,workingTime`);   
      setHistory(historyy.data.data.results);
      console.log(historyy.data.data.results);
   }

   useEffect(()=>{
      callHistoryByUserId();
   },[])

   const dsStatus = (status) => {
      if(status === 'success'){
         return ( 
            <div className="p-2 min-w-[110px] text-white bg-green-500 text-center rounded-md">Thành công</div>
         )
      }
      else if(status === 'pending'){
         return (
            <div className="p-2 min-w-[110px] text-white bg-yellow-400   text-center rounded-md">Chờ duyệt</div>
         )
      }else{
         <div className="p-2 min-w-[110px] text-white bg-yellow-400   text-center rounded-md">Từ chối</div>
      }
   }

   

   return (
      <div className="w-[1140px] mt-10 ml-5">
         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
               <caption className="text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                  <div className="text-lg p-5 font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                     Lịch sử đặt khám
                     
                  </div>
                     <div className="bg-orange-50 p-4">
                        <div className="flex items-center text-orange-600 ">
                           <label className="ml-1 font-medium">Lưu ý</label>
                           <div className="text-base ml-2 text-gray-900 font-normal">* Nếu bệnh nhân bận việc không đến khám được vui lòng hủy lịch khám đã đặt và đặt lại ngày khác. Xin cảm ơn!</div>
                        </div>
                     </div>
               </caption>
               
               
               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                     <tr>
                        <th scope="col" className="px-6 py-3">
                           Mã phiếu
                        </th>
                        <th scope="col" className="px-6 py-3">
                           Tên bác sĩ
                        </th>
                        <th scope="col" className="px-6 py-3">
                           Thời gian
                        </th>
                        <th scope="col" className="px-6 py-3">
                           Số thứ tự
                        </th>
                        <th scope="col" className="px-6 py-3">
                           Triệu chứng
                        </th>
                        <th scope="col" className="px-6 py-3">
                           Trạng thái
                        </th>
                        <th scope="col" className="px-6 py-3">
                           <span className="sr-only">Edit</span>
                        </th>
                     </tr>
               </thead>
               <tbody>
                  
                  
                  {history.length > 0 ? history.map((item,index) => {
                      return (
                         <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {item.id} 
                            </th>
                            <td className="px-6 py-4">
                               {item.doctor.name}
                            </td>
                            <td className="px-6 py-4">
                                 {item.workingTime.startTime} - {item.workingTime.endTime}
                            </td>
                            <td className="px-6 py-4">
                                 {item.numberOrder}
                            </td>
                            <td className="px-6 py-4">
                               {item.note}
                            </td>
                            <td className="px-6 py-2">          
                              {dsStatus(item.status)}
                            </td>
                            <td className="px-6 py-4 text-right">
                               <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Hủy lịch</a>
                            </td>
                         </tr>
                      )  
                  }) : ''
                  }  
                  {
                     history === '' ? [1, 2, 3, 4, 5, 6].map((item, key) => {
                        return (
                           <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                 <Skeleton></Skeleton>
                              </th>
                              <td className="px-6 py-4">
                                 <Skeleton></Skeleton>
                              </td>
                              <td className="px-6 py-4">
                                 <Skeleton></Skeleton>
                              </td>
                              <td className="px-6 py-4">
                                 <Skeleton></Skeleton>
                              </td>
                              <td className="px-6 py-4">
                                 <Skeleton></Skeleton>
                              </td>
                              <td className="px-6 py-2">
                                 <Skeleton></Skeleton>
                              </td>
                              <td className="px-6 py-4 text-right">
                                 <Skeleton></Skeleton>
                              </td>
                           </tr>
                        )
                     }) :''
                  }
               </tbody> 
                  
            </table>
                     {
               history.length > 0 || history === '' ? '' : 
               <div className="bg-slate-100 p-4">
                  <div className=" text-center">

                     <div className="text-base ml-2 text-gray-900 font-normal">Không có dữ liệu</div>
                  </div>
               </div>   
               }
            
         </div>
      </div>
   )
}
