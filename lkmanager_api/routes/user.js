import express from 'express';
import User from './../models/User';
import md5 from 'blueimp-md5';
const router = express.Router({});

const S_KEY = 'WaYjH1314.ItLikE.CoM';

/**管理员专用（测试） */
router.post('/user/api/add', (req, res, next) => {
  const user_name = req.body.user_name || '';
  const user_pwd = md5(req.body.user_pwd + S_KEY) || '';
  // res.send(req.body);

  //2.操作数据库
  const user = new User({
    //用户名
    user_name: user_name,
    //密码：
    user_pwd: user_pwd,
  });
  // res.send(user);
  user.save((err, result) => {
    if (err) {
      return next(err);
    }
    res.json({
      status_code: 200,
      result: '添加管理员成功',
    });
  });
});

/**用户名和密码登录 */
router.post('/user/api/login', (req, res) => {
  //1.获取数据
  const user_name = req.body.user_name;
  const user_pwd = md5(req.body.user_pwd + S_KEY);
  // res.send(req.body);
  //2.查询数据
  User.findOne({ user_name: user_name }, (err, user) => {
    if (err) {
      return next(err);
    }
    //2.1如果用户存在
    if (user !== null) {
      //2.2判断密码
      if (user.user_pwd === user_pwd) {
        res.json({
          status_code: 200,
          result: {
            token: user._id,
            user_name: user.user_name,
            real_name: user.real_name,
            icon_url: user.icon_url,
            sex: user.sex,
            phone: user.phone,
            e_mail: user.e_mail,
            join_time: user.join_time,
            intro_self: user.intro_self,
          },
        });
      } else {
        res.json({
          error_code: 1,
          result: '密码错误!',
        });
      }
    } else {
      res.json({
        error_code: 1,
        result: '输入的口令不存在！',
      });
    }
  });
});

module.exports = router;
