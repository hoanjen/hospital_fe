'use client';

import React, { useEffect, useState } from 'react';
import { Button, Flex, Space, Spin, Table } from 'antd';
import ViewHistory from './ViewHistory';
import UpdateHistory from './updateHistory';

import queryString from 'query-string';
import { USER_URL } from '@/api/constant/user';
import axios from '@/api/axios';
import { useParams } from 'next/navigation';
import moment from 'moment';



const DataTable = () => {
   const path = useParams();
   const [historys, setHistorys] = useState([]);
   const [loading, setLoading] = useState(true);
   const [limitPage, setLimitPage] = useState(1);
   const [totalPage, setTotalPage] = useState(1);
   const [currentPage, setCurrentPage] = useState(1);
   const [totalResult, setTotalResult] = useState(1);
   const [filteredInfo, setFilteredInfo] = useState({});
   const [sortedInfo, setSortedInfo] = useState({});
   const [filterStatus, setFilterStatus] = useState('');
   const data = historys?.data?.results;

   const fetchApi = async (option, filter) => {
      try {
         const result = await getListHistory(option, filter);
         console.log(result);
         setHistorys(result);
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
   const dsStatus = (status) => {
      if (status === 'accepted') {
        return <div className="p-2 min-w-[110px] text-white bg-green500 text-center rounded-md">Thành công</div>;
      } else if (status === 'pending') {
        return <div className="p-2 min-w-[110px] text-white bg-yellow400   text-center rounded-md">Chờ duyệt</div>;
      } else {
        return <div className="p-2 min-w-[110px] text-white bg-red500   text-center rounded-md">Từ chối</div>;
      }
    };

   const getListHistory = async (option, filter) => {
      try {
         const queryParams = queryString.stringify({ ...option, ...filter });
         const result = await axios.get(`${USER_URL.HEALTH_FORM}/?userId=${path.profileId}&populate=doctor,workingTime&${queryParams}`);
         if (result?.data?.code === 200) {
            console.log('Request successful:', result.data);
            return result.data;
         } else {
            console.error('Request failed with status:', result.data.code);
            throw new Error('Failed to fetch data');
         }
      } catch (error) {
         console.error('An error occurred:', error);
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
   const healFormFilter = (status) => {
      console.log(status, "1111111111111111111111")
      setFilterStatus(status);
      if(status !== ""){
         fetchApi({},{status});
      }else{
         fetchApi();
      }
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
         title: 'Mã phiếu',
         dataIndex: 'id',
         key: 'id',
         // filters: [
         //   {
         //     text: 'Joe',
         //     value: 'Joe',
         //   },
         //   {
         //     text: 'Jim',
         //     value: 'Jim',
         //   },
         // ],
         // filteredValue: filteredInfo.name || null,
         // onFilter: (value, record) => record.name.includes(value),
         sorter: (a, b) => a.id.localeCompare(b.id),
         sortOrder: sortedInfo.columnKey === 'id' ? sortedInfo.order : null,
         ellipsis: true,
      },
      {
         title: 'Tên bác sĩ',
         dataIndex: 'doctor',
         key: 'doctor.name',
         width: 180,
         render: (doctor,record) =>{ return <div>{doctor.name}</div>},
         sorter: (a, b) => a.doctor.name.localeCompare(b.doctor.name),
         sortOrder: sortedInfo.columnKey === 'doctor.name' ? sortedInfo.order : null,
         ellipsis: true,
      },
      {
         title: 'Chuyên Khoa',
         dataIndex: 'department',
         key: 'department',
         width: 130,
         sorter: (a, b) => a.department.localeCompare(b.department),
         sortOrder: sortedInfo.columnKey === 'department' ? sortedInfo.order : null,
         ellipsis: true,
      },
      {
         title: 'Thời gian',
         dataIndex: 'workingTime',
         key: 'workingTime.startTime',
         width: 200,
         sorter: (a, b) => a.workingTime.startTime.localeCompare(b.workingTime.startTime),
         sortOrder: sortedInfo.columnKey === 'workingTime.startTime' ? sortedInfo.order : null,
         ellipsis: true,
         render: (text, record) => {
            return <div>{text.startTime +"-" + text.endTime + " " + moment(text.createAt).format('DD/MM/YYYY')}</div>
         },
      },
      {
         title: 'Số thứ tự khám',
         dataIndex: 'numberConfirm',
         key: 'numberConfirm',
         width: 150,
         sorter: (a, b) => {
            a < b
         },
         render: (text, record) => {
            if(text === 0 ){
               return <div>Chờ xác nhận</div>
            }
            return <div>{text}</div>
         },
         sortOrder: sortedInfo.columnKey === 'numberOrder' ? sortedInfo.order : null,
         ellipsis: true,
      },
      {
         title: 'Ghi chú',
         dataIndex: 'note',
         key: 'note',
         sorter: (a, b) => a.note.localeCompare(b.note),
         sortOrder: sortedInfo.columnKey === 'note' ? sortedInfo.order : null,
         ellipsis: true,
      },
      {
         title: 'Trạng thái',
         dataIndex: 'status',
         key: 'status',
         width: 150,
         sorter: (a, b) => a.status?.localeCompare(b.status),
         render: (status)=> {
            return dsStatus(status);
         },
         sortOrder: sortedInfo.columnKey === 'status' ? sortedInfo.order : null,
         ellipsis: true,
      },
      {
         title: <div style={{ fontSize: '1rem' }}>Hành động</div>,
         key: 'actions',
         render: (_, record) => {
            return (
               <>
                  <UpdateHistory record={record} onReload={onReload} />
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
            <Button onClick={() => healFormFilter("rejected")}>Lịch khám bị hủy</Button>
            <Button onClick={() => healFormFilter("accepted")}>Lịch khám đã được duyệt</Button>
            <Button onClick={() => healFormFilter("pending")}>Lịch khám đang chờ duyệt</Button>
            <Button onClick={() => healFormFilter('')}>Xóa lọc lịch</Button>
            
         </Space>
         <Table
            
            columns={columns}
            dataSource={data}
            onChange={handleChange}
            pagination={{
               current: currentPage,
               total: totalResult,
               onChange: (page, pageSize) => {
                  console.log("1111111111", pageSize, page);
                  setCurrentPage(page);
                  setLimitPage(pageSize);
                  const option = {};
                  const filter = {};
                  if(filterStatus !== ''){
                     filter['status'] = filterStatus;
                  }
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
