const express= require("express");
const router = express.Router();
const products=require('../controllers/product.controller');

router.post("/getAllProducts",products.getAllProducts)


module.exports = router
