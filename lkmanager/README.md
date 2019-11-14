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
