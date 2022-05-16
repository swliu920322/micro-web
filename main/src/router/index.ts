import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: () => import("../App.vue") },
  { path: "/vue2", component: () => import("../App.vue") },
  { path: "/vue3", component: () => import("../App.vue") },
  { path: "/react18", component: () => import("../App.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
