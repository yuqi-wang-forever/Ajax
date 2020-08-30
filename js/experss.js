// 1.引入express
const express = require('express');
// 2.创建应用对象
const app = express();
// 3.创建路由规则
//  request: 是对请求报文的封装
//  response:   是对响应报文的封装
app.get('/server', (request, response) => {
    // 设置响应头    允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //  设置响应
    response.send("Hello Express");
});
// post请求
app.all('/server', (request, response) => {
    // 设置响应头    允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置5 的响应头，依旧报错，要把post改为all all可以接受任何请求
    response.setHeader('Access-control-Allow-Headers', '*');
    //  设置响应
    response.send("Hello Express POST");
});

app.all('/Json-server', (request, response) => {
    // 设置响应头    允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置5 的响应头，依旧报错，要把post改为all all可以接受任何请求
    response.setHeader('Access-control-Allow-Headers', '*');
    //  设置Json响应体
    const data = {
        name: 'Samantha Carter'
    }
    let str = JSON.stringify(data);
    response.send(str);
});
// ie缓存
app.all('/ie', (request, response) => {
    // 设置响应头    允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置5 的响应头，依旧报错，要把post改为all all可以接受任何请求
    response.setHeader('Access-control-Allow-Headers', '*');
    //  设置响应
    response.send("Hello IE cache1145");
});

// 请求超时和异常
app.all('/delay', (request, response) => {
    // 设置响应头    允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置5 的响应头，依旧报错，要把post改为all all可以接受任何请求
    response.setHeader('Access-control-Allow-Headers', '*');
    //  设置响应
    setTimeout(() => {
        response.send("延时响应");
        // 三秒后将结果返回给客户端
    }, 3000);

});

// 请求取消
app.all('/abort', (request, response) => {
    // 设置响应头    允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置5 的响应头，依旧报错，要把post改为all all可以接受任何请求
    response.setHeader('Access-control-Allow-Headers', '*');
    //  设置响应
    setTimeout(() => {
        response.send("延时响应");
        // 三秒后将结果返回给客户端
    }, 3000);

});
// Jquery服务
app.all('/jquery', (request, response) => {
    // 设置响应头    允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置5 的响应头，依旧报错，要把post改为all all可以接受任何请求
    response.setHeader('Access-control-Allow-Headers', '*');
    //  设置响应
    // response.send('Hello Jquery Ajax');
    const data = {
        name: 'Jack',
        gender: 'male'
    };
    const str = JSON.stringify(data);
    response.send(str);

});
// axios服务
app.all('/axios', (request, response) => {
    // 设置响应头    允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置5 的响应头，依旧报错，要把post改为all all可以接受任何请求
    response.setHeader('Access-control-Allow-Headers', '*');
    //  设置响应
    // response.send('Hello Jquery Ajax');
    const data = {
        name: 'Jack',
        gender: 'male',
        age: 60
    };
    const str = JSON.stringify(data);
    response.send(str);

});
// fetch服务
app.all('/fetch', (request, response) => {
    // 设置响应头    允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置5 的响应头，依旧报错，要把post改为all all可以接受任何请求
    response.setHeader('Access-control-Allow-Headers', '*');
    //  设置响应
    // response.send('Hello Jquery Ajax');
    const data = {
        name: 'Jack',
        gender: 'male',
        age: 60
    };
    const str = JSON.stringify(data);
    response.send(str);

});
// 响应一个页面
app.get('/home', (request, response) => {
    response.sendfile(__dirname + '/index.html');
});

app.get('/data', (request, response) => {
    response.send('用户数据')
});
app.all('/jsonp', (request, response) => {
    const data = {
        name: 'Jack'
    }
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
});

app.all('/check', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    const data = {
        exits: 1,
        msg: '用户名已存在'
    };
    let str = JSON.stringify(data);
    response.send(str);
});

app.all('/jquery-jsonp', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    const data = {
        name: '尚硅谷',
        city: ['北京', '天津', '深圳']
    };
    // 将数据转化为字符串
    let str = JSON.stringify(data);
    // 接收callback参数
    let cb = request.query.callback;
    response.end(`${cb}(${str})`);
    //response.end(str);
});
// cors
app.get('/cors', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Method', '*');
    response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8000');

    response.send('hello cors');
})
// 4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已启动，8000端口监听中------");
})