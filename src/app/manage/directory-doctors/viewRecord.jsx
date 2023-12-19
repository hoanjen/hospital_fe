import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

function ViewRecord(){
  const [open, setOpen] = useState(false);
  return(
    <>
      <Button icon={<EyeOutlined />} size="small" onClick={() => setOpen(true)}/>
      <Modal
        
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={600}
        footer={null}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  )
}

export default ViewRecord;