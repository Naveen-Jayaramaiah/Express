const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

/* CORS */
app.use(cors({
    origin: '*',
    methods: ['GET','PUT','POST','PATCH','DELETE'],
    allowedHeaders: 'Content-Type,Authorization,Origin,X-Requested-With,Accept'
}));

app.use(express.json());

//Import Routes
const productsRoute = require('./routes/products');
const orderRouter = require('./routes/order');

//use routes
app.use('/api/products', productsRoute)
app.use('/api/orders', orderRouter);

// app.get('/', (req, res) => {
//   res.send('Hello Buggers!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

module.exports = app;