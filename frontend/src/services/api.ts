import { ApiResponse, Filters, PaginationState, SalesData } from '../types';

const API_BASE_URL = 'http://localhost:8000';

export class ApiService {
  static async fetchSalesData(
    pagination: PaginationState,
    filters: Filters,
    useEfficientApi: boolean = true
  ): Promise<ApiResponse> {
    const url = new URL(
      useEfficientApi ? `${API_BASE_URL}/api/shops` : `${API_BASE_URL}/api/shops/all`
    );

    if (useEfficientApi) {
      url.searchParams.append('page', pagination.page.toString());
      url.searchParams.append('limit', pagination.limit.toString());
    }

    if (filters.category) {
      url.searchParams.append('category', filters.category);
    }
    if (filters.region) {
      url.searchParams.append('region', filters.region);
    }
    if (filters.startDate) {
      url.searchParams.append('startDate', filters.startDate);
    }
    if (filters.endDate) {
      url.searchParams.append('endDate', filters.endDate);
    }

    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }
}