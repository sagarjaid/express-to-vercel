const express = require('express');
const app = express();
const path = require('path');
const cors = require("cors");

const router = require('./routes/index');

app.use(express.static('public'));
app.use(cors());
app.use(express.urlencoded( {extended: true }));
app.use(express.json());

app.use(`/api`, router);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));

module.exports = app;
