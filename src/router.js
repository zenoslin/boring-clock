import Vue from "vue";
import Router from "vue-router";
import BtnLabelMove from "./views/BtnLabelMove.vue";
import Reversal from "./views/Reversal.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/1",
      name: "BtnLabelMove",
      component: BtnLabelMove
    },
    {
      path: "/2",
      name: "Reversal",
      component: Reversal
    }
  ]
});
