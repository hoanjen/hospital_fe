import { Button, Form, Image, Input, InputNumber, message, Modal, Upload, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { createRecord } from '../services/doctor.service';
import Swal from 'sweetalert2';

export default function CreateRecord(props) {
  const { onReload, departments } = props;
  const { TextArea } = Input;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
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
    const response = await createRecord(values);
    if (response.data?.code === 201) {
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
          <Form.Item label="Tên bác sĩ" name="name">
            <Input />
          </Form.Item>

          <Form.Item label="Chuyên khoa" name="department">
            <Select>
              {departments?.map((department) => (
                <Select.Option key={department.id} value={department.id}>
                  {department ? department.name : 'Chưa xét khoa'}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Trình độ" name="degree">
            <Input />
          </Form.Item>

          <Form.Item label="Năm kinh nghiệm" name="experience">
            <InputNumber />
          </Form.Item>

          <Form.Item label="Chi tiết" name="description">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item label="Ảnh đại diện" valuePropName="fileList" name="image">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Ảnh</div>
              </div>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit">Thêm mới</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
