import analyticsData from "../data/analyticsData.js";

export const getShopSalesData = ({
  page = 1,
  limit = 20,
  category,
  startDate,
  endDate,
  region,
}) => {
  let filtered = [...analyticsData];

  if (category) {
    filtered = filtered.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (region) {
    filtered = filtered.filter(
      (item) => item.region.toLowerCase() === region.toLowerCase()
    );
  }

  if (startDate && endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    filtered = filtered.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= start && itemDate <= end;
    });
  }

  const total = filtered.length;
  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);

  const startIndex = (pageNum - 1) * limitNum;
  const paginated = filtered.slice(startIndex, startIndex + limitNum);

  return {
    total,
    page: pageNum,
    limit: limitNum,
    totalPages: Math.ceil(total / limitNum),
    data: paginated,
  };
};

export const getAllShopSalesData = () => {
  return analyticsData;
};
