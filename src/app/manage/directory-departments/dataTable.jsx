'use client';

import { useEffect, useState } from 'react';
import { Table } from 'antd';
import React from 'react';
import { Button } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
// import DeleteRecord from './deleteRecord';
// import EditRecord from './editRecord';
// import { getListDepartment } from '../services/department.service';

function DataTable(props) {
  const { departments, onReload } = props;
  const data = departments;
  console.log(data)
  // const [totalPages, setTotalPages] = useState(1);

  const buttonStyle = {
    marginRight: '5px',
  };
  const columns = [
    {
      title: <div style={{ fontSize: '1rem' }}>STT</div>,
      dataIndex: 'index',
      key: 'index',
      render: (_, record, index) => <div style={{ fontSize: '1rem' }}>{index + 1}</div>,
    },
    {
      title: <div style={{ fontSize: '1rem' }}>Tên khoa</div>,
      dataIndex: 'name',
      key: 'name',
      render: (text) => <div style={{ fontSize: '1rem' }}>{text}</div>,
    },
    // {
    //   title: <div style={{ fontSize: '1rem' }}>Chuyên khoa</div>,
    //   dataIndex: 'departmentId',
    //   key: 'departmentId',
    //   render: (text, record) => {
    //     const departmentsFiltered = departments.filter((item) => item.id === record.departments[0]);
    //     const department = departmentsFiltered.length > 0 ? departmentsFiltered[0] : null;
    //     return <div style={{ fontSize: '1rem' }}>{department ? department.name : 'Chưa xét khoa'}</div>;
    //   },
    // },
    // {
    //   title: <div style={{ fontSize: '1rem' }}>Trình độ</div>,
    //   dataIndex: 'degree',
    //   key: 'degree',
    //   render: (text) => <div style={{ fontSize: '1rem' }}>{text}</div>,
    // },
    // {
    //   title: <div style={{ fontSize: '1rem' }}>Năm kinh nghiệm</div>,
    //   dataIndex: 'experience',
    //   key: 'experience',
    //   render: (text) => <div style={{ fontSize: '1rem' }}>{text}</div>,
    // },

    // {
    //   title: <div style={{ fontSize: '1rem' }}>Hành động</div>,
    //   key: 'actions',
    //   render: (_, record) => {
    //     return (
    //       <>
    //         <Button icon={<EyeOutlined />} size="small" style={buttonStyle} />
    //         {/* <EditRecord record={record} onReload={onReload} />
    //         <DeleteRecord record={record} onReload={onReload} /> */}
    //       </>
    //     );
    //   },
    // },
  ];
  return (
    <>
      <Table
        dataSource={data}
        columns={columns}
        rowKey={'id'}
        size="small"
        // pagination={{
        //   pageSize: totalPages.doctors.data.limit,
        //   total: totalPages,
        //   onChange: (page) => page = doctors.data.page,
        // }}
      />
    </>
  );
}

export default DataTable;
