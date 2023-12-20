import { Button, Form, Input, Modal, Space, Col } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { useState } from 'react';

export default function ViewRecord(props) {
  const { record } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCancel = () => {
    setShowModal(false);
    form.resetFields();
  };

  return (
    <>
      <Button title="Chi tiết" icon={<EyeOutlined />} primary size="small" onClick={handleShowModal} className="mr-2" />

      <Modal open={showModal} onCancel={handleCancel} title="Thông tin chi tiết vai trò" footer={null}>
        <Form name="view" layout="horizontal" form={form} initialValues={record} labelCol={{ xs: 4, lg: 6 }}>
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
              Quay lại
            </Button>
          </Space>
        </Form>
      </Modal>
    </>
  );
}
