'use client'

import { useEffect, useState } from "react"
import axios from '@/api/axios'
import { USER_URL } from '@/api/constant/user'
import { useParams } from "next/navigation"


export default function History() {
   const path = useParams();
   const [history, setHistory] = useState([]);
   

   const callHistoryByUserId = async () => {
      const historyy = await axios.get(`${USER_URL.HEALFORM}/?userId=${path.profileId}&populate=doctor`);   
      setHistory(historyy.data.data.results);
      console.log(historyy.data.data.results);
   }

   useEffect(()=>{
      callHistoryByUserId();
   },[])

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
                  {history.map((item,index) => {
                      return (
                         <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {item.id}
                            </th>
                            <td className="px-6 py-4">
                               {item.doctor.name}
                            </td>
                            <td className="px-6 py-4">
                               Laptop
                            </td>
                            <td className="px-6 py-4">
                               $2999
                            </td>
                            <td className="px-6 py-4">
                               Laptop
                            </td>
                            <td className="px-6 py-4">
                               $2999
                            </td>
                            <td className="px-6 py-4 text-right">
                               <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Hủy lịch</a>
                            </td>
                         </tr>
                      )  
                  })}
               </tbody>
            </table>
         </div>
      </div>
   )
}
