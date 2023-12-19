'use client';

import { ADMIN_URL } from '@/api/constant/admin';
import axios from '@/api/axios';

export const getListRole = async () => {
  try {
    const result = await axios.get(`${ADMIN_URL.ROLE}`);
    console.log(result);
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

export const deleteRecord = async (id) => {
  try {
    const result = await axios.delete(`${ADMIN_URL.ROLE}/${id}`);
    return result;
  } catch (error) {
    console.error('Error deleting record:', error);
    throw error;
  }
};

export const editRecord = async (id, options) => {
  try {
    const result = await axios.put(`${ADMIN_URL.ROLE}/${id}`, options);
    return result;
  } catch (error) {
    console.error('Error deleting record:', error);
    throw error;
  }
};

export const createRecord = async (options) => {
  try {
    const result = await axios.post(`${ADMIN_URL.ROLE}`, options);
    return result;
  } catch (error) {
    console.error('Error deleting record:', error);
    throw error;
  }
};
