import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import User from "./views/User.vue";
import Left from "./views/user-nav/Left.vue";
import Con from "./views/user-nav/Content.vue";
import Foot from "./views/user-nav/Foot.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/user",
      name: "user",
      component: User,
      redirect: "/user/views",
      // 嵌套命名视图
      children: [
        {
          path: "views",
          components: {
            default: Left,
            con: Con,
            foo: Foot
          }
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      // 路由独享的守卫(当然，在组件内部也能守卫)
      beforeEnter: (to, from, next) => {
        console.log("*****");
        console.log("路由独享的前置守卫：beforeEnter");
        console.log(`${from.path} ==> ${to.path}`);
        console.log("*****");
        next();
      },
      component: () => import("./views/About.vue")
    }
  ]
});
router.beforeEach((to, from, next) => {
  console.log("全局前置守卫：beforeEach");
  // console.log(from); // 来自哪里
  // console.log(to); // 去向何方
  console.log(`${from.path} ==> ${to.path}`);
  // if (to.path != "/") {
  //   next("/");
  // }
  next();
});
router.beforeResolve((to, from, next) => {
  console.log("全局解析守卫：beforeResholve");
  console.log(`${from.path} ==> ${to.path}`);
  next();
});
router.afterEach((to, from) => {
  console.log("全局后置钩子：afterEach");
  console.log(`${from.path} ==> ${to.path}`);
});
export default router;
