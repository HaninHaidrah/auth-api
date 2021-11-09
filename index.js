'use strict';

const { db } = require('./src/models/index');
const {start} = require('./src/server');
require('dotenv').config();

db.sync().then(() => {
  start(process.env.PORT);
});
