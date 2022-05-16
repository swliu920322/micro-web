import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../App.vue") },
  { path: "/vue2", component: () => import("../App.vue") },
  { path: "/vue3", component: () => import("../App.vue") },
  { path: "/react18", component: () => import("../App.vue") },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
