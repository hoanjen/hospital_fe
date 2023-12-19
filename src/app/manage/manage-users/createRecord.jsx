import { Button, Form, Input, message, Modal, Select, DatePicker, Space, Row, Col, Checkbox } from 'antd';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { createRecord } from '../services/user.service';
import UploadImage from '../services/upload.service';

export default function CreateRecord(props) {
  const { onReload, roles } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [newFileListAvatar, setNewFileListAvatar] = useState([]);
  const [newFileListCmnd, setNewFileListCmnd] = useState([]);
  const [newFileListInsurance, setNewFileListInsurance] = useState([]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    form.resetFields();
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();
    if (!values.gender) {
      values.gender = 'Nam';
    }
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
      formData.append('avatar', newFileListAvatar[0].originFileObj);
    }
    if (newFileListCmnd.length > 0) {
      formData.append('cmndImg', newFileListCmnd[0].originFileObj);
    }
    if (newFileListInsurance.length > 0) {
      formData.append('insuranceImg', newFileListInsurance[0].originFileObj);
    }
    const response = await createRecord(formData);
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

      <Modal
        open={showModal}
        onCancel={handleCancel}
        title="Thêm mới người dùng"
        footer={null}
        style={{ minWidth: 800 }}
      >
        {contextHolder}
        <Form name="create" labelCol={{ xs: 4, lg: 6 }} layout="horizontal" form={form} onFinish={handleSubmit}>
          <Row gutter={[16, 0]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Địa chỉ email" name="email">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Họ và tên" name="fullName">
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 0]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Mật khẩu" name="password">
                <Input type="password" />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Ngày sinh" name="dateOfBirth">
                <DatePicker />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 0]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
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
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Nghề nghiệp" name="job">
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 0]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Số điện thoại" name="phoneNumber">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Dân tộc" name="nation">
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 0]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="CMND/CCCD" name="cmndNumber">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Số thẻ BHYT" name="codeInsurance">
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 0]}>
            <Col xs={{ span: 24 }} lg={{ span: 24 }}>
              <Form.Item label="Vai trò" name="roles">
                <Checkbox.Group options={roles?.map((role) => ({ label: role?.roleName, value: role?.id }))} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[2, 0]}>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <Form.Item label="Ảnh đại diện" labelCol={{ span: 12 }} wrapperCol={{ span: 12 }}>
                <UploadImage onFileListChange={setNewFileListAvatar} />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <Form.Item label="CMND/CCCD" labelCol={{ span: 12 }} wrapperCol={{ span: 12 }}>
                <UploadImage onFileListChange={setNewFileListCmnd} />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <Form.Item label="Thẻ BHYT" labelCol={{ span: 12 }} wrapperCol={{ span: 12 }}>
                <UploadImage onFileListChange={setNewFileListInsurance} />
              </Form.Item>
            </Col>
          </Row>

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
