var cookieParser = require('cookie-parser');
var express = require('express');
var logger = require('morgan');
var path = require('path');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var messageRouter = require("./routes/message");

var app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chat/api/messages', messageRouter);

module.exports = app;
