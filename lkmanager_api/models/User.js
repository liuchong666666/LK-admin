import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/lk_data');

const userSchema = mongoose.Schema({
  //姓名
  real_name: { type: String, required: false },
  // 用户名
  user_name: { type: String, required: true },
  //密码
  user_pwd: { type: String, required: true },
  //头像
  icon_url: { type: String, required: false },
  //性别
  // sex: { type: Number, enum: [-1, 0, 1], default: -1 },
  sex: { type: String, required: false },
  //手机号
  phone: { type: String, required: false },
  //邮箱
  e_mail: { type: String, required: false },
  //加入时间
  join_time: { type: Date, default: Date.now() },
  //自我介绍
  intro_self: { type: String, required: false },
});

const User = mongoose.model('User', userSchema);
export default User;
