'use client'

import { useState } from "react";
import React from 'react';
import { DatePicker, Space, Radio } from 'antd';

export default function Information(){
   const onChange = (date, dateString) => {
      console.log(date, dateString);
   };
   const [value, setValue] = useState(1);
   const onChange2 = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
   };
   const [changeInfo, setChangeInfo] = useState(false)

   return (
      <div className="mt-10 ml-5 w-[1140px]">
         {changeInfo ? <div>
            <div className="font-semibold py-5 text-xl">Hồ sơ</div>
            <div className="bg-white rounded-lg p-5 pt-16 w-[1140px] flex justify-around">
               <div className="">
                  <div>
                     <h2 class="text-lg font-medium pb-4">Điều chỉnh thông tin</h2>
                  </div>
                  <div className="my-4">
                     <label class="block text-sm font-medium text-gray-700">Họ và tên <span class="text-red-500">*</span></label>
                     <input type="text" placeholder="Họ và tên" class="mt-1 px-3 py-2 block w-full shadow-sm placeholder:text-sm border focus:border-bluehome border-gray-200 rounded-md "></input>
                  </div>
                  <div className="my-4">
                     <label class="block text-sm font-medium text-gray-700">Số điện thoại <span class="text-red-500">*</span></label>
                     <input type="text" placeholder="Số điện thoại" inputmode="numeric" pattern="[0-9]*" digitonly="" class="mt-1 px-3 py-2 focus:ring-primary focus:border-primary block w-full shadow-sm placeholder:text-sm border border-gray-200 rounded-md ng-untouched ng-pristine ng-valid" />
                  </div>
                  <div className="my-4">
                     <label class="block text-sm font-medium text-gray-700">Ngày sinh <span class="text-red-500">*</span></label>
                     <div className="mt-2">
                        <Space direction="vertical">
                           <DatePicker className="w-96 h-10" onChange={onChange} format={'DD/MM/YYYY'} />

                        </Space>
                     </div>
                  </div>
                  <div className="my-4">
                     <label for="gender" class="block text-sm font-medium text-gray-700">Giới tính<span class="text-red-500">*</span></label>
                     <Radio.Group onChange={onChange2} value={value}>
                        <Radio value={1}>Nam</Radio>
                        <Radio value={2}>Nữ</Radio>
                     </Radio.Group>
                  </div>
               </div>
               <div>
                  <div className="my-4">
                     <label htmlFor="address" class="block text-sm font-medium text-gray-700">Địa chỉ cụ thể</label>
                     <input type="text" placeholder="Số nhà, tên đường" class="mt-1 px-3 py-2 focus:ring-primary focus:border-primary block w-full shadow-sm placeholder:text-sm border border-gray-200 rounded-md ng-untouched ng-pristine ng-valid"></input>
                  </div>
                  <div className="my-4 flex ">
                     <div className="mr-5">
                        <label class="block text-sm font-medium text-gray-700">Số CMND/CCCD</label>
                        <input type="text" placeholder="Số CMND hoặc CCCD" inputmode="numeric" pattern="[0-9]*" digitonly="" class="mt-1 px-3 py-2 focus:ring-primary focus:border-primary block w-full shadow-sm placeholder:text-sm border border-gray-200 rounded-md ng-pristine ng-valid ng-touched"></input>
                     </div>
                     <div>
                        <label class="block text-sm font-medium text-gray-700">Dân tộc</label>
                        <input type="text" placeholder="Dân tộc" inputmode="numeric" pattern="[0-9]*" digitonly="" class="mt-1 px-3 py-2 focus:ring-primary focus:border-primary block w-full shadow-sm placeholder:text-sm border border-gray-200 rounded-md ng-pristine ng-valid ng-touched"></input>
                     </div>
                  </div>
                  <div className="my-4">
                     <label class="block text-sm font-medium text-gray-700">Nghề nghiệp</label>
                     <input type="text" placeholder="Nghề nghiệp" inputmode="numeric" pattern="[0-9]*" digitonly="" class="mt-1 px-3 py-2 focus:border-bluehome block w-full shadow-sm placeholder:text-sm border border-gray-200 rounded-md ng-pristine ng-valid ng-touched"></input>
                  </div>
                  <div className="my-4">
                     <label for="hiCardCode" class="block text-sm font-medium text-gray-700">Mã thẻ BHYT</label>
                     <input formcontrolname="hiCardCode" type="text" nz-input="" placeholder="Mã số trên thẻ Bảo hiểm y tế" class="mt-1 px-3 py-2 focus:ring-primary focus:border-primary block w-full shadow-sm placeholder:text-sm border border-gray-200 rounded-md ng-untouched ng-pristine ng-valid" />
                  </div>
                  <div className="my-4">
                     <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                     <input formcontrolname="email" type="email" nz-input="" placeholder="Địa chỉ email của bạn" class="mt-1 px-3 py-2 focus:ring-primary focus:border-primary block w-full shadow-sm placeholder:text-sm border border-gray-200 rounded-md ng-untouched ng-pristine ng-valid" />
                  </div>
                  <div className="flex justify-end mt-5 cursor-pointer">
                     <div onClick={() => { setChangeInfo(false) }} className="p-2 w-16 text-bluehome">Hủy</div>
                     <div className="p-2 w-32 bg-bluehome text-white rounded-md">Lưu thông tin</div>
                  </div>
               </div>
            </div>

         </div> : <div>
            <div className="font-semibold py-5 text-xl">Hồ sơ</div>
            <div className="bg-white rounded-lg p-5 w-[550px]">
               <div className="flex items-center p-6">
                  <div className="">
                     <img className="w-16 rounded-full" src="https://atg-prod-scalar.s3.amazonaws.com/studentpower/media/user%20avatar.png" alt="" />
                  </div>
                  <div className="pl-5">
                     <div className="font-semibold text-lg">NGUYỄN VĂN HOÀN</div>
                     <div className="opacity-70 text-sm">Mã BN: YMP23388654</div>
                  </div>
               </div>
               <div>
                  <div className="font-medium">Thông tin cơ bản</div>
                  <div>
                     <div className="flex justify-between mt-3">
                        <div>Họ và tên</div>
                        <div className="font-medium">Nguyễn Văn Hoàn</div>
                     </div>
                     <div className="flex justify-between mt-3">
                        <div>Điện thoại</div>
                        <div className="font-medium">0984534395</div>
                     </div>
                     <div className="flex justify-between mt-3">
                        <div>Ngày sinh</div>
                        <div className="font-medium">01/11/2023</div>
                     </div>
                     <div className="flex justify-between mt-3">
                        <div>Giới tính</div>
                        <div className="font-medium">Nam</div>
                     </div>
                     <div className="flex justify-between mt-3">
                        <div>Địa chỉ</div>
                        <div className="font-medium">123</div>
                     </div>
                  </div>
                  <div className="font-medium mt-5">Thông tin bổ sung</div>
                  <div>
                     <div className="flex justify-between mt-3">
                        <div>Mã BHYT</div>
                        <div className="font-medium">Nguyễn Văn Hoàn</div>
                     </div>
                     <div className="flex justify-between mt-3">
                        <div>Số CMND/CCCD</div>
                        <div className="font-medium">0984534395</div>
                     </div>
                     <div className="flex justify-between mt-3">
                        <div>Dân tộc</div>
                        <div className="font-medium">01/11/2023</div>
                     </div>
                     <div className="flex justify-between mt-3">
                        <div>Nghề nghiệp</div>
                        <div className="font-medium">Nam</div>
                     </div>
                     <div className="flex justify-between mt-3">
                        <div>Email</div>
                        <div className="font-medium">123</div>
                     </div>
                  </div>
               </div>

               <div onClick={() => { setChangeInfo(true) }} className="flex justify-end mt-5 cursor-pointer">
                  <div className="p-2 w-40 text-center bg-bluehome text-white rounded-md">Thay đổi thông tin</div>
               </div>

            </div>
         </div>}
      </div>
   )
}
