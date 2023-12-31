'use client';

import { Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { cancelRecord } from '../../app/manage/services/health-form.service';
import Swal from 'sweetalert2';

function CancelHistoryOrder(props) {
  const { record, onReload } = props;

  const handleCancel = async () => {
    const result = await Swal.fire({
      title: 'Điền lý do?',
      text: 'Hủy bỏ lịch khám đã đặt này!',
      icon: 'warning',
      input: 'textarea',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here',
      },
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Gửi',
      cancelButtonText: 'Hủy',
    });
    if (result.isConfirmed) {
      const response = await cancelRecord(record.id, result.value);
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
  };

  return (
    <>
      <Button icon={<CloseCircleOutlined />} title="Hủy lịch" primary size="small" onClick={handleCancel} />
    </>
  );
}

export default CancelHistoryOrder;
