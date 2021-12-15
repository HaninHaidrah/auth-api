'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./models/logger.js');


const port=process.env.PORT;
const cors = require('cors');
const morgan = require('morgan');


// App Level MW
app.use(cors());
app.use(morgan('dev'));

const v1Routes = require('./routes/v1.js');
const v2Routes=   require('./routes/v2.js');
const authRoutes = require('./routes/auth.routes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(logger);

app.use(authRoutes);
app.use('/todo', v1Routes);
app.use('/api/v2', v2Routes);


// MIDDLEWARES for error
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
