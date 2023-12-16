'use client';
import { useState } from 'react';
import Doctor from './doctor';
import { useEffect } from 'react';
import axios from '@/api/axios';
import { USER_URL } from '@/api/constant/user';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function DoctorList(props) {
  const [doctorList, setDoctorList] = useState([]);

  const getDoctorByDepartment = async () => {
    const list = await axios.get(`${USER_URL.DOCTOR}/?departmentId=${props.specialistId}&limit=100`);
    console.log(list);
    setDoctorList(list.data.data.results);
  };

  useEffect(() => {
    getDoctorByDepartment();
  }, []);
  return (
    <div className="grid grid-cols-4">
      {doctorList.length > 0
        ? doctorList.map((item, index) => {
            return (
              <div
                onClick={() => {
                  console.log(props.specialistId);
                }}
                key={index}
                className="m-2"
              >
                <Doctor item={item} specialistId={props.specialistId}></Doctor>
              </div>
            );
          })
        : [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            return (
              <div key={index} className="m-2">
                <div className="flex flex-col bg-white justify-between cursor-pointer border border-slate-300 w-[287px] h-[278px] rounded-xl hover:shadow-md">
                  <div className="flex flex-col items-center mt-5">
                    <div>
                      <Skeleton width={80} height={80}></Skeleton>
                    </div>
                    <div className="text-base text-blue-500 font-semibold my-2">
                      <Skeleton width={147} height={24}></Skeleton>
                    </div>
                    <div className="text-sm">
                      <Skeleton width={128}></Skeleton>
                    </div>
                    <div className="text-sm my-2">
                      <Skeleton width={175}></Skeleton>
                    </div>
                  </div>
                  <div className="font-semibold p-1 pl-4 border-t-1 border-slate-300">
                    <Skeleton width={100}></Skeleton>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
}
