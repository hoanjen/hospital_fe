'use client';

import { ADMIN_URL } from '@/api/constant/admin';
import axios from '@/api/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const getListDoctor = async () => {
  try {
    const result = await axios.get(`${ADMIN_URL.DOCTOR}`);
    if (result.data.code === 200) {
      console.log('Request successful:', result);
      return result.data;
    } else {
      console.error('Request failed with status:', result.data.code);
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error('Error fetching doctor list:', error);
    throw error;
  }
};

export const deleteRecord = async (id) => {
  try {
    const result = await axios.delete(`${ADMIN_URL.DOCTOR}/${id}`);
    console.log('result: ', result);
    if (result?.data?.code === 200) {
      console.log('Record deleted successfully:', result);
      return result.data;
    } else {
      toast.error(`${result.response.data.message}`);
      console.error('Deletion failed with status:', result.response.data.message);
      throw new Error('Failed to delete record');
    }
  } catch (error) {
    console.error('Error deleting record:', error);
    throw error;
  }
};

export const editRecord = async (id, options) => {
  try {
    const result = await axios.put(`${ADMIN_URL.DOCTOR}/${id}`, options);
    console.log('result: ', result);
    if (result?.data?.code === 200) {
      console.log('Record edit successfully:', result);
      return result.data;
    } else {
      toast.error(`${result.response.data.message}`);
      console.error('Deletion failed with status:', result.response.data.message);
      throw new Error('Failed to edit record');
    }
  } catch (error) {
    console.error('Error deleting record:', error);
    throw error;
  }
};
