'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Article (props){
    const [hover, setHover] = useState(false)
    const router = useRouter();

    return (
      <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} className="relative rounded-md overflow-hidden shadow-lg">
        <img className={hover ? "scale-110  h-64 object-cover" : "h-64 object-cover"} src={props.article.imgSrc} alt="" />
        <div className={hover ? "absolute flex items-center justify-center bottom-0 md:w-full text-center h-16 text-sm font-bold text-white bg-[#2c57ab]": "absolute flex items-center justify-center bottom-0 bg-white md:w-full text-center h-16 text-sm font-bold text-[#2c57ab]"}>
          <div >{props.article.title}</div>
        </div>
      </div>
    )
}