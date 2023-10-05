const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');
require('dotenv').config();
const db = require('./config/db')


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'))

const faviconPath = path.join(__dirname, 'public/icons', 'favicon.ico');
app.use(favicon(faviconPath));



app.get('/', (req, res) => {
    res.send('Backend for Visionary Solutions');
  });


// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });


