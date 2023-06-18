var md = require('../../models/user.model')
exports.list =async (req, res, next) =>{

    try {
        let listUser = await md.userModel.find();
        if(listUser){
          return res.status(200).json(
                {
                    msg: 'Lấy dữ liệu thành công',
                    data: listUser
                }
            );
        }else {
            return res.status(204).json(
                {
                    msg: 'không có dữ liệu'
                }
            )
        }
    } catch (error) {
        return res.status(error.status).json({
            msg: error.message
        });
    }

    res.status(200).json( {msg : 'danh sách tài khoản'} );
}
exports.add = (req, res, next) =>{
    
    res.status(201).json( {msg : 'thêm mới'} );
}
exports.edit = (req, res, next) =>{
    
    res.status(200).json( {msg : 'sửa'} );
}
exports.delete = (req, res, next) =>{
    
    res.status(200).json( {msg : 'xóa'} );
}