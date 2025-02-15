import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

interface Props {
  currentUsage: number;
  threshold: number;
}

export function LiveUsageMonitor({ currentUsage, threshold }: Props) {
  const [isOverThreshold, setIsOverThreshold] = useState(false);

  useEffect(() => {
    setIsOverThreshold(currentUsage > threshold);
  }, [currentUsage, threshold]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Live Usage Monitor</h2>
        <Activity className="text-blue-500" size={24} />
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Current Usage:</span>
          <span className="text-2xl font-bold">{currentUsage.toFixed(2)} MB</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Threshold:</span>
          <span className="text-lg">{threshold} MB</span>
        </div>
        {isOverThreshold && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
            Warning: Usage exceeds threshold!
          </div>
        )}
      </div>
    </div>
  );
}