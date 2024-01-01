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
  const [healthForms, setHealthForms] = useState(null);
  const [dateRange, setDateRange] = useState(null);
  const [departmentId, setDepartmentId] = useState(null);
  const [shouldReload, setShouldReload] = useState(false);
  const [chartLabelTab1, setChartLabelTab1] = useState([]);
  const [chartDataTab1, setchartDataTab1] = useState([]);
  const [chartDataTab1AC, setchartDataTab1AC] = useState([]);
  const [chartLabelTab2, setChartLabelTab2] = useState([]);
  const [chartDataTab2, setchartDataTab2] = useState([]);
  const [chartDataTab2AC, setchartDataTab2AC] = useState([]);
  const [loading, setLoading] = useState(true);

  const dataTab1s = {
    labels: chartLabelTab1,
    datasets: [
      {
        label: 'Đơn khám đã đặt',
        backgroundColor: '	#ff91ba',
        borderColor: '#ffc0c0',
        data: chartDataTab1,
      },
      {
        label: 'Đơn khám được phê duyệt',
        backgroundColor: '#4db9c5',
        borderColor: '#ffc0c0',
        data: chartDataTab1AC,
      },
    ],
  };

  const optionTab1s = {
    plugins: {
      title: {
        display: true,
        text: 'Biểu đồ thống kê đơn khám theo từng chuyên khoa',
        position: 'bottom',
        font: {
          size: 16,
        },
      },
    },
  };

  const caculateHealthFormTab1s = () => {
    const ChartLabels = [];
    const chartData = [];
    const chartDataAC = [];
    healthForms?.forEach((item) => {
      const index = ChartLabels.indexOf(item.department);
      if (index !== -1) {
        chartData[index]++;
        if (item.status === 'accepted') {
          chartDataAC[index]++;
        }
      } else {
        ChartLabels.push(item.department);
        chartData.push(1);
        if (item.status === 'accepted') {
          chartDataAC.push(1);
        } else {
          chartDataAC.push(0);
        }
      }
    });
    setChartLabelTab1(ChartLabels);
    setchartDataTab1(chartData);
    setchartDataTab1AC(chartDataAC);
  };

  const dataTab2s = {
    labels: chartLabelTab2,
    datasets: [
      {
        label: 'Đơn khám đã đặt',
        backgroundColor: '	#ff91ba',
        borderColor: '#ffc0c0',
        data: chartDataTab2,
      },
      {
        label: 'Đơn khám được phê duyệt',
        backgroundColor: '#4db9c5',
        borderColor: '#ffc0c0',
        data: chartDataTab2AC,
      },
    ],
  };

  const optionTab2s = {
    plugins: {
      title: {
        display: true,
        text: 'Biểu đồ thống kê đơn khám theo từng bác sĩ',
        position: 'bottom',
        font: {
          size: 16,
        },
      },
    },
  };

  const caculateHealthFormTab2s = () => {
    const ChartLabels = [];
    const chartData = [];
    const chartDataAC = [];
    healthForms?.forEach((item) => {
      const index = ChartLabels.indexOf(item.doctor.name);
      if (index !== -1) {
        chartData[index]++;
        if (item.status === 'accepted') {
          chartDataAC[index]++;
        }
      } else {
        ChartLabels.push(item.doctor.name);
        chartData.push(1);
        if (item.status === 'accepted') {
          chartDataAC.push(1);
        } else {
          chartDataAC.push(0);
        }
      }
    });
    setChartLabelTab2(ChartLabels);
    setchartDataTab2(chartData);
    setchartDataTab2AC(chartDataAC);
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
      option['limit'] = 1000;
      const result = await getListHealthForm(option, filter);
      setHealthForms(result?.data?.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi({}, {});
  }, [tab]);

  useEffect(() => {
    if (tab == 1) caculateHealthFormTab1s();
    if (tab == 2) caculateHealthFormTab2s();
  }, [healthForms]);

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

  const BarChartTab1 = () => {
    return (
      <div className="flex justify-center">
        <Bar data={dataTab1s} options={optionTab1s} />
      </div>
    );
  };

  const BarChartTab2 = () => {
    return (
      <div className="flex justify-center">
        <Bar data={dataTab2s} options={optionTab2s} />
      </div>
    );
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
      {tab == 1 && <BarChartTab1 />}
      {tab == 2 && <BarChartTab2 />}
    </>
  );
}

export default ChartByDepartment;
