import Vue from "vue";
import Router from "vue-router";
import BtnLabelMove from "./views/BtnLabelMove.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/1",
      name: "BtnLabelMove",
      component: BtnLabelMove
    }
  ]
});
