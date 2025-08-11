# Analytics Dashboard Frontend

A React dashboard that shows sales data and demonstrates the difference between good and bad data loading practices.

## What it does

This dashboard connects to your backend API and displays sales analytics in a clean, easy-to-read table. You can filter and search through tons of data without your browser crashing!

**Two loading modes to compare:**
- **Fast mode**: Loads data in small chunks 
- **Slow mode**: Tries to load everything at once (the wrong way - watch it struggle!)

## Cool features

**Data management:**
- Handles 100,000+ records without breaking a sweat
- Smart filtering by category, region, and date
- Page through results instead of loading everything
- Automatic search that waits for you to stop typing

**User interface:**
- Clean data table that's easy to read
- Page controls (next, previous, jump to page)
- Dropdown filters and date pickers
- Loading animations and helpful error messages

**Learning tool:**
- See exactly why loading all data at once is a bad idea
- Watch the difference between good and bad pagination

## Quick Start

### What you need first
- Node.js version 20
- npm 

### Get it running

1. **Download everything:**
   npm install

2. **Start the app:**
   npm start

3. **Open your browser to:** `http://localhost:5173`

4. **Make sure your backend is running on:** `http://localhost:8000`

## How to use it

### The dashboard shows:
- **Sales data table** with all the important info
- **Filter controls** at the top to narrow down results
- **Page controls** at the bottom to navigate through data
- **Summary panel** showing totals for your current view

### Try both modes:
1. **Efficient mode** (default) - Notice how fast everything loads
2. **Poor mode** - Switch to this and watch it struggle with all the data

### Filtering your data:
- **Category**: Pick from electronics, clothing, books, etc.
- **Region**: Filter by USA, Europe, Asia, etc.
- **Date range**: Set start and end dates
- **Page size**: Choose how many records to show per page


