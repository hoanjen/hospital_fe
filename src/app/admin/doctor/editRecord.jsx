import { Button, Form, Input, InputNumber, message, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import { editRecord } from "../services/doctor.service";
function EditRecord(props) {
  const { record, onReload } = props;
  const buttonStyle = {
    marginRight: "5px",
  };

  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const rules = [
    {
      required: true,
      message: "Bắt buộc!",
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
    
    const response = await editRecord(record.id ,values);
    if (response) {
      messageApi.open({
        type: "success",
        content: "Cập nhật thành công",
        duration: 4,
      });
      onReload();
      setShowModal(false);
    } else {
      messageApi.open({
        type: "error",
        content: "Cập nhật không thành công!",
        duration: 4,
      });
    }
  };

  return (
    <>
      <Button
        icon={<EditOutlined />}
        primary
        size="small"
        style={buttonStyle}
        onClick={handleShowModal}
      />

      <Modal
        open={showModal}
        onCancel={handleCancel}
        title="Chỉnh sửa bác sĩ"
        footer={null}
      >
        {contextHolder}

        <Form name="edit" form={form} onFinish={handleSubmit} initialValues={record}>
          <Form.Item label="Tên bác sĩ" name="name" rules={rules} >
          <Input />
          </Form.Item>

          <Form.Item label="Trình độ" name="degree" rules={rules}>
          <Input />
          </Form.Item>

          <Form.Item label="Năm kinh nghiệm" name="experience" rules={rules}>
          <InputNumber min={1} />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit">
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default EditRecord;
