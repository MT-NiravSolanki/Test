import mongoose from 'mongoose'
const userSchemaModel=mongoose.Schema({
  fullname:{firstname:{type:String,default: null},lastname:{type:String,default: null}},
  password:{type:String,default: null,required: true },
  email:{type:String,default: null,required: true },
  userImagePath:{type:String,default: null }
},{versionKey:false});


const userWorkSchemaModel=mongoose.Schema({
  userId:{type:String},
  userWork:{type:String,default: null,required: true }
},{versionKey:false});

const userSchema = mongoose.model('userSchema', userSchemaModel);
const userWorkSchema = mongoose.model('userWorkSchema', userWorkSchemaModel);

module.exports = {userWorkSchema,userSchema}
