import { lazy } from "react";
import { RouteObject } from "react-router-dom";

// 使用 lazy 实现路由懒加载
const NotFound = lazy(() => import("@/pages/404"));
const Chat = lazy(() => import("@/pages/chat/chat"));

// 定义路由配置
const routes: RouteObject[] = [
  { 
    path: "/",
    element: <Chat />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
