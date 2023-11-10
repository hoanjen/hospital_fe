'use client'

import SpecialistList from "@/components/PageRedirect/specialistList"

import { useParams } from "next/navigation";


export default function SpecialistPage() {
   const pathname = useParams();
   return (
      <div onClick={() => {console.log(pathname)}} className="flex flex-col items-center">
          <div className="font-bold text-3xl p-5 rounded-xl my-8 bg-slate-100">Lựa chọn chuyên khoa khám bệnh</div>
          <div className="flex justify-center bg-slate-100 rounded-2xl p-5">
            <SpecialistList></SpecialistList>
          </div>
       </div>
   )
}
