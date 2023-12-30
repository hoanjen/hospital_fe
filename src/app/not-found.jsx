
import React from 'react';
import { Button, Result } from 'antd';
import Link from 'next/link';

export default function Page404() {

   return <div className='w-full h-screen flex items-center justify-center'>
      <Result
         status="404"
         title="404"
         subTitle="Xin lỗi, Không tìm thấy trang."
         extra={<Button className='bg-blue500 text-white' >
            <Link href={process.env.REACT_APP_BASE_HREF}>Về trang chủ</Link>
         </Button>}
      />
   </div>
}