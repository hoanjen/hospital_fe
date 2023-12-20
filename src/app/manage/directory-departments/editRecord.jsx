import { Button, Form, Spin, Input, Modal, Select } from 'antd';
import Swal from 'sweetalert2';
import { EditOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { editRecord } from '../services/department.service';
import UploadImage from '../services/upload.service';
const { TextArea } = Input;

function EditRecord(props) {
  const { record, onReload, departments } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [newFileListAvatar, setNewFileListAvatar] = useState([]);
  const rules = [
    {
      required: true,
      message: 'Bắt buộc!',
    },
  ];

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCancel = () => {
    setShowModal(false);
    form.resetFields();
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();
    for (const key in values) {
      if (values.hasOwnProperty(key) && values[key]) {
        const value = values[key];
        if (Array.isArray(value)) {
          value.forEach((val) => {
            formData.append(`${key}[]`, val);
          });
        } else {
          formData.append(key, value);
        }
      }
    }
    if (newFileListAvatar.length > 0) {
      formData.append('image', newFileListAvatar[0].originFileObj);
    }
  
    try {
      const response = await editRecord(record.id, formData);
      if (response.data?.code === 200) {
        Swal.fire({
          title: 'Thông báo!',
          text: response.data?.message,
          icon: 'success',
        });
        onReload();
        setShowModal(false);
      } else {
        Swal.fire({
          title: 'Thông báo!',
          text: response.response?.data.message,
          icon: 'error',
        });
      }
    } catch (error) {
      console.error('Error updating record:', error);
    }
  };
  return (
    <>
      <Button icon={<EditOutlined />} primary size="small" className="mx-1" onClick={handleShowModal} />

      <Modal open={showModal} onCancel={handleCancel} title="Cập nhật chuyên khoa" footer={null}>

        <Form
          name="edit"
          form={form}
          onFinish={handleSubmit}
          initialValues={record}
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
        >
          <Form.Item label="Ảnh chuyên khoa" rules={rules}>
            <UploadImage onFileListChange={setNewFileListAvatar} url={record.image} />
          </Form.Item>
          <Form.Item label="Tên chuyên khoa" name="name">
            <Select>
              {departments?.map((department) => (
                <Select.Option key={department.id} value={department.id}>
                  {department ? department.name : 'Chưa xét khoa'}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Mô tả" name="description" rules={rules}>
            <TextArea showCount maxLength={1000} placeholder="can resize" />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" className="bg-secondary">Cập nhật</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default EditRecord;
