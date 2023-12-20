'use client';

import React, { useEffect, useState } from 'react';
import { Button, Flex, Space, Spin, Table } from 'antd';
import { getListRole } from '../services/role.service';
import ViewRecord from './viewRecord';
import CreateRecord from './createRecord';
import EditRecord from './editRecord';
import DeleteRecord from './deleteRecord';

const DataTable = () => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limitPage, setLimitPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResult, setTotalResult] = useState(1);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const data = roles?.data?.results;

  const fetchApi = async (option, filter) => {
    try {
      const result = await getListRole(option, filter);
      setRoles(result);
      setCurrentPage(result.data.page);
      setTotalPage(result.data.totalPages);
      setTotalResult(result.data.totalResults);
      setLimitPage(result.data.limit);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const onReload = () => {
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
        <span strong>{Math.min(range[1] * range[0], totalResult)}</span>
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
      width: 60,
      render: (_, record, index) => <div style={{ fontSize: '1rem' }}>{index + 1}</div>,
    },
    {
      title: 'Tên quyền',
      dataIndex: 'roleName',
      key: 'roleName',
      sorter: (a, b) => a.roleName.localeCompare(b.roleName),
      sortOrder: sortedInfo.columnKey === 'roleName' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Index quyền',
      dataIndex: 'roleIndex',
      key: 'roleIndex',
      sorter: (a, b) => a.roleIndex.localeCompare(b.roleIndex),
      sortOrder: sortedInfo.columnKey === 'roleIndex' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: <div style={{ fontSize: '1rem' }}>Hành động</div>,
      key: 'actions',
      width: 120,
      render: (_, record) => {
        return (
          <>
            <ViewRecord record={record} onReload={onReload} />
            <EditRecord record={record} onReload={onReload} />
            <DeleteRecord record={record} onReload={onReload} />
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
        <CreateRecord onReload={onReload} roles={roles}></CreateRecord>
        <Button onClick={clearFilters}>Xóa bộ lọc</Button>
        <Button onClick={clearAll}>Xóa bộ lọc và sắp xếp</Button>
      </Space>
      <Table
        columns={columns}
        dataSource={data}
        onChange={handleChange}
        pagination={{
          current: currentPage,
          total: totalResult,
          onChange: (page, pageSize) => {
            setCurrentPage(page);
            setLimitPage(pageSize);
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
          showTotal: () => handleTotal(totalResult, [currentPage, limitPage]),
        }}
      />
    </>
  );
};

export default DataTable;
