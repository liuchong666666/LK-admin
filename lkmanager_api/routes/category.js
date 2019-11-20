import express from 'express';
import Category from '../models/Category';

const router = express.Router({});
/**
 * 往数据库插入一条记录
 *
 */
router.post('/category/api/add', (req, res, next) => {
  const main_title = req.body.main_title || '哈哈';
  let main_total_count = 1;
  const main_is_show = req.body.main_is_show || '1';
  const main_sort = req.body.main_sort || '1';
  const sub_title = req.body.sub_title || '哈哈';
  const sub_total_count = req.body.sub_total_count || '1';
  const sub_is_show = req.body.sub_is_show || '1';
  const sub_sort = req.body.sub_sort || '1';
  // Category.findOne(
  //   {
  //     main_title: req.body.main_title,
  //   },
  //   (err, cate) => {
  //     if (err) {
  //       res.next(err);
  //     }
  //     // console.log('**************');
  //     // console.log(cate.sub_course);
  //     // console.log('**************');
  //   }
  // );

  Category.updateOne(
    //如果数据库中存在 就去数据库里面的对应位置数组末尾添加子分类数据
    { main_title: req.body.main_title },
    {
      $push: {
        sub_course: {
          sub_title,
          sub_total_count,
          sub_is_show,
          sub_sort,
        },
      },
    },
    (err, resul) => {
      if (err) {
        return next(err);
      }
      console.log(resul.n, resul.ok);
      if (resul.n !== 0 && resul.ok !== 0) {
        res.json({
          error_code: 200,
          result: '添加子类分类成功',
        });
        console.log('**************');
      } else {
        //操作数据库
        const category = new Category({
          main_title,
          main_total_count,
          main_is_show,
          main_sort,
          sub_course: [
            {
              sub_title,
              sub_total_count,
              sub_is_show,
              sub_sort,
            },
          ],
        });
        category.save((err, result) => {
          if (err) {
            return next(err);
          }
          res.json({
            status_code: 200,
            result: '添加分类成功',
          });
        });
      }
    }
  );
});
/**
 * 获取分类列表
 */
router.get('/category/api/list', (req, res, rext) => {
  // 1. 接收传递的参数
  let { page, pageSize } = req.query;
  page = Number.parseInt(page);
  pageSize = Number.parseInt(pageSize);
  // 2. 查询数据
  Category.find()
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .exec((err, cate) => {
      if (err) {
        return next(err);
      }

      res.json({
        status_code: 200,
        result: cate,
      });
    });
});

module.exports = router;
