const {userWorkSchema,userSchema}= require("../models/user.model")
var base64Img = require('base64-img');


exports.register=(req,resp)=>{
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  userSchema.findOne({'email':email}).then((user)=>{
    if(user){
      resp.send({message:'sorry, email already registered'})
    }
    else{
      var register = new serSchema({fullname:{firstname,lastname},password,email})
      register.save(function(error){
        if(error) throw err;
        resp.send({message:'registred sucessfully'})
      })
    }
  })
}

exports.updateUser=(req,resp)=>{
  console.log(req.body)
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  registerUser.updateOne({email}, {username, password}, function(err, res) {
    if (err) throw err;
    resp.send({message:'Document updated'})
  });
}

exports.updateUserProfile=(req,resp)=>{
  console.log(req.body)
  const imgUrl = base64Img.img("data:image/png;base64,"+req.body.imgBase64,"./App/images/","demo",function(err, filepath) {console.log(filepath);});
  const email = req.body.email;
    console.log(__dirname)
  registerUser.updateOne({email}, {userImagePath:imgUrl}, function(err, res) {
    if (err) throw err;
    resp.send({message:'Profile image updated'})
  });
}

exports.authenticateUser=(req,resp)=>{
  const username=req.body.username;
  const password=req.body.password;
  registerUser.findOne({'email':username,password:password}).then((user)=>{
    if(user){
      resp.send({message:'You have login sucessfully'})
    }else{
        resp.send({message:'Invalid email or password'})
    }
  });
}

exports.getAllUserList=(req,resp)=>{
  userSchema.find({}).then((allUserList)=>{
    resp.send({data:allUserList})
  })
}

export const deleteAllData=(req,resp)=>{
  registerUser.remove({},(error)=>{
    if(error){
      resp.send({message:'sorry something missing'})
    }else{
      resp.send({message:"data deleted sucessfully"})
    }
  })
}

export const search=(req,resp)=>{
  console.log(req.body.query);
  registerUser.find({'fullname.firstname': {$regex : "^" + req.body.query}}).then((userList)=>{
    resp.send({data:userList})
  })
}

exports.saveWork=(req,resp)=>{
  const userId = req.body.userId;
  const userWork = req.body.userWork;
  var userWorkObj = new userWorkSchema({userId,userWork})
  userWorkObj.save(function(error){
    if(error) throw err;
    resp.send({message:'saved  sucessfully'})
  })
}

exports.getAllWorkData=(req,resp)=>{
  userWorkSchema.find({}).then((allWork)=>{
    resp.send({data:allWork})
  })
}
exports.getAllWorkDataForPerticularUser=(req,resp)=>{
  userWorkSchema.find({userId:req.body.userId}).then((allWork)=>{
    resp.send({data:allWork})
  })
}
