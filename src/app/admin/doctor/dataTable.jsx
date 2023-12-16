"use client";

import { useEffect, useState } from "react";
import { Table } from "antd";
import React from "react";
import { Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import DeleteRecord from "./deleteRecord";
import EditRecord from "./editRecord";
import { getListDepartment } from "../services/department.service.jsx";
function DataTable(props) {
  const { doctors, onReload } = props;
  const data = doctors.data.results;
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const result = await getListDepartment();
        console.log(result);
        setDepartments(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  console.log(departments);
  // const [dataDepartment] = departments.data.results;

  const buttonStyle = {
    marginRight: "5px",
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
      title: "Chuyên khoa",
      dataIndex: "departmentId",
      key: "departmentId",
      render: (text, record) => {
        const departmentsFiltered = departments.filter((item) => item.id === record.departments[0]);
        const department = departmentsFiltered.length > 0 ? departmentsFiltered[0] : null;
        return department ? department.name : "Chưa xét khoa";

      },
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
            <Button icon={<EyeOutlined />} size="small" style={buttonStyle} />
            <EditRecord record={record} onReload={onReload} />
            <DeleteRecord record={record} onReload={onReload} />
          </>
        );
      },
    },
  ];
  return (
    <>
      <Table dataSource={data} columns={columns} rowKey={"id"} />
    </>
  );
}

export default DataTable;
