import { Button, Form, Input, Modal, Space, Col } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { editRecord } from '../services/role.service';
import Swal from 'sweetalert2';

export default function EditRecord(props) {
  const { record, onReload } = props;
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
    const response = await editRecord(record.id, values);
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
  };

  return (
    <>
      <Button
        title="Cập nhật"
        icon={<EditOutlined />}
        primary
        size="small"
        onClick={handleShowModal}
        className="mr-2"
      />

      <Modal open={showModal} onCancel={handleCancel} title="Cập vai trò hệ thống" footer={null}>
        <Form
          name="edit"
          layout="horizontal"
          form={form}
          onFinish={handleSubmit}
          initialValues={record}
          labelCol={{ xs: 4, lg: 6 }}
        >
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
              Cập nhật
            </Button>
          </Space>
        </Form>
      </Modal>
    </>
  );
}
