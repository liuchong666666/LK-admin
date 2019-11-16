import express from 'express';
import Students from '../models/Students';
const router = express.Router({});

/**添加学生 */
router.post('/stu/api/add', (req, res, next) => {
  //  // 注册账号
  const reg_account = req.body.reg_account || '';
  //  // 昵称
  const user_name = req.body.user_name || '';
  //  // 年龄
  const user_age = req.body.user_age || '';
  //  // 性别
  const user_sex = req.body.user_sex || '';
  //  // 地区
  const area = req.body.area || '';
  //  // 手机号码
  const phone = req.body.phone || '';
  //  // 积分
  const points = req.body.points || 0;
  //操作数据库
  const stu = new Students({
    reg_account,
    user_name,
    user_age,
    user_sex,
    area,
    phone,
    points,
  });
  // res.send(user);
  stu.save((err, result) => {
    if (err) {
      return next(err);
    }
    res.json({
      status_code: 200,
      result: '添加学生成功',
    });
  });
});
/**获取学生数据（所有） */
router.get('/stu/api/list', (req, res, next) => {
  // 1. 接收传递的参数
  let { page, pageSize } = req.query;
  page = Number.parseInt(page);
  pageSize = Number.parseInt(pageSize);
  // 2. 查询数据
  Students.find()
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .exec((err, stu) => {
      if (err) {
        return next(err);
      }
      res.json({
        status_code: 200,
        result: stu,
      });
    });
});
/**获取学生数据总数 */
router.get('/stu/api/count', (req, res, next) => {
  // 1. 接收传递的参数
  let { page, pageSize } = req.query;
  page = Number.parseInt(page);
  pageSize = Number.parseInt(pageSize);
  // 2. 查询数据
  Students.find().count((err, count) => {
    if (err) {
      return next(err);
    }
    res.json({
      status_code: 200,
      result: count,
    });
  });
});
module.exports = router;
