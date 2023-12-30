'use client';

import { Button, Popconfirm } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { acceptRecord } from '../services/health-form.service';
import Swal from 'sweetalert2';

function AcceptRecord(props) {
  const { record, onReload } = props;

  const handleAccept = async () => {
    Swal.fire({
      title: 'Bạn có chắc chắn?',
      text: 'Lịch hẹn khám đủ điều kiện!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý',
      cancelButtonText: 'Hủy',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await acceptRecord(record.id);
        if (response.data?.code === 200) {
          Swal.fire({
            title: 'Thông báo!',
            text: response.data?.message,
            icon: 'success',
          });
          onReload();
        } else {
          Swal.fire({
            title: 'Thông báo!',
            text: response.response?.data.message,
            icon: 'error',
          });
        }
      }
    });
  };

  return (
    <>
      <Button
        className="mr-2"
        icon={<CheckCircleOutlined />}
        title="Chấp nhận"
        primary
        size="small"
        onClick={handleAccept}
      />
    </>
  );
}

export default AcceptRecord;
