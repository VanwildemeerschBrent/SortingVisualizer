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
    path: "/insertion-sort",
    name: "InsertionSort",
    component: () => import(/* webpackChunkName: "sort_insertion" */ "../views/InsertionSort.vue"),
  },
  {
    path: "/merge-sort",
    name: "MergeSort",
    component: () => import(/* webpackChunkName: "sort_merge" */ "../views/MergeSort.vue"),
  },
  {
    path: "/quick-sort",
    name: "QuickSort",
    component: () => import(/* webpackChunkName: "sort_quick" */ "../views/QuickSort.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
