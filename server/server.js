'use strict';

// import the needed node_modules.
const express = require('express');
const morgan = require('morgan');

const { stock, customers } = require('./data/inventory');

const mutableStock = { ...stock };
const mutableCustomers = { ...customers };

express()
  // Below are methods that are included in express(). I chain them for convenience.
  // -------------------------------------------------------------------------------

  // This will give log more info to the console.
  // https://npmjs.com/pagkage/morgan
  .use(morgan('tiny'))
  .use(express.json())

  //   Any requests for static files will go into the public folder
  .use(express.static('public'))

  //   Endpoints

  // ---------------------------------------------------------------------------------
  // This is our catch all endpoint.
  .get('*', (req, res) => {
    res.status(404).json({
      status: 404,
      message: 'This is obviously not what you are looking for.',
    });
  })
  //   Node spins up our server and sets it to listen on port 8000.

  .listen(8000, () => console.log(`Listening on port 8000....`));
