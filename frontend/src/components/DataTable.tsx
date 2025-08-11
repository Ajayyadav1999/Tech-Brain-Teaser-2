import React from 'react';
import { format } from 'date-fns';
import { SalesData } from '../types';

interface DataTableProps {
  data: SalesData[];
  isLoading: boolean;
  error: Error | null;
}

export function DataTable({ data, isLoading, error }: DataTableProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy');
  };

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="text-red-500 mb-2">
          <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.982 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Error Loading Data</h3>
        <p className="text-gray-600 mb-4">{error.message}</p>
        <p className="text-sm text-gray-500">
          Make sure the backend API is running on <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:8000</code>
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Professional Full-Screen Loader Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-md mx-4 border border-gray-200/20">
            {/* Animated Logo/Icon */}
            <div className="relative mb-8">
              <div className="w-20 h-20 mx-auto">
                {/* Outer spinning ring */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-100 animate-pulse"></div>
                {/* Main spinning element */}
                {/* <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-400 animate-spin"></div> */}
                {/* Inner pulsing dot */}
                <div className="absolute inset-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 animate-pulse shadow-lg"></div>
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Loading Text */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Loading Sales Data</h3>
              <p className="text-gray-600 leading-relaxed">
                Fetching and processing your sales analytics...
              </p>

              {/* Progress dots */}
              <div className="flex justify-center space-x-2 mt-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>

            {/* Subtle brand touch */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-400 font-medium">SALES DASHBOARD</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Data Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Units Sold
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Unit Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Region
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {formatDate(item.date)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                    {item.productName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right">
                    {item.unitsSold.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right">
                    {formatCurrency(item.unitPrice)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600 text-right">
                    {formatCurrency(item.totalRevenue)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {item.region}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {!isLoading && data.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Data Available</h3>
            <p className="text-gray-500">No sales records match your current filters.</p>
          </div>
        )}
      </div>
    </>
  );
}