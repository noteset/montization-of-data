export interface DataPoint {
  timestamp: Date;
  usage: number;
  appName: string;
  networkType: 'wifi' | 'mobile';
}

export interface DailyUsage {
  date: Date;
  total: number;
  wifi: number;
  mobile: number;
}

export interface AppUsage {
  appName: string;
  usage: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate: Date;
}

export interface DataSummary {
  totalUsage: number;
  wifiPercentage: number;
  mobilePercentage: number;
  topApp: string;
  monthlyChange: number;
}