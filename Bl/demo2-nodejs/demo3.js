const http = require('http');
const fs = require('fs'); // thư viên đọc ghi file
const sv = http.createServer((req, res) => {
    console.log(req.url);
    switch (req.url) {
        case '/logo.png': // trả về file logo
            fs.readFile('./logo.png' , (err, data) => {    //fs.readFile đọc file chuyển tới ảnh
                if (err)
                    throw err;
                res.end(data);
            })
            break;
        case '/': // trang chủ
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Trang chu</h1> <img src="/logo.png" />');      // scr="/logo.png" = case'/logo.png
            break;
        default:
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('dia chi khong ton tai');
            break;
    }
});
sv.listen(8081);
console.log("server đã chạy")