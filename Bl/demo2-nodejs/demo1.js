const http = require('http');
const server = http.createServer( ( req , res ) => {
   res.writeHead(200, "ket noi thanh cong roi!!!", {
    'Content-Type' : 'text/html' // phải báo html thì meta mới có tác dụng
   });

   res.write("<meta charset='utf-8' /> <h1> Xin Chào lớp nhé </h1> ");
   res.end();

} );

server.listen(8081, 'localhost' , (err) =>{
    if(err)
    console.log(err);
    console.log("Server đang chạy ở địa chỉ : http://localhost:8081");
});
// chạy lệnh : node demo1.js
// mở trình duyệt web, vào địa chỉ trên để xem kết quả