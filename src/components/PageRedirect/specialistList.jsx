'use client'
import { useState } from "react"
import Specialist from "./specialist"

export default function SpecialistList() {
   const [fakeList, setFakeList] = useState([1,2,3,4,5,6,7])
   return (
      <div className="grid grid-cols-6">
         {fakeList.map((item, index)=>{
            return (<div key={index} className="m-2">
                     <Specialist item={item} ></Specialist>
                  </div>)
         })}
      </div>
   )
}