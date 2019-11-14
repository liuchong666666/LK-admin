//*引入所有，然后用as别名    使用时候就通过点来取
import * as constants from "./actionTypes";
import { getHomeData, getSowingData } from "./../Api/index";
//0.获取首页数据
export const getHomeDataAction = () => {
  return dispatch => {
    //请求网络数据
    getHomeData()
      .then(res => {
        if (res.status_code === 200) {
          const homeData = res.result[0];
          console.log("getSowingDataActionRES:", homeData);
          dispatch({
            type: constants.INIT_HOME_DATA,
            homeData
          });
        }
      })
      .catch(error => {
        alert("首页数据请求失败:", error);
      });
  };
};

//1.获取轮播图列表数据
export const getSowingDataAction = () => {
  console.log("getSowingDataAction");
  return dispatch => {
    // 请求网络数据
    getSowingData()
      .then(res => {
        if (res.status_code === 200) {
          const sowingData = res.result;
          console.log(
            "getSowingDataActionRES:",
            sowingData,
            constants.INIT_SOWING_DATA
          );
          dispatch({
            type: constants.INIT_SOWING_DATA,
            sowingData
          });
        }
      })
      .catch(() => {
        alert("首页数据请求失败！");
      });
  };
};
