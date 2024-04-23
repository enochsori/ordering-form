'use strict';

// import the needed node_modules.
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { stock, customers } = require('./data/inventory');

const mutableStock = { ...stock };
const mutableCustomers = [...customers];

express()
  // Below are methods that are included in express(). I chain them for convenience.
  // -------------------------------------------------------------------------------

  // This will give log more info to the console.
  // https://npmjs.com/pagkage/morgan
  .use(morgan('tiny'))
  .use(express.json())

  //   Any requests for static files will go into the public folder
  .use(express.static('public'))
  .use(cors())
  //   Endpoints

  // ---------------------------------------------------------------------------------
  //   Post api to get order
  .post('/order', (req, res) => {
    const {
      firstName,
      lastName,
      email,
      address,
      country,
      province,
      postcode,
      order,
      size,
    } = req.body;

    // validation
    let errorId = null;

    // 1. validate the email expression
    // const EMAIL_EXP = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+.[A-Za-z0-9-]+/;
    // if (!EMAIL_EXP.text(email)) {
    //   errorId = 'missing-data';
    // }
    // 2. validate the availability of the ordered item
    if (order !== 'tshirt') {
      if (mutableStock[order] === 0) {
        errorId = 'unavailable';
      } else {
        mutableStock[order] -= 1;
      }
    } else {
      if (mutableStock[order][size] === 0) {
        errorId = 'unavailable';
      } else {
        mutableStock[order][size] -= 1;
      }
    }

    // 3. validate shipping availability
    if (country.toLowerCase() !== 'canada') {
      errorId = 'undeliverable';
    }

    // 4. Check repeated customer (address)
    mutableCustomers.forEach((customer) => {
      if (customer.postcode.trim() === postcode.trim()) {
        errorId = 'repeat-customer';
      }
    });

    const status = errorId ? 'error' : 'success';

    // Response
    if (status === 'success') {
      // update customer list
      mutableCustomers.push({
        firstName,
        lastName,
        email,
        address,
        province,
        postcode,
        country,
      });

      res.status(200).json({ status });
    } else {
      res.status(400).json({ status, error: errorId });
    }
  })

  .get('/test', (req, res) => {
    console.log('touched');

    res.status(200).json({
      status: 200,
      message: 'Connected!',
    });
  })

  // This is our catch all endpoint.
  .get('*', (req, res) => {
    res.status(404).json({
      status: 404,
      message: 'This is obviously not what you are looking for.',
    });
  })
  //   Node spins up our server and sets it to listen on port 8000.

  .listen(8000, () => console.info(`Listening on port 8000....`));
