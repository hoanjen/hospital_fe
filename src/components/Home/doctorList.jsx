'use client';
import { useState } from 'react';
import Doctor from './doctor';

export default function DoctorList() {
  const [fakeList, setFakeList] = useState([1, 2, 3, 4, 5, 6, 7]);
  return (
    <div className="grid grid-cols-4">
      {fakeList.map((item, index) => {
        return (
          <div key={index} className="m-2">
            <Doctor></Doctor>
          </div>
        );
      })}
    </div>
  );
}
