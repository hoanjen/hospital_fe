import React, { useState } from 'react';
import { 
  Button,
  Form,
  Image,
  Input,
  InputNumber,
  Modal,
  Upload,
  Select,
  Space,
} from 'antd';

const { TextArea } = Input;
import { EyeOutlined } from '@ant-design/icons';

function ViewRecord(props){
  const {record} = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCancel = () => {
    setShowModal(false);
    form.resetFields();
  };

  return(
    <>
      <Button title="Chi tiết" icon={<EyeOutlined />} primary size="small" onClick={handleShowModal} />
      <Modal
        title="Thông tin chuyên khoa"
        centered
        open={showModal}
        onCancel={handleCancel}
        width={600}
        footer={null}
      >
        <Form
          name="view"
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          form={form}
          initialValues={{
            ...record
          }}
        >
          <Form.Item label="Ảnh chuyên khoa">
            <Image
              width={200}
              src={record.image}
            />
          </Form.Item>

          <Form.Item label="Tên chuyên khoa" name="name">
            <Input />
          </Form.Item>

          <Form.Item label="Mô tả" name="description">
            <TextArea showCount maxLength={1000} placeholder="can resize" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default ViewRecord;