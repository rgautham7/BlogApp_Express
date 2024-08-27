# BlogApp_Express

A simple blog application built with Express.js and MongoDB, allowing users to create, view, and manage blog posts.

## Application Overview

**BlogApp_Express** is designed as a basic full-stack web application. It demonstrates how to integrate a server-side application with a NoSQL database, providing a dynamic user interface for managing content. The application is suitable for beginners looking to learn how to build a web app with Node.js, Express, and MongoDB.

### Key Features

- **Create Blog Posts:** Add new blog posts with a title, snippet, and body.
- **View All Blog Posts:** Display a list of all blog posts on the homepage.
- **View Single Blog Post:** Click on a blog post title to view the full content.
- **Delete Blog Posts:** Remove blog posts from the database.
- **404 Error Handling:** Custom 404 page for handling non-existent routes.

### Prerequisites

Ensure you have the following installed on your local development machine:

- Node.js
- npm
- MongoDB (or a MongoDB Atlas account)

### Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/rgautham7/BlogApp_Express
```

Add your MongoDB Public key Add your environment variables to .env in the root of the project.
```bash
DB_KEY=your-mongodb-key
```

Install dependencies
```bash
npm install
```

Run the development server
```bash
nodemon app
```

Open the demo Open http://localhost:3000 with your browser to see the result.
