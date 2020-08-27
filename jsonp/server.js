const express = require('express');
const app = express();
app.get('/home', (request, response) => {
    // 响应一个页面
    response.sendfile(__dirname + '/14-同源策略.html');

});

app.get('/data', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('用户数据');
})

app.listen(9000, (request, response) => {
    console.log('9000 服务启动');
})