import { Button, Form, Spin, Input, InputNumber, message, Modal, Flex, Select } from 'antd';
import Swal from 'sweetalert2';
import { EditOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { editRecord } from '../services/doctor.service';
import UploadImage from '../services/upload.service';

const { TextArea } = Input;

function EditRecord(props) {
  const { record, onReload, departments } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
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
        // Show error message
        Swal.fire({
          title: 'Thông báo!',
          text: response.response?.data.message,
          icon: 'error',
        });
      }
    } catch (error) {
      // Handle errors if any
      console.error('Error updating record:', error);
    }
  };
  return (
    <>
      <Button icon={<EditOutlined />} primary size="small" className="mx-1" onClick={handleShowModal} />

      <Modal open={showModal} onCancel={handleCancel} title="Cập nhật bác sĩ" footer={null}>
        {contextHolder}

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
          <Form.Item label="Ảnh đại diện" rules={rules}>
            <UploadImage onFileListChange={setNewFileListAvatar} url={record.image} />
          </Form.Item>

          <Form.Item label="Tên bác sĩ" name="name" rules={rules}>
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

          <Form.Item label="Trình độ" name="degree" rules={rules}>
            <Input />
          </Form.Item>

          <Form.Item label="Năm kinh nghiệm" name="experience" rules={rules}>
            <InputNumber min={1} />
          </Form.Item>

          <Form.Item label="Chi tiết" name="description" rules={rules}>
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
