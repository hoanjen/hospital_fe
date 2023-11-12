'use client'
import { useState } from "react"
import Specialist from "./specialist"
import { useEffect } from "react";
import axios from '@/api/axios'
import { USER_URL } from '@/api/constant/user'


export default function SpecialistList() {
   const [specialistList, setSpecialistList] = useState([]);
   const callDepartments = async () => {
      const list = await axios.get(`${USER_URL.DEPARTMENTS}`);
      setSpecialistList(list.data.data.results);
      console.log(list.data.data.results)
   }

   useEffect(() => {
      callDepartments();
   }, []);

   return (
      <div className="grid grid-cols-6">
         {
            specialistList.map((item, index) => {
               return (<div key={index} className="m-2">
                  <Specialist item={item} ></Specialist>
               </div>)
            })
         }
      </div>
   )
}