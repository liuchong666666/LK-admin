import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/lk_data');

const userSchema = mongoose.Schema({
  // 用户名
  user_name: { type: String, required: true },
  //密码
  user_pwd: { type: String, required: true },
  join_time: { type: Date, default: Date.now },
  real_name: { type: String, default: '' },
  icon_url: { type: String, default: '' },
  sex: { type: Number, enum: [-1, 0, 1], default: -1 },
  phone: { type: String, default: '' },
  e_mail: { type: String, default: '' },
  intro_self: { type: String, default: '' },
});

const User = mongoose.model('User', userSchema);
export default User;
