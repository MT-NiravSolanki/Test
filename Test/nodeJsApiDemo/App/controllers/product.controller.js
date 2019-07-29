var products = require("../models/product.model")

exports.getAllProducts=(req,resp)=>{
  const prodname=req.body.prodname;
  const prodCategory=req.body.prodCategory;
  let product = new products({prodname,prodCategory})
  product.save(function(error){
    if(error) throw err;
    resp.send({message:'Product inserted sucessfully'})
  })

}
