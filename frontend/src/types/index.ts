export interface SalesData {
  id: string;
  date: string;
  category: string;
  productName: string;
  unitsSold: number;
  unitPrice: number;
  totalRevenue: number;
  region: string;
}

export interface ApiResponse {
  data: SalesData[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface Filters {
  category: string;
  region: string;
  startDate: string;
  endDate: string;
}

export interface PaginationState {
  page: number;
  limit: number;
}

export interface Summary {
  totalUnitsSold: number;
  totalRevenue: number;
}