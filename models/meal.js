const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner', 'snack'],
    required: true,
  },
  calories: {
    type: Number,
    required: true,
    min: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  }
}, {timestamps: true});


const Meal = mongoose.model('Meal', mealSchema);

module.exports = User;
