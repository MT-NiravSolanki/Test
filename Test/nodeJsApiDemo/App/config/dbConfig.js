import mongoose from 'mongoose'
mongoose.connect("mongodb://localhost:27017/userSchema",{userNewUrlParser:true}).then(()=>{
  console.log('db sucessfully connected');
  console.log('hello db');
}).catch((error)=>{
  console.log(error);
})
