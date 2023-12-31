'use client';
import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import DataTable from './dataTable';
const { TabPane } = Tabs;
import { getListDepartment } from '../../app/manage/services/department.service';

export default function HistoryOrder() {
  const [departments, setDepartments] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getListDepartment();
      setDepartments(data?.data?.results);
    };
    fetchData();
  }, []);

  return (
    <div className="w-[1140px] mt-10 ml-5">
      <Tabs defaultActiveKey="1" onChange={(key) => console.log(key)}>
        <TabPane tab="Tất cả" key="1">
          <DataTable tab="1" departments={departments} />
        </TabPane>
        <TabPane tab="Chưa phê duyệt" key="2">
          <DataTable tab="2" departments={departments} />
        </TabPane>
        <TabPane tab="Đủ điều kiện" key="3">
          <DataTable tab="3" departments={departments} />
        </TabPane>
        <TabPane tab="Không đủ điều kiện" key="4">
          <DataTable tab="4" departments={departments} />
        </TabPane>
        <TabPane tab="Đã hủy" key="5">
          <DataTable tab="5" departments={departments} />
        </TabPane>
      </Tabs>
    </div>
  );
}
