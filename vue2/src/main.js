import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

let instance = null;
const render = () => {
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
};

if (!window.__MICRO_WEB__) {
  console.log(33333);
  render();
}
export const bootstrap = () => {
  console.log("开始加载");
};
export const mount = () => {
  render();
  console.log(555555);
  console.log("渲染成功");
};
export const unmount = () => {
  console.log("卸载", instance);
};
