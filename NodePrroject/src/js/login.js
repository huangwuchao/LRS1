//用户信息路由
const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
// 获取Mongo客户端
const MongoClient = mongodb.MongoClient;

let Router = express.Router();
//登录信息
Router.post('/',bodyParser.urlencoded({ extended: false }),(req,res)=>{
    let {username,password} = req.body;
    MongoClient.connect('mongodb://localhost:27017',(err, database)=>{
        if(err) throw err;
        let db = database.db('h5_1809');// 使用1809数据库
        let user = db.collection('user');// 使用user集合
        password = isNaN(password) ? password : password*1;//转为数字
        // 查询数据是否存在
        user.findOne({username,password},(err,result)=>{
            let data;
            if(result){//存在即可登录
                data={
                    code:1,
                    data:result,
                    msg:'success'
                }
            }else{
                data={
                    code:0,
                    data:[],
                    msg:'fail'
                }
            }
            res.send(data);
        });
        database.close();// 关闭数据库，避免资源浪费
    });
});

module.exports = Router;