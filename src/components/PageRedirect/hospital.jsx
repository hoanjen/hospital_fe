'use client';

import { useState } from 'react';

export default function Hospital() {
  const [hover, setHover] = useState(false);
  return (
    <div
      onPointerEnter={() => {
        setHover(true);
      }}
      onPointerLeave={() => {
        setHover(false);
      }}
    >
      {hover ? (
        <div className="max-w-[280px] cursor-pointer border border-slate-300 rounded-xl overflow-hidden relative shadow-md">
          <div>
            <img src="https://cdn.youmed.vn/photos/c90bc798-1748-4cfa-9472-53882038476c.png?width=300" alt="" />
          </div>
          <div className="border border-slate-300 z-10 absolute left-4 top-20 rounded-lg overflow-hidden">
            <img
              className="w-24"
              src="https://cdn.youmed.vn/photos/14c1b0c8-1b44-48e6-ab0d-b4b989a86b45.png?width=100&aspect_ratio=1:1"
              alt=""
            />
          </div>
          <div className="text-sm m-3 mt-16">
            <div className="text-base font-semibold text-blue-500">Bệnh viện Ung Biếu TPHCM</div>
            <div>47 Nguyễn Huy Lượng, P. 14, Q. Bình Thạnh, TP.HCM</div>
            <div className="mt-5">Thứ 2 - Thứ 6: 7h30 - 16h30</div>
            <div>Thứ 7 - CN: 7h30 - 11h30</div>
          </div>
        </div>
      ) : (
        <div className="max-w-[280px] cursor-pointer border border-slate-300 rounded-xl overflow-hidden relative">
          <div>
            <img src="https://cdn.youmed.vn/photos/c90bc798-1748-4cfa-9472-53882038476c.png?width=300" alt="" />
          </div>
          <div className="border border-slate-300 z-10 absolute left-4 top-20 rounded-lg overflow-hidden">
            <img
              className="w-24"
              src="https://cdn.youmed.vn/photos/14c1b0c8-1b44-48e6-ab0d-b4b989a86b45.png?width=100&aspect_ratio=1:1"
              alt=""
            />
          </div>
          <div className="text-sm m-3 mt-16">
            <div className="text-base font-semibold ">Bệnh viện Ung Biếu TPHCM</div>
            <div>47 Nguyễn Huy Lượng, P. 14, Q. Bình Thạnh, TP.HCM</div>
            <div className="mt-5">Thứ 2 - Thứ 6: 7h30 - 16h30</div>
            <div>Thứ 7 - CN: 7h30 - 11h30</div>
          </div>
        </div>
      )}
    </div>
  );
}
