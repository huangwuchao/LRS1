const request = require('request');

const http = require('http');

http.createServer((req,res)=>{
    /*
        类似于jquery ajax请求
    */
    res.writeHead(200,{
        'Access-Control-Allow-Origin':'*'
    });
    request('https://www.layui.com/demo/table/user', (error, response, body) => {
        res.end(body);
    });
}).listen(3006,()=>{
    console.log('server is running on http://localhost:3006')
})


