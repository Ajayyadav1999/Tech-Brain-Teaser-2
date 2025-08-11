import { useQuery } from '@tanstack/react-query';
import { ApiService } from '../services/api';
import { Filters, PaginationState } from '../types';

export function useSalesData(
  pagination: PaginationState,
  filters: Filters,
  useEfficientApi: boolean
) {
  return useQuery({
    queryKey: ['salesData', pagination, filters, useEfficientApi],
    queryFn: () => ApiService.fetchSalesData(pagination, filters, useEfficientApi),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}