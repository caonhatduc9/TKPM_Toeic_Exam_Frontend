import About from "../pages/About";
import Home from "../pages/Home";
import HeaderOnly from "../layouts/HeaderOnly";
import { DoFullTest, FullTest } from "../pages";

const publicRoutes = [
  {
    path: "/",
    component: Home,
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
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
