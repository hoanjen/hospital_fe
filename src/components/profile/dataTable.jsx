'use client';

import React, { useEffect, useState } from 'react';
import { Button, Flex, Space, Spin, Table } from 'antd';
import ViewHistory from './ViewHistory';
import UpdateHistory from './updateHistory';

import queryString from 'query-string';
import { USER_URL } from '@/api/constant/user';
import axios from '@/api/axios';
import { useParams } from 'next/navigation';


export const getListHistory = async (option, filter) => {
   try {
      const queryParams = queryString.stringify({ ...option, ...filter });
      const result = await axios.get(`${USER_URL.HEALFORM}/?userId=${path.profileId}?${queryParams}`);
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

   const data = historys?.data?.results;

   const fetchApi = async (option, filter) => {
      try {
         const result = await getListHistory(option, filter);
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
         render: (_, record, index) => <div style={{ fontSize: '1rem' }}>{index + 1}</div>,
      },
      {
         title: 'Email',
         dataIndex: 'email',
         key: 'email',
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
         render: (_, record) => {
            return (
               <>
                  <ViewHistory record={record} onReload={onReload} />
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
            <CreateRecord onReload={onReload}></CreateRecord>
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
