import { Button, Form, Image, Input, InputNumber, message, Modal, Upload, Select } from 'antd';
import { EditOutlined, UploadOutlined, DeleteOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { editRecord } from '../services/doctor.service';
import { getListDepartment } from '../services/department.service';
import Swal from 'sweetalert2';
const { TextArea } = Input;

function EditRecord(props) {
  const { record, onReload, departments } = props;

  const buttonStyle = {
    marginRight: '5px',
  };

  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [deleteImage, setDeleteImage] = useState(false);
  const [image, setImage] = useState(record.image);

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

  const handleDeleteImage = () => {
    // Xử lý khi người dùng nhấn nút "Xóa ảnh"
    setImage(null);
    setDeleteImage(true);
    onReload();
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
          <Form.Item label="Ảnh đại diện" name="image" rules={rules}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Image
                width="200px"
                height="250px"
                src={deleteImage ? null : image}
                style={{ border: '2px solid #ddd', borderRadius: '8px', objectFit: 'cover' }}
              />
              {!deleteImage && (
                <CloseCircleOutlined
                  onClick={handleDeleteImage}
                  style={{ position: 'absolute', top: '5px', right: '5px', boder: '1px solid #ddd' }}
                />
              )}
            </div>
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
            <Button htmlType="submit">Cập nhật</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default EditRecord;
