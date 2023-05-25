import About from "../pages/About";
import Home from "../pages/Home";
import HeaderOnly from "../layouts/HeaderOnly";
import NoLayout from "../layouts/NoLayout";

import {
  ChooseMiniTest,
  DoFullTest,
  FullTest,
  Result,
  MiniTest,
  DoMiniTest,
  SignIn,
  SignUp,
  Blog,
  DetailBlog,
  ResultDetail,
  ResultDetailMiniTest,
  NotFound,
  Profile,
  ManageBlog,
  Managetest,
  ManageUser,
  UploadBlog, 
  UploadTest,
  HistoryExam
} from "../pages";

const publicRoutes = [
  {
    path: "*",
    component: NotFound,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/signin",
    component: SignIn,
    layout: NoLayout,
  },
  {
    path: "/signup",
    component: SignUp,
    layout: NoLayout,

  },
  {
    path: "/admin/manageblog",
    component: ManageBlog,
    layout: NoLayout,
  },
  {
    path: "/admin/managetest",
    component: Managetest,
    layout: NoLayout,
  },
  {
    path: "/admin/manageuser",
    component: ManageUser,
    layout: NoLayout,
  },
  {
    path: "/admin/uploadtest",
    component: UploadTest,
    layout: NoLayout,
  },
  {
    path: "/admin/uploadblog",
    component: UploadBlog,
    layout: NoLayout,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/blog/:idblog",
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
    layout: HeaderOnly,
  },
  {
    path: "/fulltest/:slug/start",
    component: DoFullTest,
  },
  {
    path: "/fulltest/:slug/result/:id",
    component: Result,
  },
  {
    path: "/fulltest/:slug/result/detail/:id",
    component: ResultDetail,
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
    path: "/minitest/:numpart/:titletest/result/:id",
    component: Result,
  },
  {
    path: "/minitest/:numpart/:titletest/result/detail/:id",
    component: ResultDetailMiniTest,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/HistoryExam", 
    component: HistoryExam, 
  }
  
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
