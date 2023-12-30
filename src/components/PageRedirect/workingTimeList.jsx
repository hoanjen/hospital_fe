'use client';
import Specialist from './specialist';
import moment from 'moment/moment';
import axios from '@/api/axios';
import { USER_URL } from '@/api/constant/user';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';
import { Empty } from 'antd';

export default function WorkingTimeList(props) {
  const pathname = useParams();
  const [time7Day, setTime7Day] = useState([moment()]);
  const [indexClick, setIndexClick] = useState(0);
  const [listTimeMorning, setListTimeMorning] = useState('');
  const [listTimeAfternoon, setListTimeAfternoon] = useState('');
  const [listRes,setListRes] = useState(null);
  const [chosseTime, setChosseTime] = useState();
  const callWorkingTimebyDoctor = (indexs) => {
    setListTimeMorning([]);
    setListTimeAfternoon([]);
    console.log(listRes);
    let list1 = [];
    let list2 = [];
    listRes?.forEach((item, index) => {
      if (moment(item.workingPlan.date).format("DD/MM/YYYY") === moment().add(indexs, 'days').format("DD/MM/YYYY") && item.startTime < '12:00'){
        list1.push(item);

        console.log("hiiiiiiiiiiiiiiiiiii")

      }
      setListTimeMorning(list1);
      if (moment(item.workingPlan.date).format("DD/MM/YYYY") === moment().add(indexs, 'days').format("DD/MM/YYYY") && item.startTime > '12:00') {
        list2.push(item);
        console.log("hiiiiiiiiiiiiiiiiiii")

      }
      setListTimeAfternoon(list2);
      
    })

    console.log(listTimeMorning);
    console.log(listTimeAfternoon);

  };
  const callWorkingTimeListbyDoctor = async () => {
    
    const list = await axios.get(`${USER_URL.WORKINGTIME}/?doctorId=${pathname.doctorId}&populate=workingPlan&limit=100`);
    setListRes(list.data.data.results);
    console.log(list.data.data.results);
    
  };

  useEffect(() => {
    const tmp = [];
    callWorkingTimeListbyDoctor();
    for (let i = 1; i <= 7; i++) {
      tmp.push(moment().add(i, 'days'));
    }
    
    setTime7Day(tmp);
    
  }, []);
  useEffect(() => {

    callWorkingTimebyDoctor(1);
    
    
  }, [listRes])

  const displayRegis = (item, index) => {
    if (item.registeredQuantity < item.maxSlots) {
      return (
        <div
          onClick={() => {
            setChosseTime(index);
            props.getWorkingTime(item.id);
          }}
          className={
            index === chosseTime
              ? 'bg-bluehome text-white cursor-pointer p-2 border-1 border-gray600 rounded-md m-1 text-center'
              : 'hover:bg-bluehome hover:text-white cursor-pointer p-2 border  only:rounded-md m-1 text-center'
          }
        >
          {item.startTime} {`-`} {item.endTime}
        </div>
      );
    } else {
      return (
        <div className="hover:bg-bluehome hover:text-white p-2 border rounded-md m-1 text-center cursor-not-allowed">
          {item.startTime} {`-`} {item.endTime}
        </div>
      );
    }
  };

  return (
    <div>
      <div className="grid grid-cols-7 my-3">
        {time7Day.map((item, index) => {
          return (
            <div
              onClick={() => {
                setIndexClick(index);
                setChosseTime();
                callWorkingTimebyDoctor(index+1);
              }}
              className={
                indexClick === index
                  ? 'bg-bluepadding cursor-pointer p-3 border-b-2 border-bluehome  mx-1 text-center'
                  : 'hover:bg-bluepadding cursor-pointer p-3 hover:border-b-2 hover:border-bluehome  mx-1 text-center'
              }
              key={index}
            >
              {item.format('DD-MM')}
            </div>
          );
        })}
      </div>
      <div>
        <div className="my-3">Lịch khám đang có:</div>
        <div className="border-b-w1 m-2 text-lg font-medium">Buổi sáng</div>
        <div className="grid grid-cols-6">
          {listTimeMorning.length > 0 && listTimeMorning !== '' ? (
            listTimeMorning.map((item, index) => {
              return <div key={index}>{displayRegis(item, `s${index}`)}</div>;
            })
          ) : listTimeMorning === '' ? (
            [1, 2, 3, 4, 5].map((item, index) => {
              return (
                <div key={item}>
                  <Skeleton width={125} height={32}></Skeleton>
                </div>
              );
            })
          ) : (
                <div className="p-2 col-span-6">
                  <Empty style={{width:"40"}} description={"Không có lịch khám"}></Empty>
                </div>
          )}
        </div>

        <div className={listTimeMorning.length > 0 ? "border-b-w1 text-lg font-medium m-2 mt-25" : "border-b-w1 text-lg font-medium m-2"}>Buổi chiều</div>
        <div className="grid grid-cols-6">
          {listTimeAfternoon.length > 0 && listTimeAfternoon !== '' ? (
            listTimeAfternoon.map((item, index) => {
              return <div key={index}>{displayRegis(item, `c${index}`)}</div>;
            })
          ) : listTimeAfternoon === '' ? (
            [1, 2, 3, 4, 5].map((item, index) => {
              return (
                <div key={item}>
                  <Skeleton width={125} height={32}></Skeleton>
                </div>
              );
            })
          ) : (
                <div className="p-2 col-span-6">
                  <Empty style={{ width: "40" }} description={"Không có lịch khám"}></Empty>
                </div>
          )}
        </div>
        <div className={listTimeAfternoon.length > 0 ? "border-b-w1 text-lg font-medium m-2 mt-25" : "border-b-w1 text-lg font-medium m-2"}></div>
      </div>
    </div>
  );
}
