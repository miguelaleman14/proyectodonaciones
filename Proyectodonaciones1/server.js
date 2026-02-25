const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const donationRoutes = require('./routes/donationRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔥 ESTA LÍNEA ES LA QUE FALTABA
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.log(err));

app.use('/api/donaciones', donationRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});