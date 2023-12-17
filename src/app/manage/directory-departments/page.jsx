
'use client';

import { getListDepartment } from '../services/department.service';
import { useEffect, useState } from 'react';
import DataTable from './dataTable';

import React from 'react';
import { Flex, Spin } from 'antd';

export default function DirectoryDepartment() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    try {
      const result = await getListDepartment();
      setDepartments(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleReload = () => {
    fetchApi();
  };

  if (loading) {
    return (
      <Flex gap="small" vertical>
        <Spin size="large" />
      </Flex>
    );
  }

  return <div className="m-5">
    <DataTable departments={departments} onReload={handleReload} />
  </div>;
}