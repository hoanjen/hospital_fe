
import React from 'react';
import { Button, Result } from 'antd';
import Link from 'next/link';


export default function Page403 () {
   
   return <div className='w-full h-screen flex items-center justify-center'>
      <Result
         status="403"
         title="403"
         subTitle="Xin lỗi, Bạn không có quyền truy cập trang này này."
         extra={<Button className='bg-blue500 text-white ' >
            <Link href={process.env.REACT_APP_BASE_HREF}>Về trang chủ</Link>
         </Button>}
      />
   </div>
}