# Mini Task Tracker

Mini Task Tracker is a web application that allows users to manage tasks with secure user authentication. The project is divided into two main components:

1. **Backend**: Built using NestJS, handles user authentication, task management, and database interactions.
2. **Frontend**: Built using Vue.js, provides a user-friendly interface for managing tasks.

## Features

- **User Authentication**: Secure signup and login using email and password.
- **Task Management**: Users can create, update, delete, and view tasks.
- **Responsive Design**: The frontend is designed to work well on various devices.
- **API Integration**: The frontend interacts with the backend through RESTful APIs.
- **Database**: MongoDB is used for storing user and task data.
- **gRPC Microservices**: Integrates with microservices using gRPC in the backend.

## Installation

### Prerequisites

- Node.js
- npm
- MongoDB

### Backend Setup (NestJS)

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nithieshnaik/Mini-Task-Tracker-.git
   cd Mini-Task-Tracker-backend


Install dependencies:
  
  ```bash
  npm install


Set up environment variables:
Create a .env file in the root of the backend project and configure the following variables:


Run the backend server:

  ```bash
npm run start:dev
The backend server will start at http://localhost:3000.

Frontend Setup (Vue.js)
Navigate to the frontend directory:

bash
cd ../Mini-Task-Tracker-frontend
Install dependencies:

bash
npm install
Set up environment variables:

Create a .env file in the root of the frontend project and configure the following variable:

env
VUE_APP_API_URL=http://localhost:3000
This should point to the backend API URL.

Run the frontend server:

bash
npm run serve
The frontend application will start at http://localhost:8080.

Usage
Signup/Login: Create an account or log in with your email and password.
Manage Tasks: Add, edit, delete, and view your tasks via the user interface.
API Documentation
The backend API documentation can be accessed using Swagger at:

bash
=
http://localhost:3000/api
Running Tests
Backend
Unit Tests:

bash
Copy code
npm run test
End-to-End Tests:

bash
Copy code
npm run test:e2e
Frontend
Unit Tests:

bash
Copy code
npm run test:unit
End-to-End Tests:

bash
Copy code
npm run test:e2e
Contributing
We welcome contributions! Here’s how you can help:

Fork the repository.
Create a new branch for your feature: git checkout -b feature/your-feature-name.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feature/your-feature-name.
Open a pull request.
