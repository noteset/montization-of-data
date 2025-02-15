import React, { useState } from 'react';
import { UsageHistogram } from './components/UsageHistogram';
import { AppUsagePieChart } from './components/AppUsagePieChart';
import { DailyTrendChart } from './components/DailyTrendChart';
import { NetworkTypeChart } from './components/NetworkTypeChart';
import { LiveUsageMonitor } from './components/LiveUsageMonitor';
import { TaskList } from './components/TaskList';
import { DataSummary } from './components/DataSummary';
import { Documentation } from './components/Documentation';
import { BarChart3, PieChart, LineChart, Wifi, Activity, BookOpen } from 'lucide-react';
import type { Task } from './types';

// Sample data - In a real app, this would come from your backend
const sampleData = {
  dataPoints: Array.from({ length: 100 }, () => ({
    timestamp: new Date(),
    usage: Math.random() * 5000,
    appName: ['YouTube', 'Netflix', 'WhatsApp', 'Chrome', 'Instagram'][Math.floor(Math.random() * 5)],
    networkType: Math.random() > 0.5 ? 'wifi' : 'mobile' as const,
  })),
  appUsage: [
    { appName: 'YouTube', usage: 2500 },
    { appName: 'Netflix', usage: 1800 },
    { appName: 'WhatsApp', usage: 500 },
    { appName: 'Chrome', usage: 1200 },
    { appName: 'Instagram', usage: 900 },
  ],
  dailyUsage: Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const total = Math.random() * 5000;
    const wifi = total * 0.7;
    return {
      date,
      total,
      wifi,
      mobile: total - wifi,
    };
  }),
  currentUsage: Math.random() * 100,
  tasks: [
    {
      id: '1',
      title: 'Review High Data Usage Apps',
      description: 'Analyze apps consuming more than 1GB of data daily',
      status: 'pending',
      priority: 'high',
      dueDate: new Date(Date.now() + 86400000),
    },
    {
      id: '2',
      title: 'Update Data Usage Alerts',
      description: 'Configure notifications for data usage thresholds',
      status: 'completed',
      priority: 'medium',
      dueDate: new Date(Date.now() + 172800000),
    },
    {
      id: '3',
      title: 'Optimize WiFi Usage',
      description: 'Identify opportunities to shift mobile data usage to WiFi',
      status: 'pending',
      priority: 'low',
      dueDate: new Date(Date.now() + 259200000),
    },
  ] as Task[],
  summary: {
    totalUsage: 6900,
    wifiPercentage: 70,
    mobilePercentage: 30,
    topApp: 'YouTube',
    monthlyChange: 15,
  },
};

function App() {
  const [tasks, setTasks] = useState(sampleData.tasks);
  const [showDocs, setShowDocs] = useState(false);

  const handleToggleTask = (taskId: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' }
          : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Data Usage Analytics</h1>
            <button
              onClick={() => setShowDocs(!showDocs)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <BookOpen size={20} />
              {showDocs ? 'Hide Documentation' : 'Show Documentation'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {showDocs ? (
          <div className="mb-6">
            <Documentation />
          </div>
        ) : (
          <>
            <div className="mb-6">
              <DataSummary data={sampleData.summary} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="text-blue-500" />
                  <h2 className="text-xl font-semibold">Usage Distribution</h2>
                </div>
                <UsageHistogram data={sampleData.dataPoints} />
              </section>

              <section>
                <div className="flex items-center gap-2 mb-4">
                  <PieChart className="text-blue-500" />
                  <h2 className="text-xl font-semibold">App Usage</h2>
                </div>
                <AppUsagePieChart data={sampleData.appUsage} />
              </section>

              <section>
                <div className="flex items-center gap-2 mb-4">
                  <LineChart className="text-blue-500" />
                  <h2 className="text-xl font-semibold">Daily Trends</h2>
                </div>
                <DailyTrendChart data={sampleData.dailyUsage} />
              </section>

              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Wifi className="text-blue-500" />
                  <h2 className="text-xl font-semibold">Network Usage</h2>
                </div>
                <NetworkTypeChart data={sampleData.dailyUsage} />
              </section>

              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Activity className="text-blue-500" />
                  <h2 className="text-xl font-semibold">Live Monitor</h2>
                </div>
                <LiveUsageMonitor currentUsage={sampleData.currentUsage} threshold={80} />
              </section>

              <section>
                <TaskList tasks={tasks} onToggleTask={handleToggleTask} />
              </section>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;