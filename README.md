# My Store - React E-commerce Application

## Setup Instructions

1. Ensure you have Node.js and npm installed on your system.
2. Clone the repository or download the project files.
3. Navigate to the project directory:
   ```
   cd vite-project
   ```
4. Install dependencies:
   ```
   npm install
   ```
5. Start the development server:
   ```
   npm run dev
   ```
<<<<<<< Updated upstream
6. Open your browser and go to the URL shown in the terminal (usually http://localhost:3000](https://8jd91jt9-5173.inc1.devtunnels.ms/).
=======
6. Open your browser and go to the URL shown in the terminal (
   .
>>>>>>> Stashed changes

## Features Implemented

- Product Listing Page with:
  - Infinite scroll loading 8 products per page.
  - Category filter fetched from API.
  - Search functionality.
  - Loading indicator during data fetch.
- Product Detail Page with dynamic routing showing detailed product info.
- Cart functionality with add/remove items, cart persistence in localStorage.
- Cart page listing products with quantity and total price, with remove and clear options.
- Responsive UI for both mobile and desktop views.

## Assumptions and Limitations

- The product API used is https://fakestoreapi.com which may have limitations on pagination support.
- Infinite scroll is implemented with client-side pagination simulation as the API does not support real pagination parameters.
- Search filtering is client-side only.
- Cart persistence is done via localStorage, so clearing browser data will reset the cart.
- The "BUY NOW" button on product detail currently navigates back to the product list without actual purchase flow.
- Responsive UI is based on provided mobile reference and creative desktop layout but may need further refinement for all screen sizes.

## What Could Be Improved

- Implement real backend pagination if API supports it for better performance.
- Add user authentication and real purchase flow.
- Improve error handling and user feedback on API failures.
- Add unit and integration tests for components and context.
- Enhance UI/UX with animations, better styling, and accessibility improvements.
- Add quantity adjustment controls in the cart page.
- Optimize image loading with lazy loading techniques.

---

Thank you for using this application!
