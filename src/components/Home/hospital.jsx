'use client'

import { useState } from "react"

export default function Hospital() {
   const [hover, setHover] = useState(false)
   return (
      <div className="flex flex-col items-center">
         <div className="flex mb-10">
            <div className="mr-10">
               <img className="w-48" src="https://cdn.bookingcare.vn/fo/2022/03/29/145205-logo-da-khoa-ha-noi.png" alt="" />
            </div>
            <div className="mt-10">
               <div className="font-bold text-xl">Bệnh Viện Đa Khoa Hà Nội</div>
               <div className="my-4 opacity-80">Kiểm soát bệnh tât - Vững tin cuộc sống</div>
               <div>
                  Địa chỉ: Nhổn city
               </div>
            </div>
         </div>
         <div className="mb-10 flex">
            <img className="w-[500px] rounded-lg" src="https://insmart.com.vn/wp-content/uploads/2021/05/BV-DK-Ha-Noi.jpg" alt="" />
            <img className="ml-5 w-[500px] rounded-lg" src="https://baohanam-fileserver.nvcms.net/IMAGES/2022/11/02/20221102094043-57bvdk.jpg" alt="" />
         </div>
         <div className="grid grid-cols-2">
            <div className="max-w-md">
               <div className="text-lg font-bold my-5">Giới thiệu</div>
               <div className="p-2 text-lg"> 
               <span className="p-4"></span>
               Với mô hình “Bệnh viện chuẩn 5*”, hệ thống các phòng khám, phòng chức năng và phòng điều trị được thiết kế tinh tế, sang trọng, không gian lý tưởng, thân thiện với người bệnh. Ngoài hệ thống phòng nội trú hiện đại được trang bị đầy đủ tiện nghi, chi phí giường bệnh chỉ từ 300.000vnđ/ngày, Bệnh viện còn có hệ thống phòng VIP có sự riêng tư, đảm bảo độ bảo mật thông tin tuyệt đối, tiện nghi, nội thất đẹp, dịch vụ 24/24… với mức chi phí ưu việt, mang đến sự thoải mái cho khách hàng, theo tiêu chí: “Ở viện thích hơn ở nhà”.
               <br />
               <br />
               <span className="p-4"></span>
               Phương châm luôn luôn mong muốn đem đến sự hài lòng cho khách hàng, Bệnh viện Đa khoa Hà Nội không chỉ tập trung vào trang thiết bị khám chữa bệnh, cũng như lựa chọn đội ngũ bác sĩ giàu kinh nghiệm, nhân viên y tế chuyên nghiệp, mà bệnh viện không ngừng đầu tư, nâng cấp cơ sở vật chất, trang thiết bị khám chữa bệnh mang lại sự uy tín, chất lượng cao.</div>
            </div>
            <div className="ml-10 max-w-md">
               <div className="text-lg font-bold my-5">Giờ làm viêc</div>
               <div className="border-b-1 p-2">
                  <div>Thứ 2 - Thứ 6: 7h30 - 16h30</div>
                  <div>Thứ 7 - CN: 7h30 - 11h30</div>
               </div>
               <div className="text-lg font-bold my-5">Tổng đài hỗi trợ</div>
               <div className="opacity-60 mb-5">Trong trường hợp bạn cần hỗ trợ thêm thông tin, vui lòng liên hệ tổng đài bên dưới để được trợ giúp.</div>
               <div>
                  <div className="border-b-1 inline-block">
                     <div>

                     </div>
                     <div>
                     Tổng đài đặt khám: 1900636223
                     </div>
                  </div>
               </div>
               <div>
                  <div className="border-b-1 inline-block">
                     <div>

                     </div>
                     <div>
                     Hỗ trợ kỹ thuật: 19002805
                     </div>
                  </div>
               </div>
               <div>
                  <div className="border-b-1 inline-block">
                     <div></div>
                     <div>
                     Tư vấn đặt khám
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>
   )
}





