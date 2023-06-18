const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/bh_306')
     .catch( (err) =>{
        console.log("lỗi kết nối");
        console.log(err);
     });
     
     module.exports = {mongoose}