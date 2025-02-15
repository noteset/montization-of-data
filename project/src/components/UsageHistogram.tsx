import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import type { DataPoint } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  data: DataPoint[];
}

export function UsageHistogram({ data }: Props) {
  const usageBins = Array.from({ length: 10 }, (_, i) => i * 500);
  const frequencies = usageBins.map(bin => {
    return data.filter(d => d.usage >= bin && d.usage < bin + 500).length;
  });

  const chartData = {
    labels: usageBins.map(bin => `${bin}-${bin + 500} MB`),
    datasets: [
      {
        label: 'Frequency',
        data: frequencies,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Data Usage Distribution',
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Bar data={chartData} options={options} />
    </div>
  );
}