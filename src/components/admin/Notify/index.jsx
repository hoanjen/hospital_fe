'use client';

import './style.scss';
import { Button, Dropdown } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
export default function Notify() {
  const router = useRouter();
  const signout = () => {
    console.log(12333333333333333333333);
    deleteCookie('user_avatar');
    deleteCookie('user_name');
    deleteCookie('user_id');
    deleteCookie('access_token');
    toast.success('Đăng xuất thành công');
    router.push('/dashboard');
  };
  const items = [
    {
      label: (
        <div className="notify__item">
          <div className="notify__item--icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-arrow-left-square"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
              />
            </svg>
          </div>

          <div className="notify__item--content flex items-center">
            <div
              onClick={() => {
                router.push('/dashboard');
              }}
              className="notify__item--title"
            >
              Về Trang Khách Hàng
            </div>
          </div>
        </div>
      ),
      key: '1',
    },
    {
      label: (
        <div className="notify__item">
          <div className="notify__item--icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-arrow-bar-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"
              />
            </svg>
          </div>

          <div className="notify__item--content flex items-center">
            <div
              onClick={() => {
                signout();
              }}
              className="notify__item--title"
            >
              Đăng xuất
            </div>
          </div>
        </div>
      ),
      key: '2',
    },
  ];
  return (
    <>
      <Dropdown
        menu={{ items }}
        trigger={['click']}
        dropdownRender={(menu) => (
          <>
            <div className="notify__dropdown">
              <div className="notify__body">{menu}</div>
            </div>
          </>
        )}
      >
        <Button
          className="mt-5"
          type="text"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-gear"
              viewBox="0 0 16 16"
            >
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
            </svg>
          }
        />
      </Dropdown>
    </>
  );
}
