import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const epPortfolioSchema = new Schema({
  epNum: {
    type: Number,
    required: true
  }
});
module.exports = mongoose.model('epPortfolio', epPortfolioSchema);
