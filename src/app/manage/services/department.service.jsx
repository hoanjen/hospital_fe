'use client';

import { ADMIN_URL } from '@/api/constant/admin';
import axios from '@/api/axios';

export const getListDepartment = async () => {
  try {
    const result = await axios.get(`${ADMIN_URL.DEPARTMENTS}`);

    if (result?.data?.code === 200) {
      console.log('Request successful:', result.data);
      return result?.data?.data?.results;
    } else {
      console.error('Request failed with status:', result.data.code);
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};