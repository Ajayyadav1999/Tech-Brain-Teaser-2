import React from 'react';
import { DollarSign, Package } from 'lucide-react';
import { Summary as SummaryType } from '../types';

interface SummaryProps {
  summary: SummaryType;
}

export function Summary({ summary }: SummaryProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md p-6 text-white">
        <div className="flex items-center">
          <Package className="w-8 h-8 mr-3" />
          <div>
            <p className="text-blue-100">Total Units Sold</p>
            <p className="text-2xl font-bold">{formatNumber(summary.totalUnitsSold)}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-md p-6 text-white">
        <div className="flex items-center">
          <DollarSign className="w-8 h-8 mr-3" />
          <div>
            <p className="text-green-100">Total Revenue</p>
            <p className="text-2xl font-bold">{formatCurrency(summary.totalRevenue)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}