const http = require('http');
const sv = http.createServer( (req , res) => {
    console.log(req.url);
    switch(req.url){
        case'/': // trang chủ
        homePage(req , res);
        break;
        case'/gioithieu.html': gioithieu(req, res); break;
        default:
            res.writeHead(200 , {'Content-Type' : 'text/html'});
            res.end("Trang web khong ton tai");
            break;
    }
 });
 const homePage = (req , res) =>{
    res.writeHead(200 , {'Content-Type' : 'text/html'});
    res.end("<h1> Day la trang home <h1/>");
 }
 const gioithieu = (req , res) =>{
    res.writeHead(200 , {'Content-Type' : 'text/html'});
    res.end("<h1> Day la trang gioi thieu <h1/>");
 }
 sv.listen(8081);
 console.log("server đã chạy")