# Frontend Architecture

## Overview

The frontend is developed using React and follows a component-based architecture.

The application separates pages, reusable components, and global state management.

---

## Technology

- React
- React Router
- Context API
- CSS

---

## Folder Structure

frontend/src

components/

- ProductCard
- ProtectedRoute

Pages/

- LoginPage
- ProductListPage
- ProductDetailPage
- CartPage
- WishlistPage
- CheckoutPage
- OrderConfirmationPage

context/
-CartContext
-WishlistContext

---

## Routing

React Router manages navigation between pages.

Available routes:

- /login
- /products
- /products/:id
- /cart
- /wishlist
- /checkout
- /order-confirmation

Protected routes prevent unauthorized users from accessing the application.

---

## State Management

React Context API was used for global state.

### Cart Context

Responsible for:

- Adding items
- Removing items
- Updating quantity
- Managing variants

### Wishlist Context

Responsible for:

- Adding products
- Removing products
- Moving items to cart

---

## Responsive Design

The application uses:

- CSS Grid

---

## Routing

React Router manages navigation between pages.

Available routes:

- /login
- /products
- /products/:id
- /cart
- /wishlist
- /checkout
- /order-confirmation

Protected routes prevent unauthorized users from accessing the application.

---

## State Management

React Context API was used for global state.

### Cart Context

Responsible for:

- Adding items
- Removing items
- Updating quantity
- Managing variants

### Wishlist Context

Responsible for:

- Adding products
- Removing products
- Moving items to cart

---

## Responsive Design

The application uses:

- CSS Grid
- Flexbox
- Media queries

The UI supports:

- Desktop
- Tablet
- Mobile screens

---

## Design Decisions

Context API was chosen because the application has a limited amount of global state.

Using Redux would add unnecessary complexity for this project size.

- Media queries

The UI supports:

- Desktop
- Tablet
- Mobile screens

---

## Design Decisions

Context API was chosen because the application has a limited amount of global state.

Using Redux would add unnecessary complexity for this project size.
