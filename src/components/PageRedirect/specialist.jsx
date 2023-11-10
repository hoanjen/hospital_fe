'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";


export default function Specialist(props) {
   const router = useRouter();
   return (
      <div onClick={ () => { router.push(`specialist/${props.item}`)}} className="flex flex-col items-center w-48 p-4 hover:shadow-2xl rounded-xl hover:text-blue-500">   
        <div className="w-16 m-2">
            <img  src="https://cdn1.youmed.vn/tin-tuc/wp-content/uploads/2023/05/Diungmiendich.png" alt="" />
        </div>
        <div>Dị ứng - miễn dịch</div>
      </div>
   )
}
