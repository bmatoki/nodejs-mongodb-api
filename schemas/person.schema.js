const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'first name is required'],
    validate: {
      validator: p => /^[a-zA-Z ]+$/i.test(p),
      message: 'Invalid first name format',
    },
  },
  lastname: {
    type: String,
    required: [true, 'last name is required'],
    validate: {
      validator: p => /^[a-zA-Z ]+$/i.test(p),
      message: 'Invalid last name format',
    },
  },
});

module.exports = mongoose.model('person', personSchema);
