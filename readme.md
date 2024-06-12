Assignment Overview:
This project is a backend system for a Twitter-like application, built using the MongoDB as the database and Node.js as the runtime environment. 
The purpose of this assignment is to demonstrate the ability to create a scalable, robust and efficient backend system that handles user authentication, tweet management, and other social media functionalities focusing on scalability, performance, maintainability and DDD principles.

How to run the Application: 

Follow these steps to set up and run the application locally:

Clone the repository:
git clone https://github.com/yourusername/twitter-backend.git
cd twitter-backend

Install dependencies:
npm install

Set up the environment variables:
Create a .env file in the root directory and add the necessary configuration settings (see Configuration).

Start the development server:
npm run dev

Access the application:
The backend server will be running at http://localhost:5000.

Dependencies:
The following libraries, frameworks, and tools are required to run the application:

Node.js
Express.js
MongoDB
Mongoose
dotenv
bcryptjs
jsonwebtoken

Installation Instructions:
To install the dependencies and set up the development environment, follow these steps:

Install Node.js:
Download and install Node.js from the official website: Node.js

Install MongoDB:
Download and install MongoDB from the official website: MongoDB

Clone the repository:
git clone https://github.com/yourusername/twitter-backend.git
cd twitter-backend

Install project dependencies:
npm install

Configuration:
The application requires certain configuration settings to run. 
Create a .env file in the root directory and include the following variables:
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/healthflexTwitter
JWT_SECRET=234957681238

Testing:
To run tests and ensure the application's correctness:

Set up the test environment:
Ensure that you have the necessary test configuration in your .env file.

Run the tests
npm test

Issues and Troubleshooting:
Common issues users might encounter and how to troubleshoot them:

Database Connection Error:
Ensure MongoDB is running and the connection string in the .env file is correct.

Port Already in Use:
Make sure the port specified in the .env file is not being used by another application.

Invalid Token Error:
Ensure that the JWT_SECRET in the .env file matches the secret used for generating tokens.

Contact Information:

Meghadarshini S - meghadarshini.02@gmail.com
Project Link - https://github.com/yourusername/yourproject
