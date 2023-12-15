'use client'

import { useParams } from "next/navigation";
import { useState } from "react";
import Information from "@/components/profile/infomation";
import Account from "@/components/profile/account";
import History from "@/components/profile/history";

export default function Profile() {
   const param = useParams('/profile');
   const handle = () => {
      console.log(param);
   }
   const [active, setActive] = useState(1);
   const backInfo = () => {
      setActive(1);
   }
   const pageProfile = () => {
      if(active === 1){
         return <Information></Information>;
      }
      else if( active === 2){
         return <Account toInfo={backInfo}></Account>;
      }
      else{
         return <History></History>;
      }
   }

   return (
      <div className=" flex justify-center mb-10">
         <div className="flex">
            <div className="bg-white h-64 mt-10 rounded-lg overflow-hidden cursor-pointer">
               <div onClick={() => { setActive(1) }} className={active === 1 ? "w-72 p-3  border-bluehome mt-3 border-l-4 bg-sky-100" : "w-72 mt-3 p-3 border-l-4 border-white hover:border-sky-100 hover:bg-sky-100"}>Hồ sơ</div>
               <div onClick={() => { setActive(2) }} className={active === 2 ? "w-72 p-3 border-bluehome border-l-4 bg-sky-100" : "w-72 p-3 border-l-4 border-white hover:border-sky-100  hover:bg-sky-100"}>Tài khoản</div>
               <div onClick={() => { setActive(3) }} className={active === 3 ? "w-72 p-3 border-bluehome border-l-4 bg-sky-100" : "w-72 p-3 border-l-4 border-white hover:border-sky-100 hover:bg-sky-100"}>Lịch sử đặt khám</div>
               <div onClick={() => { setActive(4) }} className={active === 4 ? "w-72 p-3 border-bluehome border-l-4 bg-sky-100" : "w-72 p-3 border-l-4 border-white hover:border-sky-100 hover:bg-sky-100"}>Đăng xuất</div>
            </div>
            {pageProfile()}
         </div>
         
        
      </div>
   )
}
