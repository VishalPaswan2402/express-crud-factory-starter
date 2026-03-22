<img src="./images//logo.png" alt="Express CRUD Factory Starter Logo" width="100%"/>

# Express CRUD Factory Starter

[![Npm Pa](https://img.shields.io/badge/NPM-Package-blue)](https://www.npmjs.com/package/express-crud-factory) [![Npm Pa](https://img.shields.io/badge/GitHub-Package%20Repo.-blue)](https://github.com/VishalPaswan2402/express-crud-factory) [![Project Downloads](https://img.shields.io/npm/dt/express-crud-factory?label=Project%20Setup%20Repo.)](https://github.com/VishalPaswan2402/express-crud-factory-starter) [![Contributors](https://img.shields.io/badge/Contributors-1-orange)](https://github.com/VishalPaswan2402)



A ready-to-use Express.js project setup using the npm package **express-crud-factory** for quickly building CRUD APIs.

This repository demonstrates how to structure and build scalable APIs using **Express, MongoDB, and Express CRUD Factory**.

NPM Package :
[https://www.npmjs.com/package/express-crud-factory](https://www.npmjs.com/package/express-crud-factory)

Express-Crud-Factory Repo :
[https://github.com/VishalPaswan2402/express-crud-factory](https://github.com/VishalPaswan2402/express-crud-factory)

## Why This Package?
Many frontend developers struggle to practice API integration because they don't have a  proper backend API.

**Express-Crud-Factory solves this problem.**

It provides a **simple backend API system** that you can connect with:

-   React
    
-   Angular
    
-   Vue
    
-   Next.js

This allows you to **practice real production-like API workflows**.

## Features

-   Ready-to-use Express server
    
-   CRUD API using **express-crud-factory**

-   MongoDB integration with Mongoose
    
-   Error handling middleware
    
-   Clean and scalable project structure
    
-   Environment variable configuration
    
-   Beginner friendly setup

## Project Structure

```
express-crud-factory-starter 
│
├── models
│ 	└── postModel.js
│ 	└── userModel.js 
│  
├── .env
├── .gitignore 
├── index.js
├── package-lock.json
├── package.json  
└── README.md
```

## Installation

Clone the repository  
```
git clone https://github.com/VishalPaswan2402/express-crud-factory-starter.git  
```
Go to the project folder 
```
cd express-crud-factory-starter
```
Install dependencies
```
npm install
npm install express-crud-factory
```

**Environment Variables**

Create a `.env` file in the root directory.
```
# Replace the following with your own port and MongoDB URL and jwt-secret-key if needed

PORT=YOUR_PORT_NUMBER
DATABASE_URL="YOUR_MONGODB_DATABASE_URL"
JWT_SECRET="YOUR_JWT_SECRET_KEY"
```
**Run the Server**
```
node index.js
```
Server will start at :
```
http://localhost:8080
```
On successfull run, you will see this on terminal :
```
Server is running on port 8080
MongoDB connected successfully
```

## API Endpoints
```
# User API Endpoints
POST Request : /user/signup
GET Request : /user/:userId
POST Request : /user/login
DELETE Request : /user/:userId

# Post Articles API Endpoints
POST Request : /user/post/:userId/new-post
GET Request : /user/post/:userId/:postId/get-post
PATCH Request : /user/post/:userId/:postId/edit-post
DELETE Request : /user/post/:userId/:postId/delete-post
GET Request : /user/post/:postId/share-post
PATCH Request : /user/post/:userId/:postId/pin-post
GET Request : /user/post/:userId/all-post
PATCH Request : /user/post/:userId/:postId/trash-post
```

## Projects You Can Build

Using this API setup you can practice building these following projects :

-   Blog Website
    
-   Notes Application
    
-   Article Platform

-   Social Media Feed
    
-   Full Stack MERN Apps

## Target Audience

This repository and package is helpful for:

-   Frontend developers learning API integration
    
-   Students learning backend concepts
    
-   MERN stack learners

## License

This project is licensed under the ISC License.  

[https://express-crud-factory-license.onrender.com/](https://express-crud-factory-license.onrender.com/)
  
Copyright (c) 2026 Vishal Paswan


## Author

**Vishal Paswan**
Web Developer  
Passionate about building interactive and practical developer tools.
[https://github.com/VishalPaswan2402](https://github.com/VishalPaswan2402)

## Support

⭐ If this project helps you, consider giving it a star on [Express-Crud-Factory ](https://github.com/VishalPaswan2402/express-crud-factory) and [Express-Crud-Factory-Starter](https://github.com/VishalPaswan2402/express-crud-factory-starter)

Your support helps improve the project and motivates further development.