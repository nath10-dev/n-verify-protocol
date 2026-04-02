'use client';

import { useState, useEffect } from 'react';

interface ChartData {
  label: string;
  value: number;
  color?: string;
}

interface BarChartProps {
  data: ChartData[];
  height?: number;
}

export function BarChart({ data, height = 200 }: BarChartProps) {
  const max = Math.max(...data.map(d => d.value));
  
  return (
    <div className="space-y-2">
      {data.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="w-20 text-sm text-gray-400 truncate">{item.label}</span>
          <div className="flex-1 bg-gray-800 rounded h-6 overflow-hidden">
            <div
              className={`h-full ${item.color || 'bg-sky-500'} rounded`}
              style={{ width: `${(item.value / max) * 100}%` }}
            />
          </div>
          <span className="w-12 text-right text-sm">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

interface LineChartProps {
  data: number[];
  labels?: string[];
  height?: number;
}

export function LineChart({ data, labels, height = 200 }: LineChartProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  
  return (
    <div className="relative" style={{ height }}>
      <svg className="w-full h-full" viewBox={`0 0 ${data.length * 50} ${height}`} preserveAspectRatio="none">
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          points={data.map((v, i) => `${i * 50},${height - ((v - min) / range) * (height - 40) + 20}`).join(' ')}
          className="text-sky-500"
        />
      </svg>
      {labels && (
        <div className="flex justify-between mt-2">
          {labels.map((l, i) => (
            <span key={i} className="text-xs text-gray-500">{l}</span>
          ))}
        </div>
      )}
    </div>
  );
}

interface DonutChartProps {
  data: ChartData[];
  size?: number;
}

export function DonutChart({ data, size = 200 }: DonutChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  let accumulated = 0;
  
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        {data.map((item, i) => {
          const percent = (item.value / total) * 100;
          const offset = (accumulated / total) * 100;
          accumulated += item.value;
          
          return (
            <circle
              key={i}
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke={item.color || '#38bdf8'}
              strokeWidth="20"
              strokeDasharray={`${percent * 2.51} ${251 - percent * 2.51}`}
              strokeDashoffset={`${-offset * 2.51}`}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold">{total}</span>
      </div>
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string | number;
  change?: number;
  icon?: string;
}

export function StatCard({ label, value, change, icon }: StatCardProps) {
  return (
    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-400 text-sm">{label}</span>
        {icon && <span className="text-xl">{icon}</span>}
      </div>
      <div className="text-2xl font-bold">{value}</div>
      {change !== undefined && (
        <div className={`text-sm ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
        </div>
      )}
    </div>
  );
}