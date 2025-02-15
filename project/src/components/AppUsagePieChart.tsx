import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import type { AppUsage } from '../types';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  data: AppUsage[];
}

export function AppUsagePieChart({ data }: Props) {
  const chartData = {
    labels: data.map(d => d.appName),
    datasets: [
      {
        data: data.map(d => d.usage),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'App Usage Distribution',
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Pie data={chartData} options={options} />
    </div>
  );
}