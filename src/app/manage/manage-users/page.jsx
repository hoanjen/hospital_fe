'use client';
import React from 'react';
import { Tabs } from 'antd';
import DataTable from './dataTable';

const { TabPane } = Tabs;

export default function User() {
  return (
    <div className="m-5">
      <Tabs defaultActiveKey="1" onChange={(key) => console.log(key)}>
        <TabPane tab="Tất cả" key="1">
          <DataTable />
        </TabPane>
      </Tabs>
    </div>
  );
}
