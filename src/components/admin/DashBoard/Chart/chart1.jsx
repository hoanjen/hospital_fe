"use client"

import React from 'react';
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
);

export const options = {
   responsive: true,
   plugins: {
      legend: {
         position: 'top',
      },
      title: {
         display: true,
         text: 'Chart.js Line Chart',
      },
   },
};

const labels = ["20/2/2023", "21/2/2023", "22/2/2023", "23/2/2023", "24/2/2023", "25/2/2023", "20/2/2023", "21/2/2023", "22/2/2023", "23/2/2023", "24/2/2023", "25/2/2023"]

export const data = {
   labels,
   datasets: [
      {
         label: 'React',
         data: [32, 22, 33, 55, 77, 66, 32, 22, 33, 55, 77, 66],
         borderColor: 'rgb(255, 99, 132)',
         backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
         label: 'Angular',
         data: [32, 11, 44, 22, 11, 10, 15, 12, 44, 55, 66, 55],
         borderColor: 'rgb(53, 162, 235)',
         backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
   ],
}

export default function Chart1(){
   return <Line options={options} data={data} />;
}