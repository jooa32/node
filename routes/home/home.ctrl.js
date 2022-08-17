"use strict";

const hello = (req, res)=>{
    res.render("home/index")
}


const login = (req, res)=> {
    //controller 요청에 대한 기능을 하는부분 
    res.render("home/login")
}


module.exports = {
    hello, 
    login
};

