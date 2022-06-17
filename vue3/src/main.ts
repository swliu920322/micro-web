import { createApp, App as AppType } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

let instance: AppType | null = null;
const render = () => {
  instance = createApp(App);
  instance.use(store).use(router).mount("#app");
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (!window.__MICRO_WEB__) {
  render();
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.a = 111;
export const bootstrap = () => {
  console.log("vue3开始加载");
};
export const mount = () => {
  render();
  console.log("vue3渲染成功");
};
export const unmount = () => {
  console.log("vue3卸载", instance);
};
