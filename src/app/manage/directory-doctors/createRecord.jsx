import { Button, Form, Image, Input, InputNumber, message, Modal, Upload, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { createRecord } from '../services/doctor.service';
export default function CreateRecord(props) {
  const { onReload } = props;
  const { TextArea } = Input;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
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
    console.log(values);
    const response = await createRecord(values);
    if (response) {
      messageApi.open({
        type: 'success',
        content: 'Thêm mới thành công',
        duration: 4,
      });
      onReload();
      setShowModal(false);
    } else {
      messageApi.open({
        type: 'error',
        content: 'Thêm mới không thành công!',
        duration: 4,
      });
    }
  };

  return (
    <>
      <Button className="mb-5" htmlType="submit" onClick={handleShowModal}>
        + Thêm mới
      </Button>
      <Modal open={showModal} onCancel={handleCancel} title="Thêm bác sĩ" footer={null}>
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
          {/* <Form.Item label="Chuyên khoa">
            <Select>
              <Select.Option value="1">Chuyên khoa 1</Select.Option>
            </Select>
          </Form.Item> */}

          <Form.Item label="Trình độ" name="degree">
            <Select>
              <Select.Option value="1">Trình độ 1</Select.Option>
            </Select>
          </Form.Item>
          {/* <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item> */}
          {/* <Form.Item label="RangePicker">
            <RangePicker />
          </Form.Item> */}
          <Form.Item label="Năm kinh nghiệm" name="experience">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Mô tả" name="description">
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
