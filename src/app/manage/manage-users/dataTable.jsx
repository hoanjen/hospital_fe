'use client';

import React, { useEffect, useState } from 'react';
import { Button, Flex, Space, Spin, Table } from 'antd';
import { getListUser } from '../services/user.service';
import ViewRecord from './viewRecord';
import CreateRecord from './createRecord';
import EditRecord from './editRecord';
import DeleteRecord from './deleteRecord';
import { getListRole } from '../services/role.service';

const DataTable = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limitPage, setLimitPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResult, setTotalResult] = useState(1);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});


  const data = users?.data?.results;

  const fetchApi = async (option, filter) => {
    try {
      const result = await getListUser(option, filter);
      setUsers(result);
      setCurrentPage(result.data.page);
      setTotalPage(result.data.totalPages);
      setTotalResult(result.data.totalResults);
      setLimitPage(result.data.limit);
      const result_roles = await getListRole();
      setRoles(result_roles.data?.results);
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

  const isValidDate = (dateString) => {
    const date = new Date(dateString);
    return !isNaN(date) && date !== 'Invalid Date';
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
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.localeCompare(b.email),
      sortOrder: sortedInfo.columnKey === 'email' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Họ và tên',
      dataIndex: 'fullName',
      key: 'fullName',
      sorter: (a, b) => a.fullName.localeCompare(b.fullName),
      sortOrder: sortedInfo.columnKey === 'fullName' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'dateOfBirth',
      key: 'dateOfBirth',
      sorter: (a, b) => {
        const dateA = isValidDate(a.dateOfBirth) ? new Date(a.dateOfBirth) : null;
        const dateB = isValidDate(b.dateOfBirth) ? new Date(b.dateOfBirth) : null;
        if (dateA && dateB) {
          return dateA - dateB;
        } else if (dateA) {
          return -1;
        } else if (dateB) {
          return 1;
        } else {
          return 0;
        }
      },
      sortOrder: sortedInfo.columnKey === 'dateOfBirth' ? sortedInfo.order : null,
      ellipsis: true,
      render: (text, record) => {
        const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
        return new Date(text).toLocaleDateString('en-GB', options);
      },
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      key: 'gender',
      width: 120,
      sorter: (a, b) => a.gender.localeCompare(b.gender),
      sortOrder: sortedInfo.columnKey === 'gender' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
      sorter: (a, b) => a.address?.localeCompare(b.address),
      sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: <div style={{ fontSize: '1rem' }}>Hành động</div>,
      key: 'actions',
      width: 120,
      render: (_, record) => {
        return (
          <>
            <ViewRecord record={record} onReload={onReload} roles={roles} />
            <EditRecord record={record} onReload={onReload} roles={roles} />
            <DeleteRecord record={record} onReload={onReload} roles={roles} />
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
