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
    path: "/builder/:tutorialId",
    name: "BuilderTutorial",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BuilderTutorial.vue"),
  },
  {
    path: "/builderQuiz/:sectionId",
    name: "BuilderQuiz",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BuilderQuiz.vue"),
  },
  {
    path: "/learning/:tutorialId",
    name: "Learning",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Learning.vue"),
  },
  {
    path: "/quizPassage/:sectionId",
    name: "QuizPassage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/QuizPassage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
