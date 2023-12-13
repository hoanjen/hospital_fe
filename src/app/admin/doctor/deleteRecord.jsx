'use client'

import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteRecord } from "../services/doctor.service.jsx";
function DeleteRecord(props) {
  const { record, onReload } = props;
  
  const handleDelete = async () => {
    const response = await deleteRecord(record.id);
    if (response) {
      onReload();
      alert("Xóa thành công");
    } else {
      alert("Xóa không thành công");
    }
    console.log("id: ",record.id);
  };
  return (
    <div>
      <Popconfirm
        title="Delete"
        description="Bạn có chắc chắn muốn xóa không?"
        onConfirm={handleDelete}
        okType="danger"
      >
        <Button icon={<DeleteOutlined />} danger size="small" />
      </Popconfirm>
    </div>
  );
}

export default DeleteRecord;
