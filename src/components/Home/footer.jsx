'use client'

import group1068 from "../../image/Group-1068.png"
import backmin from "../../image/back-06-min.png"
import bgim from "../../image/bgim.jpg"
import logoImg from "../../image/logoImg.jpg"
import group1208 from "../../image/Group-1208.svg"
export default function Footer (){

    return (
        <div className="mt-10 relative flex justify-center"> 
            <img className="w-full max-h-[480px] object-cover" src={backmin.src} alt="" />
            <div className="flex justify-center absolute top-8 w-[1031px] text-white">
                <div>
                    <div className="flex flex-row">
                        <div className="pr-16">
                            <img className="" src={group1068.src} alt="" />
                        </div>
                        <div className="w-80 h-56">
                            <div className="font-semibold mb-2">
                                LIÊN HỆ
                            </div>
                            <div className="text-sm">
                                <div className="flex flex-row pb-2"> 
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="pr-2 bi bi-house-door" viewBox="0 0 16 16">
                                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                                        </svg>
                                    </div>
                                    <div className="leading-5">
                                        <div>
                                            Công ty cổ phần Y Khoa HANO
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row pb-2">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="pr-2 bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                        </svg>
                                    </div>
                                    <div className="leading-5">
                                        <div>
                                            Số 29 Hàn Thuyên, Hai Bà Trưng, Hà Nội
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row pb-2">
                                    <div>
                                        <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="pr-2 bi bi-telephone" viewBox="0 0 16 16">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                        </svg>
                                    </div>
                                    <div className="leading-5">
                                        <div>
                                            1900 2345 29
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row pb-2">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="pr-2 bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                        </svg>
                                    </div>
                                    <div className="leading-5">
                                        <div>
                                            CSKH@benhvienhanoi.vn
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row pb-2">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="pr-2 bi bi-sticky" viewBox="0 0 16 16">
                                            <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293z"/>
                                        </svg>
                                    </div>
                                    <div className="leading-5">
                                        <div>
                                            Giấy phép hoạt động khám chữa bệnh số 
                                            <span className="font-bold"> 119/BYT-GPHD</span> do Bộ y tế cấp ngày 12/12/2017
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-52 h-60 ml-14">
                            <div className="text-sm font-medium">
                                <div className="pb-1">GIỚI THIỆU</div>
                                <div className="pb-1">CHUYÊN KHOA</div>
                                <div className="pb-1">ĐỘI NGŨ CHUYÊN MÔN</div>
                                <div className="pb-1">DỊCH VỤ</div>
                                <div className="pb-1">KHÁCH HÀNG CẦN BIẾT</div>
                                <div className="pb-1">TIN TỨC</div>
                                <div>CHÍNH SÁCH BẢO MẬT</div>
                            </div>
                        </div>
                        <div className="w-80 h-60 ml-5">
                            <div className="font-semibold mb-3"> 
                                LIÊN KẾT VỚI CHÚNG TÔI
                            </div>
                            <div className="relative h-[130px]">
                                <img className=" w-80 h-[130px] object-cover" src={bgim.src} alt="" />
                                <div className="absolute top-0 z-10">
                                    <div className="bg-gradient-to-b w-[278.44px] h-20 from-[#3f3f3f]"></div>
                                </div>
                                <div className="absolute top-0 z-20">
                                    <div className="flex flex-row p-2">
                                        <div>
                                            <img className="w-14 pr-2" src={logoImg.src} alt="" />
                                        </div>
                                        <div>
                                            <div className="flex flex-row text-sm font-semibold">
                                                <a href="https://www.facebook.com/BenhvienHN/?ref=embed_page">Bệnh viện Đa khoa Hà...</a>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2c57ab" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                                </svg>
                                            </div>
                                            <div className="text-xs">
                                                48.197 người theo dõi
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flew-row absolute space-x-[75px] bottom-0 p-2 font-semibold">
                                    <div className=" flex flex-row space-x-1 items-center bg-[#f5f6f7] text-[#4b4f56] text-xs h-5 p-[2px] px-1">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2c57ab" className="bi bi-facebook" viewBox="0 0 16 16">
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                            </svg>
                                        </div>
                                        <div>
                                            Theo dõi Trang
                                        </div>
                                    </div>
                                    <div className=" flex flex-row space-x-1 items-center bg-[#f5f6f7] text-[#4b4f56] text-xs h-5 p-[2px] px-1">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096"/>
                                            </svg>
                                        </div>
                                        <div>
                                            Chia sẻ
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row pt-7 mt-4 border-t-2 justify-between">
                        <img className="h-12"  src={group1208.src} alt="" />
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-youtube mx-5" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-row pt-7 mt-10 border-t-2 justify-between">
                        <div>
                            Coppyright ©2023 Benhvienhanoi. All Right Reserved.                 
                        </div>
                        <div>
                            Terms and Conditions |Privacy Policy
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
