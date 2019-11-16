<!--
 * @Author: lc
 * @Date: 2019-11-09 12:21:43
 * @Description:
 -->

#### 撩课后台管理系统

### 一级路由

# 数据分析

    /home
    Data.jsx

# 用户中心

# 课程管理

# 运营中心

# 广告中心

# 登录

# 注册

### 二级路由

### 目录

    Api：封装请求数据的函数
    Components：组件
    Common：通用的文件夹
    Pages：一级路由能够直达的页面组件
    Router：路由
    Store：redux

form 里面只是按钮，只要点击了按钮 就会提交，不管是不是 submit。

### 通过 Link 传数据给下一个路由

const { sowingData } = this.props;
console.log("轮播图数据：", sowingData);

 <Link
   to={{
     pathname: "/sowingEdit",
     // 这里的state是传数据给下一个路由
     state: { sowing }
   }}
 >
   编辑
 </Link>

下个路由接收这个数据 通过 this.props.location.state;//接收路由的信息 通过 location

### 将参数字符串转为对象

<input
ref="e_time"
type="text"
className="form-control input-sm"
placeholder="请填写下架的链接"
value={this.state.e_time}
onChange={e => this.\_dealInputValue(e, "e_time")}
/>
type 为字符串 e_time
this.setState({
[type]: e.target.value
});

### 通过 this.refs 获取当前所有加了 ref 的元素，

然后通过 this.refs[imgRef]获取某个 ref 元素，，，，， imgRef 为元素上的 ref="xxx"的 xxx 值

### 获取输入框的属性

e.target.name
e.target.value

### 输入框内按下回车键

<input
name="user_pwd"
type="password"
className="form-control"
placeholder="密码"
onChange={e => this.onInputChange(e)}
onKeyUp={e => {
this.onInputKeyUp(e);
}}
/>
onInputChange(e){}
onInputKeyUp(e) {
if (e.keyCode === 13) {
this.onSubmit();
}
}
onSubmit(e){}

### axios：当不是 formdata 的形式数据时，传给后端时候会将整个数据作为键值对中的键 ('data':'') 然后 值 value 为 空字符串

//上面元素是 div 不是 form 表单
可以通过 URLSearchParams 来处理
let params = new URLSearchParams();
params.append('user_name', user_name);
params.append('user_pwd', user_pwd);
//发送请求
reqLogin(params)

//创建 formData 对象也可以
let formData = new FormData();
formData.append("image_title", image_title);
formData.append("image_url", image_url);
formData.append("image_small_url", image_small_url);
formData.append("image_link", image_link);
formData.append("s_time", s_time);
formData.append("e_time", e_time);
//发送请求
addSowingData(formData)

### 分页插件 rc-pagination

https://github.com/react-component/pagination
安装：
yarn add rc-pagination

使用
import RCPagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css'

说明：pagination 组件里边要传入俩个参数，一是 current 当前页，二是 total 总记录数，pageSize 是每一页的记录数量默认为 10

### //上传图片的时候应该是传文件 file 对象 而不是 base64 字符串

    this.props.addCourseData.course_page = course_page;
    this.props.addCourseData.course_page_url = this.refs.course_page.files[0];

### 用了 Router 包裹的才具有 this.props.history

没用的话 就用 withRouter 包裹组件 然后再用就可以了 https://www.cnblogs.com/luowenshuai/p/9526341.html

解决路由监听网址输入或者刷新报错 使用 HashRouter https://blog.csdn.net/weixin_39168678/article/details/79756305
