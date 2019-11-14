import Home from "../Pages/Home/Home";
import User from "../Pages/User/User";
import Mine from "../Pages/Mine/Mine";
import SowingList from "../Pages/Sowing/SowingList";
import SowingAdd from "../Pages/Sowing/SowingAdd";
import SowingEdit from "../Pages/Sowing/SowingEdit";
import CourseAdd from "../Pages/Course/CourseAdd";
import CourseCategory from "../Pages/Course/CourseCategory";
import CourseList from "../Pages/Course/CourseList";
import CourseTopic from "../Pages/Course/CourseTopic";

//这里的侧边栏二级 明面上是二级  其实可以按照以及来配置
let routes = [
  { path: "/", component: Home, exact: true },
  { path: "/user", component: User },
  { path: "/mine", component: Mine },
  { path: "/sowingList", component: SowingList },
  { path: "/sowingAdd", component: SowingAdd },
  { path: "/sowingEdit", component: SowingEdit },
  { path: "/courseAdd", component: CourseAdd },
  { path: "/courseCategory", component: CourseCategory },
  { path: "/courseList", component: CourseList },
  { path: "/courseTopic", component: CourseTopic }
];
export default routes;
