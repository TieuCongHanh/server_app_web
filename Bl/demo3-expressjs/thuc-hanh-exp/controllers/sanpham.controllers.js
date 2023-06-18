exports.getList = (req, res, next) =>{
  
   let hoten = "Tieu Cong Hanh";
   let objSP = {id:4, name:"Máy tính", fullname: "may tinh xach tay", email: "hanh34@gmail.com" ,group: "mobile" ,status:"thieu tien"};


    res.render('sanpham/list', { user: hoten, sp: objSP });
}

exports.addProduct = (req, res, next) =>{

    if(req.method == 'POST'){
        res.send(req.body);
    }

    res.render('sanpham/add');
}