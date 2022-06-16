require('dotenv').config();
const express = require('express');
const app = express();
const orderRoutes = require('./routes/orders.routes');
const userRoutes = require('./routes/customers.routes');
const itemRoutes = require('./routes/items.routes');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Server running'));

app.use('/orders', orderRoutes);

app.use('/customers', userRoutes);
app.use('/items', itemRoutes);
// app.use('/orders', orderRoutes);

app.listen(PORT, () => {
  console.log('Server listening on PORT:', PORT);
})