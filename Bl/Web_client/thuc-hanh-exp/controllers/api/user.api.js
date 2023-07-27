var md = require('../../../models/user.models')
const bcrypt = require('bcrypt');
exports.list= async (req,res,next)=>{
    try {
        let listUser= await md.userModel.find();
        if(listUser){
            return res.status(200).json(
                {
                    msg:'lấy dữ liệu thành công',
                    data: listUser
                }
            );
        }else{
            return res.status(204).json(
                {
                    msg: 'không có dữ liệu'
                }
            );
        }
    } catch (error) {
        return res.status(error.status)
                .json({
                    msg:error.message

                });
    }
}
exports.login= async (req,res,next)=>{
    console.log(req.body);
    
    try {
        const user = await md.userModel.findOne({user: req.body.user});
        console.log(user);
        if (!user) {
            console.log("Không tồn tại tài khoản");
            return res.status(500).json({msg: "sai thông tin đăng nhập"})
        }else{
            const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isPasswordMatch) {
                console.log("sai mật khẩu");
                return res.status(500).json({msg: "sai mật khẩu"})
            }else{
                console.log('Đăng nhập thành công');
                return res.status(201).json({ msg: "Đăng nhập thành công"})
            }
        }        
 
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Sai tài khoản hoặc mật khẩu"})
        
    }

}
exports.register = async (req, res, next) => {
    if (req.method === 'POST') {
        console.log(req.body);
        let msg = ''; // Khởi tạo biến msg để chứa thông báo kết quả đăng ký

        // Kiểm tra hợp lệ dữ liệu, ở đây ta giả sử tất cả các trường đều hợp lệ
        // Bạn có thể thêm kiểm tra hợp lệ dữ liệu ở các trường khác tùy ý

        try {
            // Tạo đối tượng user từ model và gán giá trị từ req.body
            const salt = await bcrypt.genSalt(10);
            let objU = new md.userModel();
            objU.user = req.body.user;
            objU.password = await bcrypt.hash(req.body.password, salt);
            objU.img = req.body.img;
            objU.email = req.body.email;
            objU.vaitro = req.body.vaitro;

            // Lưu thông tin người dùng vào CSDL
            await objU.save();
            msg = 'Đăng ký thành công';
        } catch (error) {
            msg = error.message; // Nếu có lỗi, gán thông báo lỗi vào biến msg
        }

        res.json({ msg }); // Trả về kết quả thông qua JSON response
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};

