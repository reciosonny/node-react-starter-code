const mongoose = require('mongoose');
const { Schema } = mongoose;


const todoSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  completed: {
    type: Boolean
  }
});

mongoose.model('Todo', todoSchema, 'todos');