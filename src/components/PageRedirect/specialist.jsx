'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";


export default function Specialist(props) {
   const router = useRouter();
   return (
      <div onClick={ () => { router.push(`specialist/${props.item.id}`)}} className="flex flex-col bg-white items-center w-48 p-4 hover:shadow-2xl rounded-xl hover:text-blue-500">   
        <div className="w-16 m-2">
            <img src={props.item.image} alt="" />
        </div>
         <div>{props.item.name}</div>
      </div>
   )
}
