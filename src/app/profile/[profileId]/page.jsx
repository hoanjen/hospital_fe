'use client';
import { deleteCookie } from 'cookies-next';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Information from '@/components/profile/infomation';
import Account from '@/components/profile/account';
import {toast} from 'react-toastify'
import { useRouter } from 'next/navigation';
import { selectUserLogin, setAvatar, setActive, setDsForm } from '@/app/redux/userLogin/userLoginSlice';
import { useDispatch, useSelector } from 'react-redux';
import HistoryOrder from '@/components/profile/historyOrder';

export default function Profile() {
  const router = useRouter();
  const dispatch = useDispatch();
  const param = useParams('/profile');
  const handle = () => {
    console.log(param);
  };
  const number =  useSelector(selectUserLogin);
  const [active, setActivePage] = useState(number.active);
  const backInfo = () => {
    setActivePage(1);
  };
  const pageProfile = () => {
    if (active === 1) {
      return <Information></Information>;
    } else if (active === 2) {
      return <Account toInfo={backInfo}></Account>;
    } else if(active === 3) {
      return <HistoryOrder></HistoryOrder>;
    } else{

    }
  };



  return (
    <div className=" flex justify-center mb-10 min-h-[1200px]">
      <div className="flex">
        <div className="bg-white h-64 mt-10 rounded-lg overflow-hidden cursor-pointer">
          <div
            onClick={() => {
              setActivePage(1);
              dispatch(setActive(1));
            }}
            className={
              active === 1
                ? 'w-72 p-3  border-bluehome mt-3 border-l-4 bg-sky-100'
                : 'w-72 mt-3 p-3 border-l-4 border-white hover:border-sky-100 hover:bg-sky-100'
            }
          >
            Hồ sơ
          </div>
          <div
            onClick={() => {
              setActivePage(2);
              dispatch(setActive(2));
            }}
            className={
              active === 2
                ? 'w-72 p-3 border-bluehome border-l-4 bg-sky-100'
                : 'w-72 p-3 border-l-4 border-white hover:border-sky-100  hover:bg-sky-100'
            }
          >
            Tài khoản
          </div>
          <div
            onClick={() => {
              setActivePage(3);
              dispatch(setActive(3));
            }}
            className={
              active === 3
                ? 'w-72 p-3 border-bluehome border-l-4 bg-sky-100'
                : 'w-72 p-3 border-l-4 border-white hover:border-sky-100 hover:bg-sky-100'
            }
          >
            Lịch sử đặt khám
          </div>
          
        </div>
        {pageProfile()}
        
      </div>
    </div>
  );
}
