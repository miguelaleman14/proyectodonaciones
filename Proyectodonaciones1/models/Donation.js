const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  monto: {
    type: Number,
    required: true
  },
  institucion: {
    type: String,
    required: true
  },
  mensaje: {
    type: String
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Donation', donationSchema);