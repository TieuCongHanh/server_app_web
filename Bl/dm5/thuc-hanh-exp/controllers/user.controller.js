let md = require('../models/user.model');
exports.Login = async (req, res, next) => {
    let msg = '';
    if (req.method == "post") {
    try {
        let objU = new moveBy.userModel.findOne({username:req.body.username});
        console.log(objU);
        if(objU != null){
            // có tồn tại user
            if(objU.passwd== req.body.passwd){
                // đăng nhập thành công
                // ghi dữ liệu thành công
                req.session.userLogin = objU;
                // chuyển trang
             return res.redirect('/users');
            }else {
           msg = 'sai password';
            }
        }else{
            msg = 'không tồn tạo user';
        }
    } catch (error) {
        msg = error.message;
    }


    }
    res.render('user/login', { msg: msg });
}
exports.Reg = async (req, res, next) => {
    let msg = '';
   
    if (req.method == "POST") {
        console.log(req.body);
        // kiểm tra hợp lệ dữ liệu
        if (req.body.passwd != req.body.passwd2) {
            msg = 'Xác nhận password không đúng';
            return res.render('user/reg', { msg: msg });
        }
        // tự viết thêm kiểm tra hộ lệ dữ liệu
        try {
            let objU = new md.userModel();
            objU.username = req.body.username;
            objU.passwd = req.body.passwd;
            objU.email = req.body.email;

            await objU.save();
            msg = 'Đăng kí thành công';
        } catch (error) {
            msg = error.message;
        }
    }
    res.render('user/reg', { msg: msg });
}
exports.Logout = (req, res, next) => {

}

var fs= require('fs');
exports.demoUpload = (req, res, next) =>{
    msg ='';
    
    if(req.method == "POST"){
        console.log(req.body, req.file);
        // di chuyển file vào thư mục upload/
        try {
            fs.renameSync(req.file.path, "./public/uploads/" + req.file.originalname);
            let url_file = 'uploads/' +req.file.originalname;
            // dùng url file để ghi vào csdl
            msg = "địa chỉ ảnh: " + url_file;
        } catch (error) {
            msg = error.message;
        }
    }



    res.render('user/upload',{ msg:msg , url_file: url_file});
}