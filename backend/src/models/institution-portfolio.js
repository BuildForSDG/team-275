import mongoose from 'mongoose';

const { Schema } = mongoose;
const instPortfolioSchema = new Schema({
  id: {
    type: Number,
    required: true
  }
});
module.exports = mongoose.model('instution_portfolio', instPortfolioSchema);
