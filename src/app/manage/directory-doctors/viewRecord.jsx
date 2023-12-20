import React, { useState } from 'react';
import { 
  Button,
  Form,
  Image,
  Input,
  InputNumber,
  message,
  Modal,
  Upload,
  Select,
  Space,
  Row,
  Col,
  Checkbox, 
  AutoComplete
} from 'antd';

const { TextArea } = Input;
import { EyeOutlined } from '@ant-design/icons';

function ViewRecord(props){
  const {record, onReload, departments} = props;
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
        title="Thông tin bác sĩ"
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
          <Form.Item label="Ảnh đại diện">
            <Image
              width={200}
              src={record.image}
            />
          </Form.Item>

          <Form.Item label="Tên bác sĩ" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Chuyên khoa" name="department">
            <Select>
              {departments?.map((department) => (
                <Select.Option key={department.id} value={department.id} disabled>
                  {department ? department.name : 'Chưa xét khoa'}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Trình độ" name="degree">
            <Input />
          </Form.Item>

          <Form.Item label="Năm kinh nghiệm" name="experience">
            <InputNumber min={1} />
          </Form.Item>

          <Form.Item label="Chi tiết" name="description">
            <TextArea showCount maxLength={1000} placeholder="can resize" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default ViewRecord;