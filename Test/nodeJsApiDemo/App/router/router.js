import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan'

var app =require("../config/server");
app.use(bodyParser.urlencoded({limit: '50mb',extended:true}))
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(morgan("dev"))

app.use("/",require("./auth"));
app.use("/",require("./product"));
console.log("hello world")
//console.log('hello world')

//module.exports = router
