'use client';

import Chart1 from '@/components/admin/DashBoard/Chart/chart1';
import Chart2 from '@/components/admin/DashBoard/Chart/chart2';

export default function Admin() {
  return (
    <div className="flex items-center justify-center">
      <div className="m-14">
        <div className="m-5 font-semibold text-2xl">Hi, Chào mừng trở lại👋 </div>
        <div className="mt-10 flex">
          <div className="bg-white rounded-xl py-10 px-6 mr-3">
            <div className=" flex min-w-[306px] min-h-[64px] items-center">
              <div>
                <svg
                  width="64px"
                  height="64px"
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M714 762.2h-98.2c-16.6 0-30 13.4-30 30s13.4 30 30 30H714c16.6 0 30-13.4 30-30s-13.4-30-30-30zM487.4 762.2H147.1c-16.6 0-30 13.4-30 30s13.4 30 30 30h340.3c16.6 0 30-13.4 30-30s-13.4-30-30-30z"
                      fill="#33CC99"
                    ></path>
                    <path d="M838.253 130.023l65.548 65.548-57.982 57.983-65.549-65.549z" fill="#FFB89A"></path>
                    <path
                      d="M743.7 955.9H195.8c-53.7 0-97.4-43.7-97.4-97.4V174.8c0-53.7 43.7-97.4 97.4-97.4H615c16.6 0 30 13.4 30 30s-13.4 30-30 30H195.8c-20.6 0-37.4 16.8-37.4 37.4v683.7c0 20.6 16.8 37.4 37.4 37.4h547.9c20.6 0 37.4-16.8 37.4-37.4v-395c0-16.6 13.4-30 30-30s30 13.4 30 30v395.1c0 53.6-43.7 97.3-97.4 97.3z"
                      fill="#45484C"
                    ></path>
                    <path
                      d="M907.7 122.1l-39.2-39.2c-24-24-65.1-21.9-91.7 4.7L419.5 445 347 643.6l198.6-72.4L903 213.8c12.1-12.1 19.6-27.7 21.1-44 1.8-18.1-4.3-35.5-16.4-47.7zM512.6 519.3L447.5 543l23.7-65.1 264.7-264.7 40.9 41.7-264.2 264.4z m348-347.9l-41.3 41.3-40.9-41.7 40.9-40.9c3.1-3.1 6.2-3.9 7.6-3.9l37.6 37.6c-0.1 1.3-0.9 4.5-3.9 7.6z"
                      fill="#45484C"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="ml-6">
                <div className="font-semibold text-2xl">400</div>
                <div className="mt-1 opacity-80 text-sm">Bác sĩ hoạt động</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl py-10 px-6 mx-3">
            <div className=" flex min-w-[306px] min-h-[64px] items-center">
              <div>
                <svg
                  width="64px"
                  height="64px"
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M714 762.2h-98.2c-16.6 0-30 13.4-30 30s13.4 30 30 30H714c16.6 0 30-13.4 30-30s-13.4-30-30-30zM487.4 762.2H147.1c-16.6 0-30 13.4-30 30s13.4 30 30 30h340.3c16.6 0 30-13.4 30-30s-13.4-30-30-30z"
                      fill="#33CC99"
                    ></path>
                    <path d="M838.253 130.023l65.548 65.548-57.982 57.983-65.549-65.549z" fill="#FFB89A"></path>
                    <path
                      d="M743.7 955.9H195.8c-53.7 0-97.4-43.7-97.4-97.4V174.8c0-53.7 43.7-97.4 97.4-97.4H615c16.6 0 30 13.4 30 30s-13.4 30-30 30H195.8c-20.6 0-37.4 16.8-37.4 37.4v683.7c0 20.6 16.8 37.4 37.4 37.4h547.9c20.6 0 37.4-16.8 37.4-37.4v-395c0-16.6 13.4-30 30-30s30 13.4 30 30v395.1c0 53.6-43.7 97.3-97.4 97.3z"
                      fill="#45484C"
                    ></path>
                    <path
                      d="M907.7 122.1l-39.2-39.2c-24-24-65.1-21.9-91.7 4.7L419.5 445 347 643.6l198.6-72.4L903 213.8c12.1-12.1 19.6-27.7 21.1-44 1.8-18.1-4.3-35.5-16.4-47.7zM512.6 519.3L447.5 543l23.7-65.1 264.7-264.7 40.9 41.7-264.2 264.4z m348-347.9l-41.3 41.3-40.9-41.7 40.9-40.9c3.1-3.1 6.2-3.9 7.6-3.9l37.6 37.6c-0.1 1.3-0.9 4.5-3.9 7.6z"
                      fill="#45484C"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="ml-6">
                <div className="font-semibold text-2xl">400</div>
                <div className="mt-1 opacity-80 text-sm">Bác sĩ hoạt động</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl py-10 px-6 mx-3">
            <div className=" flex min-w-[306px] min-h-[64px] items-center">
              <div>
                <svg
                  width="64px"
                  height="64px"
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M714 762.2h-98.2c-16.6 0-30 13.4-30 30s13.4 30 30 30H714c16.6 0 30-13.4 30-30s-13.4-30-30-30zM487.4 762.2H147.1c-16.6 0-30 13.4-30 30s13.4 30 30 30h340.3c16.6 0 30-13.4 30-30s-13.4-30-30-30z"
                      fill="#33CC99"
                    ></path>
                    <path d="M838.253 130.023l65.548 65.548-57.982 57.983-65.549-65.549z" fill="#FFB89A"></path>
                    <path
                      d="M743.7 955.9H195.8c-53.7 0-97.4-43.7-97.4-97.4V174.8c0-53.7 43.7-97.4 97.4-97.4H615c16.6 0 30 13.4 30 30s-13.4 30-30 30H195.8c-20.6 0-37.4 16.8-37.4 37.4v683.7c0 20.6 16.8 37.4 37.4 37.4h547.9c20.6 0 37.4-16.8 37.4-37.4v-395c0-16.6 13.4-30 30-30s30 13.4 30 30v395.1c0 53.6-43.7 97.3-97.4 97.3z"
                      fill="#45484C"
                    ></path>
                    <path
                      d="M907.7 122.1l-39.2-39.2c-24-24-65.1-21.9-91.7 4.7L419.5 445 347 643.6l198.6-72.4L903 213.8c12.1-12.1 19.6-27.7 21.1-44 1.8-18.1-4.3-35.5-16.4-47.7zM512.6 519.3L447.5 543l23.7-65.1 264.7-264.7 40.9 41.7-264.2 264.4z m348-347.9l-41.3 41.3-40.9-41.7 40.9-40.9c3.1-3.1 6.2-3.9 7.6-3.9l37.6 37.6c-0.1 1.3-0.9 4.5-3.9 7.6z"
                      fill="#45484C"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="ml-6">
                <div className="font-semibold text-2xl">400</div>
                <div className="mt-1 opacity-80 text-sm">Bác sĩ hoạt động</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl py-10 px-6 ml-3">
            <div className=" flex min-w-[306px] min-h-[64px] items-center ">
              <div>
                <svg
                  width="64px"
                  height="64px"
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M714 762.2h-98.2c-16.6 0-30 13.4-30 30s13.4 30 30 30H714c16.6 0 30-13.4 30-30s-13.4-30-30-30zM487.4 762.2H147.1c-16.6 0-30 13.4-30 30s13.4 30 30 30h340.3c16.6 0 30-13.4 30-30s-13.4-30-30-30z"
                      fill="#33CC99"
                    ></path>
                    <path d="M838.253 130.023l65.548 65.548-57.982 57.983-65.549-65.549z" fill="#FFB89A"></path>
                    <path
                      d="M743.7 955.9H195.8c-53.7 0-97.4-43.7-97.4-97.4V174.8c0-53.7 43.7-97.4 97.4-97.4H615c16.6 0 30 13.4 30 30s-13.4 30-30 30H195.8c-20.6 0-37.4 16.8-37.4 37.4v683.7c0 20.6 16.8 37.4 37.4 37.4h547.9c20.6 0 37.4-16.8 37.4-37.4v-395c0-16.6 13.4-30 30-30s30 13.4 30 30v395.1c0 53.6-43.7 97.3-97.4 97.3z"
                      fill="#45484C"
                    ></path>
                    <path
                      d="M907.7 122.1l-39.2-39.2c-24-24-65.1-21.9-91.7 4.7L419.5 445 347 643.6l198.6-72.4L903 213.8c12.1-12.1 19.6-27.7 21.1-44 1.8-18.1-4.3-35.5-16.4-47.7zM512.6 519.3L447.5 543l23.7-65.1 264.7-264.7 40.9 41.7-264.2 264.4z m348-347.9l-41.3 41.3-40.9-41.7 40.9-40.9c3.1-3.1 6.2-3.9 7.6-3.9l37.6 37.6c-0.1 1.3-0.9 4.5-3.9 7.6z"
                      fill="#45484C"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="ml-6">
                <div className="font-semibold text-2xl">400</div>
                <div className="mt-1 opacity-80 text-sm">Bác sĩ hoạt động</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="w-[900px] p-2 rounded-xl mt-6 bg-white">
            <Chart1></Chart1>
          </div>
          <div className="w-[562px] ml-6 p-2 rounded-xl mt-6 bg-white">
            <Chart2></Chart2>
          </div>
        </div>
      </div>
    </div>
  );
}
