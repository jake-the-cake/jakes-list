import Mongoose from 'mongoose'

const GroceryItem = new Mongoose.Schema({
  name: {
    type: String
  },
  category: {
    type: String,
    required: true
  }
})

export const GroceryItemModel = Mongoose.model( 'GroceryItem', GroceryItem )