import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/registerForm",
    name: "UsRegisterFormerForm",
    component: () =>
      import(/* webpackChunkName: "UserForm" */ "../views/RegisterForm.vue"),
  },
  {
    path: "/logInForm",
    name: "LogInForm",
    component: () =>
      import(/* webpackChunkName: "LogInForm" */ "../views/LogInForm"),
  },
  {
    path: "/tutorials",
    name: "Tutorials",
    component: () =>
      import(/* webpackChunkName: "courses" */ "../views/Tutorials.vue"),
  },

  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  {
    path: "/builder:tutorialId",
    name: "BuilderTutorial",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BuilderTutorial.vue"),
  },
{
    path: "/builderQwiz",
    name: "BuilderQwiz",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/BuilderQwiz.vue"),
  },
];



const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
