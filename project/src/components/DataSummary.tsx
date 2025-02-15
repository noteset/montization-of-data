```tsx
import React from 'react';
import { TrendingUp, TrendingDown, Smartphone, Wifi, Award } from 'lucide-react';
import type { DataSummary } from '../types';

interface Props {
  data: DataSummary;
}

export function DataSummary({ data }: Props) {
  const totalUsageGB = (data.totalUsage / 1000).toFixed(2);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
          <div className="bg-blue-100 p-3 rounded-full">
            <Smartphone className="text-blue-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-600">Mobile Data</p>
            <p className="text-xl font-bold">{data.mobilePercentage}%</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
          <div className="bg-green-100 p-3 rounded-full">
            <Wifi className="text-green-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-600">WiFi Usage</p>
            <p className="text-xl font-bold">{data.wifiPercentage}%</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
          <div className="bg-purple-100 p-3 rounded-full">
            <Award className="text-purple-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-600">Top App</p>
            <p className="text-xl font-bold">{data.topApp}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg">
          <div className="bg-yellow-100 p-3 rounded-full">
            <Wifi className="text-yellow-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-600">Other Usage</p>
            <p className="text-xl font-bold">{data.otherUsagePercentage}%</p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Usage</p>
            <p className="text-2xl font-bold">{totalUsageGB} GB</p>
          </div>
          <div className="flex items-center space-x-2">
            {data.monthlyChange >= 0 ? (
              <>
                <TrendingUp className="text-green-500" size={20} />
                <span className="text-green-500">+{data.monthlyChange}%</span>
              </>
            ) : (
              <>
                <TrendingDown className="text-red-500" size={20} />
                <span className="text-red-500">{data.monthlyChange}%</span>
              </>
            )}
            <span className="text-sm text-gray-500">vs last month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
```
