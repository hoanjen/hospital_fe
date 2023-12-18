import { Button, Form, Image, Input, InputNumber, message, Modal, Upload, Select, DatePicker, Space } from 'antd';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { createRecord } from '../services/user.service';

export default function CreateRecord(props) {
  const { onReload } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

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
      <Button onClick={handleShowModal}>+ Thêm mới</Button>
      <Modal open={showModal} onCancel={handleCancel} title="Thêm mới người dùng" footer={null}>
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
          <Form.Item label="Địa chỉ email" name="email">
            <Input />
          </Form.Item>

          <Form.Item label="Họ và tên" name="fullName">
            <Input />
          </Form.Item>

          <Form.Item label="Mật khẩu" name="password">
            <Input type="password" />
          </Form.Item>

          <Form.Item label="Ngày sinh" name="dateOfBirth">
            <DatePicker />
          </Form.Item>

          <Form.Item label="Giới tính" name="gender">
            <Select defaultValue="Nam">
              <Select.Option key="Nam" value="Nam">
                Nam
              </Select.Option>
              <Select.Option key="Nữ" value="Nữ">
                Nữ
              </Select.Option>
              <Select.Option key="Khác" value="Khác">
                Khác
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Nghề nghiệp" name="job">
            <Input />
          </Form.Item>

          <Form.Item label="Số điện thoại" name="phoneNumber">
            <Input />
          </Form.Item>

          <Form.Item label="Số CMND/CCCD" name="cmndNumber">
            <Input />
          </Form.Item>

          <Form.Item label="Số thẻ BHYT" name="codeInsurance">
            <Input />
          </Form.Item>

          <Form.Item label="Dân tộc" name="nation">
            <Input />
          </Form.Item>

          <Space>
            <Button onClick={handleCancel} className="bg-meta-6">
              Hủy
            </Button>
            <Button htmlType="submit" className="bg-secondary">
              Thêm mới
            </Button>
          </Space>
        </Form>
      </Modal>
    </>
  );
}
