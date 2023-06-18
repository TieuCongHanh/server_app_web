var db = require('./db');
// định nghĩa khuôn mẫu cho sản phẩm
const spSchema = new db.mongoose.Schema(
  {
    // đĩnh nghãi khuôn maux

    name: { type: String, require: true },
    price: { type: Number, require: true }, // để true là yêu cầu bắt buộc
    description: { type: String, require: false },
    id_theloai: {type: db.mongoose.Schema.Types.ObjectId, ref: 'theloaiModel'}
  },
  {
    // ra cái bảng làm việc
    collection: 'san_pham'
  }
)
// định nghĩa model
let spModel = db.mongoose.model('spModel', spSchema);

// làm cho thể loại
let theloaiSchema = new db.mongoose.Schema(
  {
    name: {type:String, require:true}
  },
  {
    collection: 'the_loai'
  }
);
let theloaiModel = db.mongoose.model("theloaiModel", theloaiSchema);

module.exports = {spModel, theloaiModel};
