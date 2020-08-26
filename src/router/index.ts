import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/bubble-sort",
    name: "BubbleSort",
    alias: "/",
  },
  {
    path: "/selection-sort",
    name: "SelectionSort",
  },
  {
    path: "/insertion-sort",
    name: "InsertionSort",
  },
  {
    path: "/merge-sort",
    name: "MergeSort",
  },
  {
    path: "/quick-sort",
    name: "QuickSort",
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
