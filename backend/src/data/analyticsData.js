import { faker } from "@faker-js/faker";

// I am taking 120,000 data because in the question tehre was criteria of 100,000 records to fetch
const TOTAL_RECORDS = 120000;

export const createAnalyticsRecord = (id) => {
  const category = faker.commerce.department();
  const productName = faker.commerce.productName();
  const unitsSold = faker.number.int({ min: 1, max: 500 });
  const unitPrice = parseFloat(
    faker.commerce.price({ min: 10, max: 500, dec: 2 })
  );
  const totalRevenue = parseFloat((unitsSold * unitPrice).toFixed(2));

  return {
    id: id + 1,
    date: faker.date.between({ from: "2022-01-01", to: new Date() }),
    category,
    productName,
    unitsSold,
    unitPrice,
    totalRevenue,
    region: faker.location.country(),
  };
};

const analyticsData = faker.helpers.multiple(
  () =>
    createAnalyticsRecord(faker.number.int({ min: 0, max: TOTAL_RECORDS - 1 })),
  {
    count: TOTAL_RECORDS,
  }
);

export default analyticsData;
