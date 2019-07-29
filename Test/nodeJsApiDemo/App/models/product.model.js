import mongoose from 'mongoose'
const productSchema=mongoose.Schema({
  prodname:{type:String},
  prodCategory: {field:  {type: String, enum:['final','row','garbage']}}
},{versionKey:false});
module.exports = mongoose.model("productSchema",productSchema);
