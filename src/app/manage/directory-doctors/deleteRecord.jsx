'use client';

import { Button, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { deleteRecord } from '../services/doctor.service';
function DeleteRecord(props) {
  const { record, onReload } = props;
  console.log(record)
  const handleDelete = async () => {
    const response = await deleteRecord(record.id);
    if (response) {
      onReload();
      alert('Xóa thành công');
    } else {
      alert('Xóa không thành công');
    }
    console.log('id: ', record.id);
  };
  return (
    <>
      <Popconfirm
        title="Delete"
        description="Bạn có chắc chắn muốn xóa không?"
        onConfirm={handleDelete}
        okType="danger"
      >
        <Button icon={<DeleteOutlined />} danger size="small" />
      </Popconfirm>
    </>
  );
}

export default DeleteRecord;