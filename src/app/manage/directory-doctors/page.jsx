'use client';

import { getListDoctor } from '../services/doctor.service';
import { useEffect, useState } from 'react';
import DataTable from './dataTable';

import React from 'react';
import { Flex, Spin } from 'antd';

export default function Doctor() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  const fetchApi = async () => {
    try {
      const result = await getListDoctor();
      setDoctors(result);
      setTotalPages(result.data.totalPages);
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
  <DataTable doctors={doctors} onReload={handleReload} totalPages={totalPages} />
  </div>;
}