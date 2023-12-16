'use client';

import { useState } from 'react';
import ArticleList from './articleList';
import group1188 from '../../image/Group-1188.svg';
import backmin from '../../image/back-06-min.png';
import pmin from '../../image/p-01-min.png';
import ckmin from '../../image/ck-022-min.png';
import ckmin03 from '../../image/ck-03-min-1.png';
import ckmin04 from '../../image/ck-04-min-1.png';
import ckmin06 from '../../image/ck-06-min-1.png';
import maskG from '../../image/Mask-Group-45-min.png';
import ttcImg from '../../image/image.trungtamchinh-07-min.png';
import maskG49 from '../../image/Mask-Group-49-min.png';
import maskG50 from '../../image/Mask-Group-50-min.png';
import maskG53 from '../../image/Mask-Group-53-min.png';
import maskG52 from '../../image/Mask-Group-52-min.png';
import maskG51 from '../../image/Mask-Group-51-min.png';
export default function Hospital() {
  const [hover, setHover] = useState(false);
  const [articles, setArticles] = useState([
    { imgSrc: pmin.src, title: 'TT HIẾM MUỘN & Y HỌC GIỚI TÍNH HÀ NỘI' },
    { imgSrc: ckmin.src, title: 'TT VÚ KỸ THUẬT CAO MAMMOCARE' },
    { imgSrc: ckmin03.src, title: 'TT CHẨN ĐOÁN CAN THIỆP TIÊU HÓA' },
    { imgSrc: ckmin04.src, title: 'TT UNG BƯỚU & ĐIỀU TRỊ GIẢM NHẸ' },
    { imgSrc: ckmin06.src, title: 'TT PHẪU THUẬT THẨM MỸ & Y HỌC TÁI TẠO' },
    { imgSrc: maskG.src, title: 'TT KHÁM & CHĂM SÓC SỨC KHỎE' },
  ]);
  const [subArticles, setSubArticles] = useState([
    {
      imgSrc: ttcImg.src,
      title: 'GÓI KHÁM & ĐIỀU TRỊ',
      detail:
        'Gói khám & điều trị được thực hiện bởi các bác sĩ chuyên môn giỏi, trình độ cao của Bệnh viện Đa khoa Hà Nội, giúp đánh giá chính xác về tình trạng sức khỏe chung.',
      btn: 'XEM TẤT CẢ GÓI KHÁM',
    },
    { imgSrc: maskG49.src, title: 'KHÁM GIÁO SƯ - CHUYÊN GIA' },
    { imgSrc: maskG50.src, title: 'KHÁM SỨC KHỎE TỔNG QUÁT' },
    { imgSrc: maskG53.src, title: 'KHÁM SÀNG LỌC TẦM SOÁT UNG THƯ' },
    { imgSrc: maskG52.src, title: 'PHẪU THUẬT TẠO HÌNH THẨM MỸ' },
    { imgSrc: maskG51.src, title: 'CHẨN ĐOÁN HÌNH ẢNH & CAN THIỆP KỸ THUẬT CAO' },
  ]);
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="flex mb-10">
        <div className="mr-10">
          <img className="w-48" src="https://cdn.bookingcare.vn/fo/2022/03/29/145205-logo-da-khoa-ha-noi.png" alt="" />
        </div>
        <div className="mt-10">
          <div className="font-bold text-xl">Bệnh Viện Đa Khoa Hà Nội</div>
          <div className="my-4 opacity-80">Kiểm soát bệnh tât - Vững tin cuộc sống</div>
          <div>Địa chỉ: Số 29 Hàn Thuyên, Hai Bà Trưng, Hà Nội</div>
        </div>
      </div>
      <div className="mb-10 flex">
        <img
          className="w-[500px] rounded-lg"
          src="https://insmart.com.vn/wp-content/uploads/2021/05/BV-DK-Ha-Noi.jpg"
          alt=""
        />
        <img
          className="ml-5 w-[500px] rounded-lg"
          src="https://baohanam-fileserver.nvcms.net/IMAGES/2022/11/02/20221102094043-57bvdk.jpg"
          alt=""
        />
      </div>
      <div className="grid grid-cols-2 mb-10">
        <div className="max-w-md">
          <div className="text-lg font-bold my-5">Giới thiệu</div>
          <div className="p-2 text-lg">
            <span className="p-4"></span>
            Với mô hình “Bệnh viện chuẩn 5*”, hệ thống các phòng khám, phòng chức năng và phòng điều trị được thiết kế
            tinh tế, sang trọng, không gian lý tưởng, thân thiện với người bệnh. Ngoài hệ thống phòng nội trú hiện đại
            được trang bị đầy đủ tiện nghi, chi phí giường bệnh chỉ từ 300.000vnđ/ngày, Bệnh viện còn có hệ thống phòng
            VIP có sự riêng tư, đảm bảo độ bảo mật thông tin tuyệt đối, tiện nghi, nội thất đẹp, dịch vụ 24/24… với mức
            chi phí ưu việt, mang đến sự thoải mái cho khách hàng, theo tiêu chí: “Ở viện thích hơn ở nhà”.
            <br />
            <br />
            <span className="p-4"></span>
            Phương châm luôn luôn mong muốn đem đến sự hài lòng cho khách hàng, Bệnh viện Đa khoa Hà Nội không chỉ tập
            trung vào trang thiết bị khám chữa bệnh, cũng như lựa chọn đội ngũ bác sĩ giàu kinh nghiệm, nhân viên y tế
            chuyên nghiệp, mà bệnh viện không ngừng đầu tư, nâng cấp cơ sở vật chất, trang thiết bị khám chữa bệnh mang
            lại sự uy tín, chất lượng cao.
          </div>
        </div>
        <div className="ml-10 max-w-md">
          <div className="text-lg font-bold my-5">Giờ làm viêc</div>
          <div className="border-b-1 p-2">
            <div>Thứ 2 - Thứ 6: 7h30 - 16h30</div>
            <div>Thứ 7 - CN: 7h30 - 11h30</div>
          </div>
          <div className="text-lg font-bold my-5">Tổng đài hỗi trợ</div>
          <div className="opacity-60 mb-5">
            Trong trường hợp bạn cần hỗ trợ thêm thông tin, vui lòng liên hệ tổng đài bên dưới để được trợ giúp.
          </div>
          <div>
            <div className="border-b-1 inline-block">
              <div></div>
              <div>Tổng đài đặt khám: 1900636223</div>
            </div>
          </div>
          <div>
            <div className="border-b-1 inline-block">
              <div></div>
              <div>Hỗ trợ kỹ thuật: 19002805</div>
            </div>
          </div>
          <div>
            <div className="border-b-1 inline-block">
              <div></div>
              <div>Tư vấn đặt khám</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="my-5 text-2xl text-center font-bold text-[#2c57ab]">HỆ THỐNG TRUNG TÂM KỸ THUẬT CAO</div>
        <div>
          <img src={group1188.src} alt="" />
        </div>
        <div className="p-2 text-lg max-w-5xl my-5">
          Nhằm thúc đẩy tính cạnh tranh trong các dịch vụ, hỗ trợ mang đến dịch vụ y tế tốt nhất, Bệnh viện Đa khoa Hà
          Nội liên tục đầu tư trang thiết bị, mạnh dạn ứng dụng hàng loạt kỹ thuật y học hiện đại. Như một cú hích trong
          hành trình phát triển, Bệnh viện phát triển “Hệ thống các Trung tâm Kỹ thuật cao” với tổ hợp nhiều trung tâm
          chuyên sâu.
        </div>
      </div>
      <ArticleList articles={articles}></ArticleList>
      <div className="flex flex-col items-center mt-10">
        <div className="my-5 text-2xl text-center font-bold text-[#2c57ab]">CHUYÊN KHOA</div>
        <div>
          <img src={group1188.src} alt="" />
        </div>
        <div className="max-w-[1031px] mt-8 relative py-6">
          <img className="h-[650px]" src={backmin.src} alt="" />
          <div className="absolute top-10">
            <ArticleList articles={subArticles}></ArticleList>
          </div>
        </div>
      </div>
    </div>
  );
}
