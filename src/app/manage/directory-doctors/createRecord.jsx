import { Button, Form, Input, InputNumber, message, Modal, Select, Space } from 'antd';
import Swal from 'sweetalert2';

import { useState } from 'react';
import { createRecord } from '../services/doctor.service';
import UploadImage from '../services/upload.service';


export default function CreateRecord(props) {
  const { onReload, departments } = props;
  const { TextArea } = Input;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [newFileListAvatar, setNewFileListAvatar] = useState([]);
  const rules = [
    {
      required: true,
      message: 'Trường này là bắt buộc !',
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
      formData.append('avatar', newFileListAvatar[0].originFileObj);
    }
    const response = await createRecord(formData);
    if (response.data?.code === 201) {
      Swal.fire({
        title: 'Thông báo!',
        text: response.data?.message,
        icon: 'success',
      });
      onReload();
      setShowModal(false);
      form.resetFields();
    } else {
      Swal.fire({
        title: 'Thông báo!',
        text: response.response?.data.message,
        icon: 'error',
      });
    }
  };

  return (
    <>
      <Button htmlType="submit" onClick={handleShowModal}>
        + Thêm mới
      </Button>
      <Modal open={showModal} onCancel={handleCancel} title="Thêm mới bác sĩ" footer={null}>
        {contextHolder}
        <Form
          name="create"
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
          form={form}
          onFinish={handleSubmit}
        >
          <Form.Item label="Tên bác sĩ" name="name" rules={rules}>
            <Input />
          </Form.Item>

          <Form.Item label="Chuyên khoa" name="department" rules={rules}>
            <Select>
              {departments?.map((department) => (
                <Select.Option key={department.id} value={department.id}>
                  {department ? department.name : 'Chưa xét khoa'}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Trình độ" name="degree" rules={rules}>
            <Input />
          </Form.Item>

          <Form.Item label="Năm kinh nghiệm" name="experience" rules={rules}>
            <InputNumber />
          </Form.Item>

          <Form.Item label="Chi tiết" name="description">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item label="Ảnh đại diện" 
          >
            <UploadImage onFileListChange={setNewFileListAvatar} />
          </Form.Item>

          <Form.Item >
            <Space style={{ float: 'right', width: '100%' }}>
              <Button onClick={handleCancel} className="bg-meta-6">
                Hủy
              </Button>
              <Button htmlType="submit" className="bg-secondary">
                Thêm mới
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
