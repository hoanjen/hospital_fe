'use client';
import { useState } from 'react';
import Specialist from './specialist';
import { useEffect } from 'react';
import axios from '@/api/axios';
import { USER_URL } from '@/api/constant/user';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import moment from 'moment';


export default function SpecialistList() {
  const [specialistList, setSpecialistList] = useState([]);
  const [isLoanding, setIsLoanding] = useState(false);
  const callDepartments = async () => {
    const list = await axios.get(`${USER_URL.DEPARTMENTS}?limit=100`);
    setSpecialistList(list.data.data.results);
    console.log(list.data.data.results);
  };

  useEffect(() => {
    setIsLoanding(true);
    callDepartments();
    setIsLoanding(false);
    console.log(moment(Date.now()).format("DD/MM/YYYY"))
  }, []);

  return (
    <div className="grid grid-cols-6">
      {specialistList.length > 0
        ? specialistList.map((item, index) => {
            return (
              <div key={index} className="m-2 cursor-pointer">
                <Specialist item={item}></Specialist>
              </div>
            );
          })
        : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((item, index) => {
            return (
              <div key={index} className="m-2">
                <div className="flex flex-col bg-white items-center w-48 p-4 hover:shadow-2xl rounded-xl hover:text-blue-500">
                  <div className="w-16">
                    <Skeleton width={64} height={64}></Skeleton>
                  </div>
                  <div>
                    <Skeleton width={102}></Skeleton>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
}
