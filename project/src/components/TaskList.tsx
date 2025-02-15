import React from 'react';
import { CheckCircle2, Circle, AlertCircle } from 'lucide-react';
import type { Task } from '../types';
import { format } from 'date-fns';

interface Props {
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
}

export function TaskList({ tasks, onToggleTask }: Props) {
  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-red-500';
      case 'medium':
        return 'text-yellow-500';
      case 'low':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Data Usage Tasks</h2>
        <AlertCircle className="text-blue-500" size={24} />
      </div>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <button
              onClick={() => onToggleTask(task.id)}
              className="mt-1 focus:outline-none"
            >
              {task.status === 'completed' ? (
                <CheckCircle2 className="text-green-500" size={20} />
              ) : (
                <Circle className="text-gray-400" size={20} />
              )}
            </button>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className={`font-medium ${task.status === 'completed' ? 'line-through text-gray-500' : ''}`}>
                  {task.title}
                </h3>
                <span className={`text-sm ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{task.description}</p>
              <div className="text-sm text-gray-500 mt-2">
                Due: {format(task.dueDate, 'MMM dd, yyyy')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}