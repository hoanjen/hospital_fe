'use client';

import { useEffect, useState } from 'react';
import React from 'react';
import { Button, Table, Flex, Spin, Space } from 'antd';
import DeleteRecord from './deleteRecord';
import EditRecord from './editRecord';
import CreateRecord from './createRecord';
import ViewRecord from './viewRecord';
import { getListDepartment } from '../services/department.service';

function DataTable() {
  const [listDepartments, setDepartments] = useState([]);
  const data = listDepartments?.data?.results;
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    limitPage: 1,
    totalPage: 1,
    current: 1,
    totalResult: 1,
  });
  console.log(pagination)
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const fetchApi = async (option, filter) => {
    try {
      const result = await getListDepartment(option, filter);
      setDepartments(result);
      setPagination({
        limitPage: result.data.limit,
        totalPage: result.data.totalPages,
        current: result.data.page,
        totalResult: result.data.totalResults,
      });
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

  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const handleTotal = (total, range) => {
    return (
      <span>
        Hiển thị từ&nbsp;
        <span strong>{range[1] * (range[0] - 1) + 1}</span> đến&nbsp;
        <span strong>{Math.min(range[1] * range[0], pagination.totalResult)}</span>
        &nbsp;trong tổng số&nbsp;
        <span strong>{total}</span> bản ghi
      </span>
    );
  };

  const columns = [
    {
      title: <div style={{ fontSize: '1rem' }}>STT</div>,
      dataIndex: 'index',
      key: 'index',
      width: 80,
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
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: <div style={{ fontSize: '1rem' }}>Hành động</div>,
      key: 'actions',
      render: (_, record) => {
        return (
          <>
            <ViewRecord record={record} />
            <EditRecord record={record} onReload={handleReload} departments={data}/>
            <DeleteRecord record={record} onReload={handleReload}/>
          </>
        );
      },
    },
  ];
  return (
    <>
      <Space
          style={{
            marginBottom: 16,
          }}
        >
          <CreateRecord onReload={handleReload}></CreateRecord>
          <Button onClick={clearFilters}>Xóa bộ lọc</Button>
          <Button onClick={clearAll}>Xóa bộ lọc và sắp xếp</Button>
        </Space>
      <Table
        onChange={handleChange}
        dataSource={data}
        columns={columns}
        rowKey={'id'}
        size="small"
        pagination={{
            current: pagination.current,
            total: pagination.totalResult,
            onChange: (page, pageSize) => {
              setPagination(prevPagination => ({
              ...prevPagination,
              current: page,
              limitPage: pageSize,
            }));
            const option = {};
            const filter = {};
            option['limit'] = pageSize;
            option['page'] = page;
            fetchApi(option, filter);
          },
          pageSizeOptions: ['10', '30', '50'],
          position: ['bottomRight'],
          hideOnSinglePage: false,
          showSizeChanger: true,
          showPrevNextJumpers: false,
          showLessItems: true,
          showTotal: () => handleTotal(pagination.totalResult, [pagination.current, pagination.limitPage]),
        }}
      />
    </>
  );
}

export default DataTable;
