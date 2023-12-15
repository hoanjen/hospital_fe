"use client";

import { Table } from "antd";
import React from "react";
import { Button} from "antd";
import { EditOutlined , EyeOutlined} from "@ant-design/icons";
import DeleteRecord from "./deleteRecord";
import EditRecord from "./editRecord";
function DataTable(props) {
  const { doctors, onReload } = props;
  const data = doctors.data.results;
  const buttonStyle = {
    marginRight: '5px',
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      render: (_, record, index) => index + 1,
    },
    {
      title: "Tên bác sĩ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Trình độ",
      dataIndex: "degree",
      key: "degree",
    },
    {
      title: "Năm kinh nghiệm",
      dataIndex: "experience",
      key: "experience",
    },
    
    {
      title: "Hành động",
      key: "actions",
      render: (_, record) => {
        return (
          <>
            <Button icon={<EyeOutlined />} size="small" style={buttonStyle}/>
            <EditRecord record={record} onReload={onReload}/>
            <DeleteRecord record={record} onReload={onReload}/>
          </>
        );
      },
    },
  ];
  return (
    <>
      <Table dataSource={data} columns={columns} rowKey={"id"}  />
    </>
  );
}

export default DataTable;
