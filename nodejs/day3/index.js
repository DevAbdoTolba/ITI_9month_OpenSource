const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
require('dotenv').config({ path: '../nodejs/day3/.env' });

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(require('./middleware/logger'));
app.use('/posts', postRoutes);

app.use(require('./middleware/notFound'));


mongoose.connect(process.env.MONGO_URI)
.then(() => {

  console.log('Connected to MongoDB successfully');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})
.catch((err) => console.error('Failed to connect to MongoDB', err));
