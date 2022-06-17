import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const nav = [
  { name: "vue3", url: "/vue3#/home" },
  { name: "vue2", url: "/vue2#/information" },
  { name: "react15", url: "/react15#/information" },
  { name: "react16", url: "/react16#/rank" },
  { name: "react18", url: "/react18#/video" },
];

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: () => import("../App.vue") },
  { path: "/vue2", component: () => import("../App.vue") },
  { path: "/vue3", component: () => import("../App.vue") },
  { path: "/react15", component: () => import("../App.vue") },
  { path: "/react16", component: () => import("../App.vue") },
  { path: "/react18", component: () => import("../App.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
