const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');
require('dotenv').config();
const db = require('./config/db')

const app = express();
app.use(cors({
    origin: ["http://localhost:8080", "https://todaysvision.onrender.com"]}));
app.use(bodyParser.json());
app.use(morgan('tiny'))



const faviconPath = path.join(__dirname, 'public/icons', 'favicon.ico');
app.use(favicon(faviconPath));

// Require the customer router
const customerRouter = require('./routes/customerRoute');
app.use('/customers', customerRouter); // Mount the customer router at '/customers'
app.use('/products', require('./routes/productRoute'))


// user routes
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);


// login
const loginRoutes = require('./routes/loginRoute');
app.use('/login', loginRoutes);


// Serve static files from the Vue.js build
app.use(express.static(path.join(__dirname, 'dist')));

// This route will now serve your `index.html` (and other static files)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});



// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });


