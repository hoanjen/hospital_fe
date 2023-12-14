"use client";

import { useEffect, useState } from "react";
import { getListDoctor } from "../services/doctor.service.jsx";
import DataTable from "./dataTable";

import React from 'react';
import { Alert, Flex, Spin } from 'antd';

export default function Doctor() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    try {
      const result = await getListDoctor();
      setDoctors(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (loading) {
    return <Flex gap="small" vertical>
      <Spin tip="Loading...">
      </Spin>
  </Flex>
  }

  return <DataTable doctors={doctors} />;
}
