'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";


export default function Doctor(props) {
   const [hover, setHover] = useState(false)
   const router = useRouter();
   return (
      <div onClick={() => {router.push(`${props.specialistId}/doctor/${props.item}`) }} onPointerEnter={() => { setHover(true) }}  onPointerLeave={()=>{setHover(false)}} className="flex flex-col justify-between cursor-pointer border border-slate-300 w-[287px] h-[278px] rounded-xl hover:shadow-md" >
         <div className="flex flex-col items-center mt-5">
            <div className="h-20">
               <img className="h-20" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/88044728_728653661299490_3907106769641406464_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=be3454&_nc_ohc=QDiiW225lNQAX_VBfNW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfAJo9AoqTqZGg5zOoLhGtwCBwvpCAF326v56hnpKSnerg&oe=6558BD25" alt="" />
            </div>
            {hover ? <div className="text-base text-blue-500 font-semibold my-2"> BS Nguyễn Văn Hoàn</div> : <div className="text-base  font-semibold my-2"> BS Nguyễn Văn Hoàn</div>}
            <div className="text-sm">Nhi khoa</div>
            <div className="text-sm my-2">Bệnh viện nhi đồng 2</div>
         </div>
         {hover ? <div className="font-semibold text-blue-500 p-1 pl-4 border-t-1 border-slate-300">Đặt lịch khám</div> : <div className="font-semibold p-1 pl-4 border-t-1 border-slate-300">Đặt lịch khám</div>}
      </div>
   )
}





