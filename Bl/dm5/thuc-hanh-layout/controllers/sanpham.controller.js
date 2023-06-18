var myMD = require('../models/sanpham.model');
exports.list = async (req, res, next) => {
  // tạo chức năng lọc
  let dieu_kien_loc = null;
  if (typeof (req.query.price) != 'undefined') {
    dieu_kien_loc = { price: { $gte: req.query.price } };
    // dieu_kien_loc = { price: req.query.price};
  }

  // let list = await myMD.spModel.find( dieu_kien_loc ).sort( {name:1} );
  let list = await myMD.spModel.find(dieu_kien_loc).populate('id_theloai');
  console.log(list);
  res.render('sanpham/list', { listSP: list });
}
exports.add = async (req, res, next) => {
  let msg = "";
  // lấy ds thể loại truyền ra view
  let listTL = await myMD.theloaiModel.find();
  if (req.method == "POST") {
    // viết kiểm tra hợp lệ dữ liệu...

    // tạo đối tượng model để gán dữ liệu
    let objSP = new myMD.spModel();
    objSP.name = req.body.name;
    objSP.price = req.body.price;
    objSP.description = req.body.description;
    objSP.id_theloai = req.body.theloai;
    // thực hiện ghi vào CSDL
    try {
      let new_sp = await objSP.save();
      console.log(new_sp);
      msg = "đã thêm thành công";
    } catch (error) {
      msg = "lỗi ghi CSDL" + error.message;
      console.log(error);
    }

  }
  res.render('sanpham/add', { msg: msg, listTL: listTL });
}

exports.editSP = async (req, res, next) =>{
  let msg = '';
  let idsp = req.params.idsp; // dùng params khi viết bên routes
  let objsSP = await myMD.spModel.findById(idsp);
  let listTL = await myMD.theloaiModel.find();


  res.render('sanpham/edit-sp',{msg:msg, objsSP : objsSP, listTL: listTL});
}