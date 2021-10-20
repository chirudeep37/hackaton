const express = require('express')

require('dotenv').config();
const app = express();

const homepage = require('./routes/home');

app.get('/', homepage);

app.listen(process.env.PORT, () => {
    console.log(`App listening at http://localhost:${process.env.PORT}`)
  })

