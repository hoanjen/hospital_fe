import { Button, Form, Image, Input, InputNumber, message, Modal, Upload, Select, DatePicker, Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { editRecord } from '../services/user.service';
import Swal from 'sweetalert2';
import moment from 'moment';
import 'moment/locale/vi';

function EditRecord(props) {
  const { record, onReload } = props;

  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [deleteImage, setDeleteImage] = useState(false);
  const [image, setImage] = useState(record.image);

  useEffect(() => {
    moment.locale('vi');
  }, []);

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
      <Button
        title="Cập nhật"
        icon={<EditOutlined />}
        primary
        size="small"
        onClick={handleShowModal}
        className="mr-2"
      />

      <Modal open={showModal} onCancel={handleCancel} title="Cập nhật người dùng" footer={null}>
        {contextHolder}
        <Form
          name="edit"
          form={form}
          onFinish={handleSubmit}
          initialValues={{
            ...record,
            dateOfBirth: record.dateOfBirth ? moment(record.dateOfBirth) : null,
          }}
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
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
            <DatePicker format="YYYY-MM-DD" />
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
            <Button onClick={handleCancel} className='bg-meta-6'>Hủy</Button>
            <Button htmlType="submit" className='bg-secondary'>Cập nhật</Button>
          </Space>
        </Form>
      </Modal>
    </>
  );
}

export default EditRecord;
