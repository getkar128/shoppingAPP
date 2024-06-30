# React Vite Project

This project is a React application bootstrapped with Vite. It includes a mock API created using the `json-server` library, with data stored in the `src/data/db.json` file. Categories, cards, and product navigation all redirect to the same dummy product listing page served from `json-server`. The project uses Redux Toolkit and `createAsyncThunk` for data management.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Mock API](#mock-api)
- [Redux Toolkit](#redux-toolkit)
- [Features](#features)

## Installation

1. **Clone the repository:**

    ```
    git clone https://github.com/getkar128/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies:**

    ```
    npm install
    ```

## Running the Project

To start the project, you need to run both the Vite development server and the json-server mock API.

1. **Start the Vite development server:**
    
    ```
    npm run dev
    ```
2. **Start the json-server mock API:**
    ```
    npm run mock-api
    ```
The json-server will serve the mock API on http://localhost:5000.

## Project Structure
    src/
    ├── assets/
    ├── components/
    ├── data/
    │   └── db.json
    ├── redux/
    │   ├── features/
    │   │   ├── cartSlice.js
    │   │   └── productSlice.js
    |   ├── store.js
    ├── pages/
    │   ├── HomePage.jsx
    │   ├── CategoryPage.jsx
    │   ├── ProductListingPage.jsx
    ├── App.jsx
    ├── main.jsx
    └── index.css

## Mock API
The mock API is created using the json-server library. The data is stored in src/data/db.json. You can modify this file to change the mock data.

## Redux Toolkit
This project uses Redux Toolkit for state management. The createAsyncThunk function is used to handle asynchronous operations, such as fetching data from the mock API.

## Features
- Mock API: Simulates a real API using json-server.
- Redux Toolkit: Simplifies state management and asynchronous data fetching.
- Product Listing Page: Displays a list of products fetched from the mock API.
- Navigation: Categories, cards, and product links redirect to the product listing page.
- Cart Listing Page: Displays Items added to cart and edit items in cart page.
