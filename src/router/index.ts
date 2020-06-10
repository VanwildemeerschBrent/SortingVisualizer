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
    alias: "/",
    path: "/bubble-sort",
    name: "BubbleSort",
    component: () => import(/* webpackChunkName: "sort_bubble" */ "../views/BubbleSort.vue"),
  },
  {
    path: "/selection-sort",
    name: "SelectionSort",
    component: () => import(/* webpackChunkName: "sort_selection" */ "../views/SelectionSort.vue"),
  },
  {
    path: "/cycle-sort",
    name: "CycleSort",
    component: () => import(/* webpackChunkName: "sort_cycle" */ "../views/CycleSort.vue"),
  },
  {
    path: "/merge-sort",
    name: "MergeSort",
    component: () => import(/* webpackChunkName: "sort_merge" */ "../views/MergeSort.vue"),
  },
  {
    path: "/bogo-sort",
    name: "Bogosort",
    component: () => import(/* webpackChunkName: "sort_merge" */ "../views/BogoSort.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
