const http = require('http');
const fs = require('fs'); // thư viên đọc ghi file
const { link } = require('fs/promises');
const sv = http.createServer((req, res) => {
    console.log(req.url);
    switch (req.url) {
        case '/': res.writeHead(200, "OK", { 'Content-type': 'text/html' });
            res.write('<h1>Day la trang home</h1>', (err) => {
                console.log(err);
            });
            res.end();
            break;
        default:
            fs.readFile(req.url.substring(1), (err, data) => {
                if (err) {
                    // throw err
                    res.writeHead(404, { 'Content-type': 'text/html' });
                    return res.end();
                };
                
                    res.writeHead(200, "OK", { 'Content-type': 'text/html' });
               
                res.write(data.toString('utf8'))
                return res.end();
            })
            break;
    }
});
sv.listen(8081);
console.log("server đã chạy")

