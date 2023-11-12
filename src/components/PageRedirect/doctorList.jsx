'use client'
import { useState } from "react"
import Doctor from "./doctor"
import { useEffect } from "react";
import axios from '@/api/axios'
import { USER_URL } from '@/api/constant/user'


export default function DoctorList(props) {
   const [doctorList, setDoctorList] = useState([])

   const getDoctorByDepartment = async () => {
      const list = await axios.get(`${USER_URL.DOCTOR}/?departmentId=${props.specialistId}&limit=100`)
      console.log(list);
      setDoctorList(list.data.data.results);
   }

   useEffect(() => {
      getDoctorByDepartment();
   },[])
   return (
      <div className="grid grid-cols-4">
         {doctorList.map((item, index)=>{
            return (<div onClick={() => {console.log(props.specialistId)}} key={index} className="m-2">
                     <Doctor item={item} specialistId={props.specialistId}></Doctor>
                  </div>)
         })}
      </div>
   )
}

