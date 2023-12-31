'use client';

import { useEffect, useState } from 'react';
import React from 'react';
import { Button, Flex, Spin, Space, DatePicker, Select } from 'antd';
const { RangePicker } = DatePicker;
import { getListHealthForm } from '../services/health-form.service';
import moment from 'moment';
import Chart from 'chart.js/auto';
import { Line, Bar, Pie } from 'react-chartjs-2';

function ChartByDepartment(props) {
  const { tab, departments } = props;
  const [healthForms, setHealthForms] = useState([]);
  const [dateRange, setDateRange] = useState(null);
  const [departmentId, setDepartmentId] = useState(null);
  const [shouldReload, setShouldReload] = useState(false);
  const [chartLabels, setChartLabels] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  const datas = {
    labels: chartLabels,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: chartData,
      },
    ],
  };

  const LineChart = () => {
    return (
      <div className="flex justify-center">
        <Bar data={datas} />
      </div>
    );
  };

  const caculateHealthForms = () => {
    const ChartLabels = [];
    const ChartData = [];
    console.log('data', healthForms);
    healthForms?.forEach((item) => {
      const index = ChartLabels.indexOf(item.department);
      if (index !== -1) {
        ChartData[index]++;
      } else {
        ChartLabels.push(item.department);
        ChartData.push(1);
      }
    });
    setChartLabels(ChartLabels);
    setChartData(ChartData);
  };

  const fetchApi = async (option, filter) => {
    try {
      setLoading(true);
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
      setHealthForms(result?.data?.results);
      caculateHealthForms();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi({}, {});
  }, []);

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
      <LineChart />
    </>
  );
}

export default ChartByDepartment;
