import { createRouter, createWebHistory } from "vue-router";

// lazy loading
const Login = () => import("../views/Login.vue");
const Register = () => import("../views/Register.vue");
const Dashboard = () => import("../views/Dashboard.vue");

const Posts = () => import("../components/Posts.vue");
const PostDetail = () => import("../components/PostDetail.vue");
const MyProjects = () => import("../components/MyProjects.vue");
const MyProjectDetail = () => import("../components/MyProjectDetail.vue");
const Create = () => import("../components/Create.vue");
const User = () => import("../components/User.vue");

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
