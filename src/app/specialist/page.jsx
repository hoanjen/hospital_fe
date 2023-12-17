'use client';

import SpecialistList from '../../components/PageRedirect/specialistList';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from '@/api/axios';
import { USER_URL } from '@/api/constant/user';

export default function SpecialistPage() {
  return (
    <div className="flex flex-col items-center h-screen">
      <div>
        <div onClick={() => {}} className="font-bold text-3xl my-8 ">
          Lựa chọn chuyên khoa khám bệnh
        </div>
        <div className="flex justify-center bg-slate-100 rounded-2xl p-5">
          <SpecialistList></SpecialistList>
        </div>
      </div>
    </div>
  );
}
