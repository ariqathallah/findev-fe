import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

import Posts from "../components/Posts.vue";
import PostDetail from "../components/PostDetail.vue";
import MyProjects from "../components/MyProjects.vue";
import MyProjectDetail from "../components/MyProjectDetail.vue";
import Create from "../components/Create.vue";
import User from "../components/User.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "/",
        name: "Posts",
        component: Posts,
      },
      {
        path: "/posts/asd",
        name: "PostDetail",
        component: PostDetail,
      },
      {
        path: "/my-projects",
        name: "MyProjects",
        component: MyProjects,
      },
      {
        path: "/my-projects/asd",
        name: "MyProjectDetail",
        component: MyProjectDetail,
      },
      {
        path: "/create",
        name: "Create",
        component: Create,
      },
      {
        path: "/users",
        name: "User",
        component: User,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
