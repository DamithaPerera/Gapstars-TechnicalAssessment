const express = require('express');
const expressLayout = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require("passport");
const connectDB = require('./config/database');


const app = express();

// Passport Config
require('./models/passport')(passport);

require('dotenv').config()

// database connection
connectDB();

// EJS
app.use(expressLayout);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({extended: false}));

// Express session
app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(((req, res, next) => {
    res.locals.success_msg = req.flash('sucess_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
}));

// Routes
app.use('/', require('./modules/welcome/welcome.router'));
app.use('/users', require('./modules/user/user.router'));
app.use('/cats', require('./modules/cats/cat.router'));

// not found page
app.get('*', (req, res) => {
    res.render('404');
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server start ${PORT}`));