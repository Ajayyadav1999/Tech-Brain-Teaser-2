# Analytics Dashboard Backend

A simple Node.js API that creates fake sales data for testing dashboard applications.

## What it does

This backend creates 120,000 fake sales records and lets you fetch them through API calls using the paginations and also you can fetch the data in once.

**Two ways to get data:**
- **Smart way**: Get data in small chunks (recommended)
- **All at once**: Get everything in one go (not recommended - will be slow!)

You can also filter the data by:
- Product category
- Sales region  
- Date ranges

## Quick Start

1. **Install everything:**
   npm install
   
2. **Start the server:**
   npm run dev

3. **Server runs on:** `http://localhost:8000`



**Basic request:**

http://localhost:8000/api/shops?page=1&limit=20

This gets you the first 20 records.

**Filter by category:**

http://localhost:8000/api/shops?category=electronics

Shows only electronics sales.

**Filter by region:**

http://localhost:8000/api/shops?region=USA

Shows only USA sales.

**Filter by date:**

http://localhost:8000/api/shops?startDate=2023-01-01&endDate=2023-06-30

Shows sales from January to June 2023.

**Combine filters:**

http://localhost:8000/api/shops?region=USA&category=electronics&page=1&limit=50


### Get all data at once 

http://localhost:8000/api/shops/all

This will return all 120,000 records and will be slow!

## Available filters

| Parameter | What it does | Example |
|-----------|-------------|---------|
| `page` | Which page of results | `page=1` |
| `limit` | How many results per page | `limit=20` |
| `category` | Filter by product category | `category=electronics` |
| `region` | Filter by sales region | `region=USA` |
| `startDate` | Show sales after this date | `startDate=2023-01-01` |
| `endDate` | Show sales before this date | `endDate=2023-12-31` |

## Requirements

- Node.js version 20
- npm 

