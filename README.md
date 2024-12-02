# Contact Management System 📇

## Access Site
**Live Demo**: [View Contact Management System](https://674d9b93f8ac4d279e83da3a--statuesque-marigold-7cad11.netlify.app/)

## Overview

The Contact Management System is a full-stack application designed to manage contact records efficiently. Users can create, read, update, and delete (CRUD) contact information through an intuitive user interface built with React. The backend is powered by Node.js and Express, and data is stored in MongoDB, ensuring fast data retrieval and persistent storage.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Features

- **Create**: Add new contacts to the database through a simple form.
- **Read**: View a list of all contacts with detailed information.
- **Update**: Modify existing contact information.
- **Delete**: Remove contacts from the database.

## Installation and Setup

### Prerequisites

- Ensure Node.js (version 12 or higher) is installed.
- MongoDB should be running locally or you can use a MongoDB Atlas cloud instance.

### Client-Side Setup

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```

2. Install client dependencies:
   ```bash
   npm install
   ```

3. Start the client development server:
   ```bash
   npm start
   ```
   The React development server will be accessible at `http://localhost:3000`.

### Server-Side Setup

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```

2. Install server dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node src/app.js
   ```
   The server will be available at `http://localhost:5000`.

### MongoDB Connection

The MongoDB connection URL and port number are directly defined in `src/app.js`:
```javascript
const MONGO_URI = 'your-mongodb-connection-string';
const PORT = 5000;
```

## Usage

1. Run the client and server simultaneously to view and interact with the application.
2. Open `http://localhost:3000` in your browser to use the app.

## Acknowledgements

Thanks to the creators of React, Node.js, Express, MongoDB, and Tailwind CSS for providing the tools that made this project possible.
