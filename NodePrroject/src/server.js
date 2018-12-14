const express = require('express');

//引入配置文件
const {port,host,root}= require('./config.json');
//引入路由文件
const Router= require('./router')
//console.log(express);
let app= express();

//利用中间件创建静态资源服务器
app.use(express.static(root))

//创建路由

///路由
app.use(Router);

app.listen(port,()=>{
    console.log(`server is running on ${host}:${port}`)
}) 