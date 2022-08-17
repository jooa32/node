//module
const express = require('express');
const app = express();
const PORT = 3000;

//routing 
const home = require("./routes/home");

//app setting
app.set("views", "./views");
app.set("view engine", "ejs");



//현재폴더 -> routes -> home 안에 있는 js 를 불러와줘 

app.use("/", home); // use -> middleware 를 등록해주는 메소드 


//3000번포트 - 내보내주기 
module.exports = app;
