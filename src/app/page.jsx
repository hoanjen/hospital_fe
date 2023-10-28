'use client'


import DoctorList from "@/components/Home/doctorList"
import HospitalList from "@/components/Home/hospitalList"
import { useState } from "react"



export default function Home() {
  const [clickSubMenu, setClickSubMenu] = useState('bv')
  function handleSubMenu() {
    if (clickSubMenu === 'bv') {
      return (<div className="flex text-center text-lg font-semibold mt-5 cursor-pointer">
                <div className="p-3 min-w-[300px] border-b-bluehome text-blue-700 border-b-4">Bệnh Viện</div>
                <div onClick={() => {setClickSubMenu('ck')}} className="p-3 min-w-[300px] border-b-4 hover:border-b-bluehome">Chuyên Khoa</div>
                <div onClick={() => {setClickSubMenu('bs')}} className="p-3 min-w-[300px] border-b-4 hover:border-b-bluehome">Bác Sĩ</div>
            </div> )
    }
    else if(clickSubMenu === 'ck'){
      return (<div className="flex text-center text-lg font-semibold mt-5 cursor-pointer">
                <div onClick={() => {setClickSubMenu('bv')}} className="p-3 min-w-[300px] hover:border-b-bluehome">Bệnh Viện</div>
                <div className="p-3 min-w-[300px] border-b-4 border-b-bluehome text-blue-700">Chuyên Khoa</div>
                <div onClick={() => {setClickSubMenu('bs')}} className="p-3 min-w-[300px] border-b-4 hover:border-b-bluehome">Bác Sĩ</div>
            </div> )
    }
    else{
      return (<div className="flex text-center text-lg font-semibold mt-5 cursor-pointer">
                <div onClick={() => {setClickSubMenu('bv')}} className="p-3 min-w-[300px] hover:border-b-bluehome border-b-4">Bệnh Viện</div>
                <div onClick={() => {setClickSubMenu('ck')}} className="p-3 min-w-[300px] border-b-4 hover:border-b-bluehome">Chuyên Khoa</div>
                <div className="p-3 min-w-[300px] border-b-4 border-b-bluehome text-blue-700 ">Bác Sĩ</div>
            </div> )
    }
  }

  return (
    <div className="">
      <div className="w-screen bg-bluehome h-[520px] relative ">
        <img className="float-right bg-bluehome h-[520px]" src="https://res.cloudinary.com/drlvs8ebw/image/upload/v1697647330/Hospital/exxw5coy7klf0danagft.jpg" alt="" />
        <div className="absolute z-10 top-1/4 w-[630px] left-[32%] text-center text-white">
          <div className="font-bold text-4xl">Ứng dụng đặt khám</div>
          <div className="text-lg mt-2 font-medium">Đặt khám với hơn 475 bác sĩ, 25 bệnh viện, 50 phòng khám trên YouMed để có số thứ tự và khung giờ khám trước.</div>
          <div>input</div>
          <div></div>
        </div>
        
      </div>
      <div className="w-screen bg-bluehome text-white flex justify-around px-64 pb-8">
        <div className="flex">
          <div>
            <div className="font-bold text-2xl">25+</div>
            <div className="font-medium">Bệnh viện kết nối</div>
          </div>
          <div className="text-blue-700 pl-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-hospital" viewBox="0 0 16 16">
              <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5Zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9h-.5Zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Z" />
              <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1V1Zm2 14h2v-3H7v3Zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm0-14H6v1h4V1Zm2 7v7h3V8h-3Zm-8 7V8H1v7h3Z" />
            </svg>
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="font-bold text-2xl">475+</div>
            <div className="font-medium">Bác sĩ hoạt động</div>
          </div>
          <div className="text-blue-700 pl-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="font-bold text-2xl">50+</div>
            <div className="font-medium">Phòng khám đa khoa</div>
          </div>
          <div className="text-blue-700 pl-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="font-bold text-2xl">40+</div>
            <div className="font-medium">Chuyên khoa</div>
          </div>
          <div className="text-blue-700 pl-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-activity" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center text-lg">
          {(handleSubMenu)()}
        </div>
        <div className="flex justify-center">
          {(() => {
            if (clickSubMenu === 'bv'){
              return <HospitalList></HospitalList>
            }
            else if(clickSubMenu === 'bs'){
              return <DoctorList></DoctorList>
            }

          })()}
          
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      

    </div>
  )
}
