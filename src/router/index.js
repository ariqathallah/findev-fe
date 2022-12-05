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
const Account = () => import("../components/Account.vue");

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
        path: "/posts/postID",
        name: "PostDetail",
        component: PostDetail,
      },
      {
        path: "/my-projects",
        name: "MyProjects",
        component: MyProjects,
      },
      {
        path: "/my-projects/postID",
        name: "MyProjectDetail",
        component: MyProjectDetail,
      },
      {
        path: "/create",
        name: "Create",
        component: Create,
      },
      {
        path: "/account",
        name: "Account",
        component: Account,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
