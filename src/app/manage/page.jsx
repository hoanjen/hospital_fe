'use client';

import WelcomeBg from '../../image/welcome-bg.svg';
import { getCookie } from 'cookies-next';

export default function WelcomeSection(props) {
  const name = getCookie('user_name');
  return (
    <div className="flex mb-7.5 rounded-xl bg-white dark:bg-boxdark">
      <div className="flex flex-1 py-6">
        <div
          className="flex-grow p-7.5"
          style={{
            backgroundImage: `url(${WelcomeBg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right bottom',
            backgroundSize: 'auto 100%',
          }}
        >
          <div className="w-full text-black dark:text-white">
            <h2 className="text-2xl mb-4">
              Chào mừng trở lại, {name}<strong></strong>!
            </h2>
            <p className="text-dark my-2 text-lg">Hệ thống đặt lịch khám bệnh hàng đầu tại Việt Nam</p>
            <p className="italic">Đặt lịch dễ dàng, chăm sóc tận tâm cùng YouMed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
