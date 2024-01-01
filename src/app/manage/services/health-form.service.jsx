'use client';

import queryString from 'query-string';
import { ADMIN_URL } from '@/api/constant/admin';
import axios from '@/api/axios';

export const getListHealthForm = async (option, filter) => {
  try {
    const queryParams = queryString.stringify({ ...option, ...filter });
    const result = await axios.get(
      `${ADMIN_URL.HEALTH_FORM}?populate=doctor,workingTime.workingPlan,user&limit=1000&${queryParams}`,
    );
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

export const acceptRecord = async (id) => {
  try {
    const result = await axios.put(`${ADMIN_URL.HEALTH_FORM}/${id}`, { status: 'accepted' });
    return result;
  } catch (error) {
    console.error('Error deleting record:', error);
    throw error;
  }
};

export const rejectRecord = async (id, msg) => {
  try {
    const result = await axios.put(`${ADMIN_URL.HEALTH_FORM}/${id}`, { status: 'rejected', deniedReason: msg });
    return result;
  } catch (error) {
    console.error('Error editing record:', error);
    throw error;
  }
};

export const cancelRecord = async (id, msg) => {
  try {
    const result = await axios.put(`${ADMIN_URL.HEALTH_FORM}/${id}`, { status: 'canceled', canceledReason: msg });
    return result;
  } catch (error) {
    console.error('Error editing record:', error);
    throw error;
  }
};

