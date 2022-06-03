const express = require('express');
const app = express();
const postRoutes = require('./routes/posts.routes');
const userRoutes = require('./routes/users.routes');
const itemRoutes = require('./routes/items.routes');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Server running'));

app.use('/posts', postRoutes);

app.use('/users', userRoutes);
app.use('/items', itemRoutes);
// app.use('/orders', orderRoutes);

app.listen(PORT, () => {
  console.log('Server listening on PORT:', PORT);
})