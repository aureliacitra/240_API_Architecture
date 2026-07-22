const express = require('express');
const connectDatabase = require('./config/db');

const app = express();
const PORT = 3000;

// Middleware for parsing JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

