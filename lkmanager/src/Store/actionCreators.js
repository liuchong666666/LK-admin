//*引入所有，然后用as别名    使用时候就通过点来取
import * as constants from './actionTypes';
import {
  getHomeData,
  getSowingData,
  getUserData,
  getStuData,
} from './../Api/index';
//0.获取首页数据
export const getHomeDataAction = () => {
  return dispatch => {
    //请求网络数据
    getHomeData()
      .then(res => {
        if (res.status_code === 200) {
          const homeData = res.result[0];
          dispatch({
            type: constants.INIT_HOME_DATA,
            homeData,
          });
        }
      })
      .catch(error => {
        alert('首页数据请求失败:', error);
      });
  };
};

//1.获取轮播图列表数据
export const getSowingDataAction = () => {
  return dispatch => {
    // 请求网络数据
    getSowingData()
      .then(res => {
        if (res.status_code === 200) {
          const sowingData = res.result;
          dispatch({
            type: constants.INIT_SOWING_DATA,
            sowingData,
          });
        }
      })
      .catch(() => {
        alert('首页数据请求失败！');
      });
  };
};

//2.用户登录
export const getUserDataAction = (data, callback) => {
  return dispatch => {
    //2.1发起网络请求
    getUserData(data)
      .then(res => {
        if (res.status_code === 200) {
          const userData = res.result;
          dispatch({
            type: constants.INIT_USER_DATA,
            userData,
          });
          // 成功的回调
          callback && callback(userData);
        } else {
          alert(res.result);
        }
      })
      .catch(err => {
        console.log(err);
        alert(err);
        // alert('登陆失败!');
      });
  };
};
//3.获取所有学生用户数据
export const getStuDataAction = parmas => {
  return dispatch => {
    //请求网络数据
    getStuData(parmas)
      .then(res => {
        if (res.status_code === 200) {
          const stuDataList = res.result;
          dispatch({
            type: constants.INIT_STUDENTS_DATA,
            stuDataList,
          });
        }
      })
      .catch(err => {
        alert('学生用户数据请求失败', err);
      });
  };
};
