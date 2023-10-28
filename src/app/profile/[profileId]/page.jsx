'use client'

import { useParams } from "next/navigation";


export default function Profile() {
   const param = useParams('/profile');
   const handle = () => {
      console.log(param);
   }

   return (
      <div>
         <div onClick={handle}>Profile detail</div>
      </div>
   )
}
