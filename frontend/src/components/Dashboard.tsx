import React, { useState, useMemo } from 'react';
import { BarChart3 } from 'lucide-react';
import { useDebounce } from '../hooks/useDebounce';
import { useSalesData } from '../hooks/useSalesData';
import { Filters, PaginationState, Summary } from '../types';
import { ApiToggle } from './ApiToggle';
import { Filters as FiltersComponent } from './Filters';
import { Summary as SummaryComponent } from './Summary';
import { DataTable } from './DataTable';
import { Pagination } from './Pagination';

export function Dashboard() {
  const [useEfficientApi, setUseEfficientApi] = useState(true);
  const [filters, setFilters] = useState<Filters>({
    category: '',
    region: '',
    startDate: '',
    endDate: '',
  });
  const [pagination, setPagination] = useState<PaginationState>({
    page: 1,
    limit: 20,
  });

  // Debounce filters to avoid excessive API calls
  const debouncedFilters = useDebounce(filters, 500);

  // Fetch data using React Query
  const { data, isLoading, error, isPreviousData } = useSalesData(
    pagination,
    debouncedFilters,
    useEfficientApi
  );

  // Calculate summary from current data
  const summary: Summary = useMemo(() => {
    if (!data?.data) return { totalUnitsSold: 0, totalRevenue: 0 };
    
    return data.data.reduce(
      (acc, item) => ({
        totalUnitsSold: acc.totalUnitsSold + item.unitsSold,
        totalRevenue: acc.totalRevenue + item.totalRevenue,
      }),
      { totalUnitsSold: 0, totalRevenue: 0 }
    );
  }, [data?.data]);

  const handleFiltersChange = (newFilters: Filters) => {
    setFilters(newFilters);
    setPagination(prev => ({ ...prev, page: 1 })); // Reset to first page when filters change
  };

  const handlePageChange = (page: number) => {
    setPagination(prev => ({ ...prev, page }));
  };

  const handlePageSizeChange = (limit: number) => {
    setPagination({ page: 1, limit });
  };

  const handleApiToggle = (useEfficient: boolean) => {
    setUseEfficientApi(useEfficient);
    setPagination({ page: 1, limit: 20 }); // Reset pagination when switching APIs
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Sales Analytics Dashboard</h1>
          </div>
          <p className="text-gray-600">
            Compare efficient vs. poor pagination implementations and their impact on performance
          </p>
        </div>

        {/* API Toggle */}
        <ApiToggle useEfficientApi={useEfficientApi} onToggle={handleApiToggle} />

        {/* Filters */}
        <FiltersComponent filters={filters} onFiltersChange={handleFiltersChange} />

        {/* Summary */}
        <SummaryComponent summary={summary} />

        {/* Data Table */}
        <div className="mb-6 relative">
          {isPreviousData && (
            <div className="absolute top-4 right-4 z-20 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              Updating...
            </div>
          )}
          <DataTable
            data={data?.data || []}
            isLoading={isLoading}
            error={error}
          />
        </div>

        {/* Pagination */}
        {data && (
          <Pagination
            currentPage={data.page}
            totalPages={data.totalPages}
            pageSize={data.limit}
            totalRecords={data.total}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
            disabled={isLoading}
          />
        )}

        {/* Performance Notes */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Performance Comparison</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-green-700 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                Efficient API Benefits
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Server-side pagination reduces data transfer</li>
                <li>• Faster loading times with smaller payloads</li>
                <li>• Lower memory usage on the frontend</li>
                <li>• Better user experience with quick navigation</li>
                <li>• Scalable for large datasets</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-orange-700 flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                Poor API Issues
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Downloads entire dataset on every request</li>
                <li>• Slow loading times with large payloads</li>
                <li>• High memory usage and potential browser crashes</li>
                <li>• Poor user experience with long loading times</li>
                <li>• Not scalable for production environments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}