'use client'
import Specialist from "./specialist"
import moment from "moment/moment"
import axios from '@/api/axios'
import { USER_URL } from '@/api/constant/user'
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"

export default function WorkingTimeList(props) {
   const pathname = useParams();
   const [time7Day, setTime7Day] = useState([moment()]);
   const [indexClick, setIndexClick] = useState(0);
   const [listTime, setListTime] = useState([]);
   const [chosseTime, setChosseTime] = useState();
   const callWorkingTimebyDoctor = async (index) => {
      let list;
      if(index !== 0){
         list = await axios.get(`${USER_URL.WORKINGTIME}?doctorId=${pathname.doctorId}&date=${time7Day[index].format('YYYY-MM-DD')}&populate=workingPlan`)
      }
      else{
         list = await axios.get(`${USER_URL.WORKINGTIME}?doctorId=${pathname.doctorId}&date=${moment().format('YYYY-MM-DD')}&populate=workingPlan`)
      }
      setListTime(list.data.data.results);
   }

   useEffect(() => {
      const tmp = [];
      for(let i = 0; i <= 6; i++){(
         tmp.push(moment().add(i, 'days')));
      }
      setTime7Day(tmp);
      callWorkingTimebyDoctor(0);
   }, [])

   const displayRegis = (item, index) => {
      if (item.registeredQuantity < item.maxSlots){
         return (
            <div onClick={() => { setChosseTime(index); props.getWorkingTime(item.id); }} className={index === chosseTime ? "bg-bluehome text-white cursor-pointer p-2 border-1 rounded-md m-1 text-center" : "hover:bg-bluehome hover:text-white cursor-pointer p-2 border-1 rounded-md m-1 text-center"} >
               {item.startTime} {`-`} {item.endTime}
            </div>
         )
      }
      else{
         return (
            <div className="hover:bg-bluehome hover:text-white p-2 border-1 rounded-md m-1 text-center cursor-not-allowed">
               {item.startTime} {`-`} {item.endTime}
            </div>
         )
      }
   }

   return (
      <div>
         <div className="grid grid-cols-7 my-3">
            {time7Day.map((item, index) => {
               return (
                  <div onClick={() => {setIndexClick(index); callWorkingTimebyDoctor(index)}} className={indexClick === index ? 'bg-bluepadding cursor-pointer p-3 border-b-2 border-bluehome  mx-1 text-center' : 'hover:bg-bluepadding cursor-pointer p-3 hover:border-b-2 hover:border-bluehome  mx-1 text-center'} key={index}>
                     {item.format('DD-MM')}
                  </div>
               )
            })}
         </div>
         <div>
            <div className="my-3">Lịch khám đang có:</div>
            <div className="border-b-1 m-2">Buổi sáng</div>
            <div className="grid grid-cols-6">
               {listTime.map((item, index) => {
                  if(item.startTime < "12:00"){
                     return (
                        <div  key={index}>
                           {
                              displayRegis(item,index)
                           }
                        </div>
                     )
                  }
               })}
            </div>
            <div className="border-b-1 m-2">Buổi chiều</div>
            <div className="grid grid-cols-6">
               {listTime.map((item, index) => {
                  if (item.startTime > "12:00") {
                     return (
                        <div key={index}>
                           {
                              displayRegis(item,index)
                           }
                        </div>
                     )
                  }
               })}
            </div>
         </div>
      </div>
   )
}