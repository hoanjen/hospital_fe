'use client'

import DoctorList from "@/components/PageRedirect/doctorList"

import { useParams } from "next/navigation";

export default function SpecialistPage() {
   const pathname = useParams();
   return (
      <div  className="flex flex-col items-center">
          <div  onClick={() => {console.log(pathname.specialistId)}} className="font-bold text-3xl p-5 rounded-xl my-8 bg-slate-200">Lựa chọn bác sĩ khám bệnh</div>
          <div className="flex justify-center">
            <DoctorList specialistId={pathname.specialistId}></DoctorList>
          </div>
       </div>
   )
}
