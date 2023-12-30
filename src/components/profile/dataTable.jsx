'use client';

import { useEffect, useState } from 'react';
import React from 'react';
import { Button, Table, Flex, Spin, Space, DatePicker, Select } from 'antd';
const { RangePicker } = DatePicker;
import { getListHealthForm } from '../../app/manage/services/health-form.service';
import CancelHistoryOrder from './cancelHistoryOrder';
import DetailHistoryOrder from './detailHistoryOrder';
import moment from 'moment';
import { useParams } from 'next/navigation';

function DataTable(props) {
  const { tab, departments } = props;
  const [listHealthForms, setHealthForms] = useState([]);
  const [dateRange, setDateRange] = useState(null);
  const [departmentId, setDepartmentId] = useState(null);
  const [shouldReload, setShouldReload] = useState(false);
  const [sortedInfo, setSortedInfo] = useState({});
  const data = listHealthForms?.data?.results;
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    limitPage: 1,
    totalPage: 1,
    current: 1,
    totalResult: 1,
  });
  const path = useParams();

  const fetchApi = async (option, filter) => {
    try {
      setLoading(true);
      filter['userId'] = path.profileId;
      switch (tab) {
        case '2':
          filter['status'] = 'pending';
          break;
        case '3':
          filter['status'] = 'accepted';
          break;
        case '4':
          filter['status'] = 'rejected';
          break;
        case '5':
          filter['status'] = 'canceled';
          break;
        default:
          break;
      }
      if (dateRange) {
        const startTime = new Date(dateRange[0]);
        const endTime = new Date(dateRange[1]);
        filter['dateOrder'] = moment(startTime).format('YYYY-MM-DD') + '/' + moment(endTime).format('YYYY-MM-DD');
      } else {
        filter['dateOrder'] = moment(new Date()).format('YYYY-MM-DD') + '/' + moment(new Date()).format('YYYY-MM-DD');
      }
      if (departmentId) {
        const department = departments?.find((department) => department.id === departmentId);
        filter['department'] = department.name;
      }
      const result = await getListHealthForm(option, filter);
      setHealthForms(result);
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
    fetchApi({}, {});
  }, [tab]);

  useEffect(() => {
    if (shouldReload) {
      handleReload();
      setShouldReload(false);
    }
  }, [shouldReload]);

  const handleReload = () => {
    fetchApi({}, {});
  };

  if (loading) {
    return (
      <Flex gap="small" vertical className="mt-30">
        <Spin size="large" />
      </Flex>
    );
  }

  const clearFilters = () => {
    setDateRange(null);
    setDepartmentId(null);
    setShouldReload(true);
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

  const listStatus = (status) => {
    if (status === 'accepted') {
      return <div className="p-2 min-w-[110px] text-white bg-green500 text-center rounded-md">Thành công</div>;
    } else if (status === 'pending') {
      return <div className="p-2 min-w-[110px] text-white bg-yellow400 text-center rounded-md">Chờ duyệt</div>;
    } else if (status === 'rejected') {
      return <div className="p-2 min-w-[110px] text-white bg-red500 text-center rounded-md">Từ chối</div>;
    } else {
      return <div className="p-2 min-w-[110px] text-white bg-secondary text-center rounded-md">Hủy bỏ</div>;
    }
  };

  const columns = [
    {
      title: <div style={{ fontSize: '1rem' }}>STT</div>,
      dataIndex: 'index',
      key: 'index',
      align: 'center',
      width: 50,
      render: (_, record, index) => <div style={{ fontSize: '1rem' }}>{index + 1}</div>,
    },
    {
      title: 'Họ và tên',
      dataIndex: 'user',
      key: 'user.fullName',
      align: 'center',
      render: (user, record) => {
        return <div>{user.fullName}</div>;
      },
      sorter: (a, b) => a.user.fullName.localeCompare(b.user.fullName),
      sortOrder: sortedInfo.columnKey === 'user.fullName' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Giới tính',
      dataIndex: 'user',
      key: 'user.gender',
      align: 'center',
      render: (user, record) => {
        return <div>{user.gender}</div>;
      },
      sorter: (a, b) => a.user.gender.localeCompare(b.user.gender),
      sortOrder: sortedInfo.columnKey === 'user.gender' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'user',
      key: 'user.dateOfBirth',
      align: 'center',
      render: (user, record) => {
        return user.dateOfBirth ? <div>{moment(user.dateOfBirth).format('DD-MM-YYYY')}</div> : <div>Chưa cập nhật</div>;
      },
      sorter: (a, b) =>
        moment(a.user.dateOfBirth).format('DD-MM-YYYY').localeCompare(moment(b.user.dateOfBirth).format('DD-MM-YYYY')),
      sortOrder: sortedInfo.columnKey === 'user.dateOfBirth' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Bác sĩ',
      dataIndex: 'doctor',
      key: 'doctor.name',
      align: 'center',
      render: (doctor, record) => {
        return <div>{doctor.name}</div>;
      },
      sorter: (a, b) => a.doctor.name.localeCompare(b.doctor.name),
      sortOrder: sortedInfo.columnKey === 'doctor.name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Chuyên khoa',
      dataIndex: 'department',
      key: 'department',
      align: 'center',
      sorter: (a, b) => a.department.localeCompare(b.department),
      sortOrder: sortedInfo.columnKey === 'department' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Thời gian hẹn',
      dataIndex: 'workingTime',
      key: 'workingTime.startTime',
      width: 200,
      align: 'center',
      sorter: (a, b) => a.workingTime.startTime.localeCompare(b.workingTime.startTime),
      sortOrder: sortedInfo.columnKey === 'workingTime.startTime' ? sortedInfo.order : null,
      render: (workingTime, record) => {
        return (
          <div>
            {workingTime.startTime +
              '-' +
              workingTime.endTime +
              ' ' +
              moment(workingTime.workingPlan.date).format('DD/MM/YYYY')}
          </div>
        );
      },
      ellipsis: true,
    },
    tab == 1
      ? {
          title: 'Trạng thái',
          dataIndex: 'status',
          key: 'status',
          align: 'center',
          render: (status) => {
            return listStatus(status);
          },
          sorter: (a, b) => a.status?.localeCompare(b.status),
          sortOrder: sortedInfo.columnKey === 'status' ? sortedInfo.order : null,
          ellipsis: true,
        }
      : { width: 0 },
    tab == 2
      ? {
          title: 'Lượt hẹn thứ',
          dataIndex: 'numberOrder',
          key: 'numberOrder',
          align: 'center',
          sorter: (a, b) => a.numberOrder?.localeCompare(b.numberOrder),
          sortOrder: sortedInfo.columnKey === 'numberOrder' ? sortedInfo.order : null,
          ellipsis: true,
        }
      : { width: 0 },
    tab == 4
      ? {
          title: 'Lý do từ chối',
          dataIndex: 'deniedReason',
          key: 'deniedReason',
          align: 'center',
          sorter: (a, b) => a.deniedReason?.localeCompare(b.deniedReason),
          sortOrder: sortedInfo.columnKey === 'deniedReason' ? sortedInfo.order : null,
        }
      : { width: 0 },
    tab == 5
      ? {
          title: 'Lý do hủy',
          dataIndex: 'canceledReason',
          key: 'canceledReason',
          align: 'center',
          sorter: (a, b) => a.canceledReason?.localeCompare(b.canceledReason),
          sortOrder: sortedInfo.columnKey === 'canceledReason' ? sortedInfo.order : null,
        }
      : { width: 0 },
    {
      title: <div style={{ fontSize: '1rem' }}>Hành động</div>,
      key: 'actions',
      align: 'center',
      width: 120,
      render: (_, record) => {
        return tab == 2 || tab == 3 ? (
          <>
            <DetailHistoryOrder record={record} />
            <CancelHistoryOrder record={record} onReload={handleReload} />
          </>
        ) : (
          <>
            <DetailHistoryOrder record={record} />
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
        <RangePicker
          format={'DD/MM/YYYY'}
          onChange={(dates) => setDateRange(dates)}
          value={dateRange}
          placeholder={['Ngày bắt đầu', 'Ngày kết thúc']}
        />
        <Select
          placeholder="Lọc theo chuyên khoa"
          style={{ width: 180 }}
          value={departmentId}
          onChange={(departmentId) => setDepartmentId(departmentId)}
        >
          {departments?.map((department) => (
            <Select.Option key={department.id} value={department.id}>
              {department ? department.name : 'Chưa xét khoa'}
            </Select.Option>
          ))}
        </Select>
        <Button onClick={handleReload}>Chọn lọc</Button>
        <Button onClick={clearFilters}>Xóa bộ lọc</Button>
      </Space>
      <Table
        onChange={(pagination, filters, sorter) => {
          console.log('Various parameters', pagination, filters, sorter);
          setSortedInfo(sorter);
        }}
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
