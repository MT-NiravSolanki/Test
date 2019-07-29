import express from 'express';
const http = require('http');
var app =express()

 {/*const server = http.createServer((req,resp)=>{
  resp.statusCoe =200;
  resp.setHeader('Content-Type','text/plain');
  resp.end("hello world");
});*/}
app.listen(4000,()=>{
  console.log("server running");
})

module.exports = app;
