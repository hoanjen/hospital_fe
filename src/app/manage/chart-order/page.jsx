'use client';
import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import Chart from './chart';
const { TabPane } = Tabs;
import BreadCrumb from '../../../components/Manage/Breadcrumb';
import { getListDepartment } from '../services/department.service';

export default function ChartOrder() {
  const [departments, setDepartments] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getListDepartment();
      setDepartments(data?.data?.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <BreadCrumb link="http://localhost:3000/manage" title_1="Quản lý đơn khám" title_2="Thống kê đơn khám" />
      <Tabs defaultActiveKey="1" onChange={(key) => console.log(key)}>
        <TabPane tab="Theo chuyên khoa" key="1">
          <Chart tab="1" departments={departments} />
        </TabPane>
        <TabPane tab="Theo bác sĩ" key="2">
          <Chart tab="2" departments={departments} />
        </TabPane>
        <TabPane tab="Theo độ tuổi" key="3">
          <Chart tab="3" departments={departments} />
        </TabPane>
      </Tabs>
    </div>
  );
}
