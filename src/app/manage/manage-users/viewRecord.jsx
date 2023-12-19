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
  DatePicker,
  Space,
  Row,
  Col,
  Checkbox,
} from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/vi';
import UploadImage from '../services/upload.service';

function ViewRecord(props) {
  const { record, roles } = props;

  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

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

  return (
    <>
      <Button title="Chi tiết" icon={<EyeOutlined />} primary size="small" onClick={handleShowModal} className="mr-2" />

      <Modal
        open={showModal}
        onCancel={handleCancel}
        title="Thông tin chi tiết người dùng"
        footer={null}
        style={{ minWidth: 800 }}
      >
        {contextHolder}
        <Form
          name="view"
          labelCol={{ xs: 4, lg: 6 }}
          layout="horizontal"
          form={form}
          initialValues={{
            ...record,
            dateOfBirth: record.dateOfBirth ? moment(record.dateOfBirth) : null,
          }}
        >
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
                <DatePicker format="YYYY-MM-DD" />
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
                <UploadImage url={record.avatar} />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <Form.Item label="CMND/CCCD" labelCol={{ span: 12 }} wrapperCol={{ span: 12 }}>
                <UploadImage url={record.cmndImg} />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <Form.Item label="Thẻ BHYT" labelCol={{ span: 12 }} wrapperCol={{ span: 12 }}>
                <UploadImage url={record.insuranceImg} />
              </Form.Item>
            </Col>
          </Row>

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

export default ViewRecord;
