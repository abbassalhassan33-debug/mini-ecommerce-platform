# Backend Architecture

## Overview

The backend is built using Node.js and Express.

It provides API endpoints required by the frontend application.

---

## Technology

- Node.js
- Express.js

---

## Responsibilities

The backend handles:

- Authentication
- Product data
- API communication

---

## Authentication Flow

The login process:

1. User enters credentials.
2. Frontend sends request to backend.
3. Backend validates user.
4. Backend returns authentication token.
5. Frontend stores token.
6. Protected routes become available.

---

## API

Example:

POST

/auth/login

Used for user authentication.

---

## Error Handling

The backend returns:

- Appropriate HTTP status codes
- Error messages
- Validation responses

---

## Design Decisions

Express was selected because:

- Lightweight
- Easy REST API creation
- Widely used in production environments

---

# API Testing

Postman was used to test and validate backend API endpoints during development.

The API testing process included:

- Testing authentication endpoints
- Verifying request payloads
- Checking HTTP status codes
- Validating API responses
- Testing error scenarios

Example workflow:

1. Send login credentials using a POST request.
2. Verify successful authentication response.
3. Use the returned token for protected API requests.
4. Confirm expected data responses.

Postman helped ensure that the backend API behaved correctly before integrating it with the React frontend.
