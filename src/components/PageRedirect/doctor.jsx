'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Doctor(props) {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`${props.specialistId}/doctor/${props.item.id}`);
      }}
      onPointerEnter={() => {
        setHover(true);
      }}
      onPointerLeave={() => {
        setHover(false);
      }}
      className="flex flex-col bg-white justify-between cursor-pointer border border-slate300 w-[287px] h-[278px] rounded-xl hover:shadow-md"
    >
      <div className="flex flex-col items-center mt-5 text-center">
        <div className="h-20">
          <img className="h-20" src={props.item.image} alt="" />
        </div>
        {hover ? (
          <div className="text-base text-blue500 font-semibold my-2"> BS {props.item.name}</div>
        ) : (
          <div className="text-base  font-semibold my-2"> BS {props.item.name}</div>
        )}
        <div className="text-sm">{props.item.degree}</div>
        <div className="text-sm my-2">Bệnh Viện Đa Khoa Hà Nội</div>
      </div>
      {hover ? (
        <div className="font-semibold text-blue500  p-1 pl-4 border-t-w1 border-slate300">Đặt lịch khám</div>
      ) : (
          <div className="font-semibold p-1 pl-4 border-t-w1 border-slate300">Đặt lịch khám</div>
      )}
    </div>
  );
}
