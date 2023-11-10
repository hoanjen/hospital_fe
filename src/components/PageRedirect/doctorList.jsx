'use client'
import { useState } from "react"
import Doctor from "./doctor"

export default function DoctorList(props) {
   const [fakeList, setFakeList] = useState([1,2,3,4,5,6,7])
   return (
      <div className="grid grid-cols-4">
         {fakeList.map((item, index)=>{
            return (<div onClick={() => {console.log(props.specialistId)}} key={index} className="m-2">
                     <Doctor item={item} specialistId={props.specialistId}></Doctor>
                  </div>)
         })}
      </div>
   )
}

