import { Button, Form, Input, Modal, Space, Col } from 'antd';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { createRecord } from '../services/role.service';

export default function CreateRecord(props) {
  const { onReload } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();

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
      <Button onClick={handleShowModal}>+ Thêm mới</Button>

      <Modal open={showModal} onCancel={handleCancel} title="Thêm mới vai trò hệ thống" footer={null}>
        <Form name="create" layout="horizontal" form={form} onFinish={handleSubmit} labelCol={{ xs: 4, lg: 6 }}>
          <Col>
            <Form.Item label="Tên quyền" name="roleName">
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="Index quyền" name="roleIndex">
              <Input />
            </Form.Item>
          </Col>
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
