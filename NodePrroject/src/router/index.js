//把路由封装成模块

const express= require('express');

let Router= express.Router();


Router.get('/home',(red,res)=>{
    res.send('home')
})

module.exports= Router;