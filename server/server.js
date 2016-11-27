const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan');
const path = require('path');
const config = require('./config/configs');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});


app.use(morgan('dev'));

app.use(express.static(__dirname + '/app'));

let port = config.port;
app.listen(port);



console.log('App is listening on', port);