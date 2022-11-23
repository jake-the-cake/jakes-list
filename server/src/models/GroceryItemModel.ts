import Mongoose from 'mongoose'

const GroceryItemSchema = new Mongoose.Schema({
  name: {
    type: String
  },
  category: {
    type: String,
    required: true
  }
})