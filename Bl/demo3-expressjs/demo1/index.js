var express = require('express');
var app = express();
// tao trang wed

app.put('/', (req, res) =>{
res.send("<h1> xin chào chả nem nướng</h1>")
});

app.put('/bomaylanhat.cc',(req,res) =>{
    res.send("<h1> đây là tất lưới </h1>")
})


app.listen(8080, (err) =>{
    if(err)
        console.log(err);

        console.log('server đang chạy')
});