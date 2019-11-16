import * as constants from './actionTypes';

//默认的数据
const defaultState = {
  homeData: {},
  sowingData: [],
  userData: {},
  stuDataList: [],
};

export default (state = defaultState, action) => {
  if (action.type === constants.INIT_HOME_DATA) {
    const newState = JSON.parse(JSON.stringify(state)); //这种方式比较消耗内存
    newState.homeData = action.homeData;
    return newState;
  } else if (action.type === constants.INIT_SOWING_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.sowingData = action.sowingData;
    return newState;
  } else if (action.type === constants.INIT_USER_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    //把用户数据存入本地
    sessionStorage.setItem('userData', JSON.stringify(action.userData));
    newState.userData = action.userData;
    return newState;
  } else if (action.type === constants.INIT_STUDENTS_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.stuDataList = action.stuDataList;
    return newState;
  }

  return state;
};
