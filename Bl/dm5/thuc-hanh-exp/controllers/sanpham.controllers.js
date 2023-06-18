exports.list = (req, res, next) =>{
    
    res.render('sanpham/list');

}

exports.add = (req, res, next) =>{
    
    res.render('sanpham/add');

}
exports.update = (req, res, next) =>{
    
    res.render('sanpham/update');

}

exports.delete = (req, res, next) =>{
    
    res.render('sanpham/delete');

}