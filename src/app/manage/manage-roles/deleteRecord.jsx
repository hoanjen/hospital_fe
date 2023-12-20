import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
import { deleteRecord } from '../services/role.service';

export default function DeleteRecord(props) {
  const { record, onReload } = props;

  const handleDelete = async () => {
    Swal.fire({
      title: 'Bạn có chắc chắn?',
      text: 'Muốn xóa vai trò này!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteRecord(record.id);
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
      <Button title="Xóa" icon={<DeleteOutlined />} primary size="small" onClick={handleDelete} />
    </>
  );
}
