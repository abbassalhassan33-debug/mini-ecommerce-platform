# Mini E-Commerce Platform

A full-stack mini e-commerce application built using React and Node.js.

This project was developed as a full-stack engineering assessment demonstrating frontend development, backend API integration, authentication, state management, and user shopping flows.

---

# Features

## Authentication

- User login
- Token-based authentication
- Protected application routes

## Products

- Product listing page
- Product detail page
- Product descriptions
- Stock information
- Product variants

## Cart

Users can:

- Add products to cart
- Increase/decrease quantity
- Remove products
- Change selected variants
- View subtotal
- View total price

## Wishlist

Users can:

- Add products to wishlist
- Remove products
- Move wishlist items to cart

## Checkout

Users can:

- Review order summary
- Confirm order
- Clear cart
- View order confirmation

---

# Technology Stack

## Frontend

- React
- React Router
- Context API
- CSS

## Backend

- Node.js
- Express.js

## Development Tools

- Git & GitHub
- Postman
- Visual Studio Code

---

# Project Structure

- Backend
- FrontEnd
- docs

---

# Running The Application

## Backend

Navigate to backend:

- cd backend

Install dependencies:

- npm install

Start server:

- npm start

Backend runs on:

- http://localhost:5000

---

## Frontend

Navigate to frontend:

Install dependencies:

- cd frontend

Install dependencies:

- npm install

Run application:

- npm run dev

Frontend runs on:

- http://localhost:5173

---

# Architecture Documentation

Detailed documentation:

- Frontend Architecture:
  `docs/FRONTEND.md`

- Backend Architecture:
  `docs/BACKEND.md`

- Database Design:
  `docs/DATABASE.md`

- AI Development Methodology:
  `docs/AI_USAGE.md`

---

# Git Strategy

This project uses a monorepo structure.

Frontend and backend are stored in the same repository because they belong to the same application lifecycle.

## Branch Strategy

The main branch contains stable code.

Feature development can be organized using branches:

- feature/authentication
- feature/cart
- feature/responsive-ui
- feature/documentation

## Commit Strategy

Commits are organized around meaningful changes:

Examples:

- Add authentication flow

- Implement cart management

- Improve responsive UI

- Add technical documentation

---

# Testing

API testing was performed using Postman.

Tested flows include:

- Authentication requests
- API responses
- Error handling
- Frontend integration
- Shopping flows
