# Mini-Whatsapp-Clone
A simple CRUD chat application built with Node.js, Express.js, MongoDB, Mongoose, and EJS
# Mini WhatsApp Clone

A simple chat application built using Node.js, Express.js, MongoDB, Mongoose, and EJS. This project demonstrates CRUD (Create, Read, Update, Delete) operations by allowing users to create, edit, view, and delete chat messages stored in a MongoDB database.

## Features

- Create a new chat
- View all chats
- Edit existing messages
- Delete chats
- Data stored in MongoDB
- Server-side rendering with EJS

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- HTML
- CSS
- Method Override

## Folder Structure

```
Mini-Whatsapp/
│
├── models/
│   └── chat.js
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── public/
│   └── style.css
│
├── app.js
├── init.js
├── package.json
└── README.md
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/mini-whatsapp.git
```

2. Install dependencies

```bash
npm install
```

3. Make sure MongoDB is running locally.

4. Insert sample data

```bash
node init.js
```

5. Start the server

```bash
node app.js
```

6. Open your browser

```
http://localhost:8080/chats
```

## CRUD Operations

- Create Chat
- Read Chats
- Update Message
- Delete Chat

## Database

MongoDB

Database Name:

```
whatsapp
```

Collection:

```
chats
```

## Future Improvements

- User Authentication
- Real-time messaging using Socket.io
- Search chats
- Timestamps formatting
- Responsive UI
- Emoji support

## License

This project is for learning purposes.
