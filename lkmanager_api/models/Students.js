import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/lk_data');

const stuSchema = mongoose.Schema({
  // 注册账号
  reg_account: { type: String, required: true },
  // 昵称
  user_name: { type: String, required: true },
  // 年龄
  user_age: { type: Number, required: true, default: 0 },
  // 性别
  user_sex: { type: String, required: true },
  // 地区
  area: { type: String, required: true },
  // 手机号码
  phone: { type: String, required: true },
  // 积分
  points: { type: Number, default: 0 },
  // 注册时间
  reg_time: { type: Date, default: Date.now() },
  // 登录时间
  last_login_time: { type: Date, default: Date.now() },
});

const Student = mongoose.model('Student', stuSchema);
export default Student;
// Schema ： 一种以文件形式存储的数据库模型骨架，不具备数据库的操作能力

// Model ： 由 Schema 发布生成的模型，具有抽象属性和行为的数据库操作
