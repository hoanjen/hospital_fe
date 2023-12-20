'use client';

import { React, useEffect, useState } from 'react';
import { Button, Table, Flex, Spin, Space } from 'antd';

import { getListDepartment } from '../services/department.service';
import { getListDoctor } from '../services/doctor.service';
import DeleteRecord from './deleteRecord';
import EditRecord from './editRecord';
import CreateRecord from './createRecord';
import ViewRecord from './viewRecord';

function DataTable() {
  const [doctors, setDoctors] = useState([]);
  const [listDepartments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    limitPage: 1,
    totalPage: 1,
    current: 1,
    totalResult: 1,
  });
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const data = doctors?.data?.results;
  const departments = listDepartments?.data?.results;
  console.log('departments: ', departments);

  const fetchData = async (option, filter) => {
    try {
      const [doctorResult, departmentResult] = await Promise.all([getListDoctor(option, filter), getListDepartment()]);
      console.log('doctor: ', doctorResult);
      console.log('department: ', departmentResult);

      setDoctors(doctorResult);
      setDepartments(departmentResult);

      setPagination({
        limitPage: doctorResult.data.limit,
        totalPage: doctorResult.data.totalPages,
        current: doctorResult.data.page,
        totalResult: doctorResult.data.totalResults,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleReload = () => {
    fetchData();
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
      title: <div style={{ fontSize: '0.9rem' }}>STT</div>,
      dataIndex: 'index',
      key: 'index',
      width: 60,
      render: (_, record, index) => <div style={{ fontSize: '1rem' }}>{index + 1}</div>,
    },
    {
      title: <div style={{ fontSize: '1rem' }}>Tên bác sĩ</div>,
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: <div style={{ fontSize: '1rem' }}>Chuyên khoa</div>,
      dataIndex: 'departmentId',
      key: 'departmentId',
      sorter: (a, b) => {
        const departmentA = departments.filter((item) => item.id == a.department);
        const departmentB = departments.filter((item) => item.id == b.department);
        return departmentA[0]?.name.localeCompare(departmentB[0]?.name);
      },
      sortOrder: sortedInfo.columnKey === 'departmentId' ? sortedInfo.order : null,
      render: (text, record) => {
        const departmentsFiltered = departments.filter((item) => item.id === record.department);
        const department = departmentsFiltered.length > 0 ? departmentsFiltered[0] : null;
        return <div style={{ fontSize: '1rem' }}>{department ? department.name : 'Chưa xét khoa'}</div>;
      },
    },
    {
      title: <div style={{ fontSize: '1rem' }}>Trình độ</div>,
      dataIndex: 'degree',
      key: 'degree',
      sorter: (a, b) => a.degree.localeCompare(b.degree),
      sortOrder: sortedInfo.columnKey === 'degree' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: <div style={{ fontSize: '1rem' }}>Năm kinh nghiệm</div>,
      dataIndex: 'experience',
      key: 'experience',
      sorter: (a, b) => parseInt(a.experience, 10) - parseInt(b.experience, 10),
      sortOrder: sortedInfo.columnKey === 'experience' ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: <div style={{ fontSize: '1rem' }}>Hành động</div>,
      key: 'actions',
      width: 120,
      render: (_, record) => {
        return (
          <>
            <ViewRecord record={record} departments={departments} />
            <EditRecord record={record} onReload={handleReload} departments={departments} />
            <DeleteRecord record={record} onReload={handleReload} />
          </>
        );
      },
    },
  ];
  return (
    <>
      <div>
        <Space
          style={{
            marginBottom: 16,
          }}
        >
          <CreateRecord onReload={handleReload} departments={departments}></CreateRecord>
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
              setPagination((prevPagination) => ({
                ...prevPagination,
                current: page,
                limitPage: pageSize,
              }));
              const option = {};
              const filter = {};
              option['limit'] = pageSize;
              option['page'] = page;
              fetchData(option, filter);
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
      </div>
    </>
  );
}

export default DataTable;
