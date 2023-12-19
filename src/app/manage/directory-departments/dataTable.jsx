'use client';

import { useEffect, useState } from 'react';
import React from 'react';
import { Table, Flex, Spin, Button } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import DeleteRecord from './deleteRecord';
import EditRecord from './editRecord';
import { getListDepartment } from '../services/department.service';

function DataTable() {
  const [departments, setDepartments] = useState([]);
  const data = departments;
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    try {
      const result = await getListDepartment();
      setDepartments(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleReload = () => {
    fetchApi();
  };

  if (loading) {
    return (
      <Flex gap="small" vertical>
        <Spin size="large" />
      </Flex>
    );
  }
  const columns = [
    {
      title: <div style={{ fontSize: '1rem' }}>STT</div>,
      dataIndex: 'index',
      key: 'index',
      width: 50,
      render: (_, record, index) => <div style={{ fontSize: '1rem' }}>{index + 1}</div>,
    },
    {
      title: <div style={{ fontSize: '1rem' }}>Ảnh</div>,
      dataIndex: 'image',
      key: 'image',
      render: (image) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={image}
            alt="department"
            style={{
              width: '50px',
              height: '50px',
              border: '1px solid #fff', 
              borderRadius: '50%', 
              marginRight: '8px', 
            }}
          />
        </div>
      ),
    },
    {
      title: <div style={{ fontSize: '1rem' }}>Tên khoa</div>,
      dataIndex: 'name',
      key: 'name',
      render: (text) => <div style={{ fontSize: '1rem' }}>{text}</div>,
    },
    {
      title: <div style={{ fontSize: '1rem' }}>Hành động</div>,
      key: 'actions',
      render: (_, record) => {
        return (
          <>
            
            {/* <EditRecord record={record} onReload={handleReload} departments={departments} /> */}
            <DeleteRecord record={record} onReload={handleReload}/>
          </>
        );
      },
    },
  ];
  return (
    <>
      <Table
        dataSource={data}
        columns={columns}
        rowKey={'id'}
        size="small"
      />
    </>
  );
}

export default DataTable;
