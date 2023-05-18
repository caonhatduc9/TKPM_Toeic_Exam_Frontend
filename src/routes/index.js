import About from "../pages/About";
import Home from "../pages/Home";
import HeaderOnly from "../layouts/HeaderOnly";
import {
  ChooseMiniTest,
  DoFullTest,
  FullTest,
  Result,
  MiniTest,
  DoMiniTest,
  SignIn,
  SignUp,
  Admin,
  Blog,
  DetailBlog,
} from "../pages";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path:"/signin",
    component: SignIn,
  },
  {
    path:"/signup",
    component: SignUp,
  },
  {
    path:"/admin/:type",
    component: Admin,
  },
  {
    path:"/blog",
    component: Blog,
  },
  {
    path:"/blog/:idblog",
    component: DetailBlog,
  },
  {
    path: "/about",
    component: About,
    layout: HeaderOnly,
  },
  {
    path: "/fulltest",
    component: FullTest,
  },
  {
    path: "/fulltest/:slug/start",
    component: DoFullTest,
  },
  {
    path: "/fulltest/:slug/result",
    component: Result,
  },
  {
    path: "/minitest",
    component: MiniTest,
  },
  {
    path: "/minitest/:numpart",
    component: ChooseMiniTest,
  },
  {
    path: "/minitest/:numpart/:titletest/start",
    component: DoMiniTest,
  },
  {
    path: "/minitest/:numpart/:titletest/result",
    component: Result,
  },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
