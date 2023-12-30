import { Button, Form, Input, Modal, Space, Row, Col } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import moment from 'moment';
import TextArea from 'antd/es/input/TextArea';

function ViewRecord(props) {
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

      <Modal open={showModal} onCancel={handleCancel} title="Chi tiết lịch hẹn" footer={null} style={{ minWidth: 800 }}>
        <Form
          name="view"
          labelCol={{ xs: 4, lg: 6 }}
          layout="horizontal"
          form={form}
          initialValues={{
            ...record,
          }}
        >
          <Row gutter={[16, 0]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Địa chỉ email">
                <Input value={record.user.email} disabled />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Họ và tên">
                <Input value={record.user.fullName} disabled />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 0]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Giới tính">
                <Input value={record.user.gender} disabled />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Ngày sinh">
                <Input value={moment(record.user.dateOfBirth).format('DD-MM-YYYY')} disabled />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 0]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Số điện thoại">
                <Input value={record.user.phoneNumber} disabled />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Nghề nghiệp">
                <Input value={record.user.job} disabled />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 0]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Địa chỉ">
                <Input value={record.user.address} disabled />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Dân tộc">
                <Input value={record.user.nation} disabled />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 0]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="CMND/CCCD">
                <Input value={record.user.cmndNumber} disabled />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Số thẻ BHYT">
                <Input value={record.user.codeInsurance} disabled />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 0]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Bác sĩ">
                <Input value={record.doctor.name} disabled />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Chuyên khoa">
                <Input value={record.department} disabled />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 0]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Thời gian">
                <Input
                  value={
                    record.numberConfirm
                      ? 'Stt ' +
                        record.numberConfirm +
                        ' ca ' +
                        record.workingTime.startTime +
                        '-' +
                        record.workingTime.endTime +
                        ' ngày ' +
                        moment(record.workingTime.workingPlan.date).format('DD-MM-YYYY')
                      : 'Ca ' +
                        record.workingTime.startTime +
                        '-' +
                        record.workingTime.endTime +
                        ' ngày ' +
                        moment(record.workingTime.workingPlan.date).format('DD-MM-YYYY')
                  }
                  disabled
                />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Phòng khám">
                <Input value={record.workingTime.workingPlan.place} disabled />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 0]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item label="Ghi chú">
                <TextArea rows={2} value={record.note} disabled />
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
