'use client';
import React from 'react';
import { Tabs } from 'antd';
import DataTable from './dataTable';
const { TabPane } = Tabs;
import BreadCrumb from '../../../components/Manage/Breadcrumb';

export default function ManageRole() {
  return (
    <div>
      <BreadCrumb link="http://localhost:3000/manage" title_1="Quản trị hệ thống" title_2="Quản lý quyền" />
      <Tabs defaultActiveKey="1" onChange={(key) => console.log(key)}>
        <TabPane tab="Tất cả" key="1">
          <DataTable />
        </TabPane>
      </Tabs>
    </div>
  );
}
