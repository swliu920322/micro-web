import { getList, setList } from "./const/subApps";
import { rewriteRouter } from "./router/rewriteRouter";
import { currentApp } from "./utils";

rewriteRouter();
export const registerMicroApps = (appList: any[] = []) => {
  setList(appList);
};
// 启动
export const start = () => {
  // 验证子应用列表是否为空
  const apps = getList();
  if (!apps.length) {
    throw Error("子应用列表为空,请正确注册!");
  }
  // 有子应用，插到符合当前路由的子应用
  const app = currentApp();
  console.log(app);
  if (app) {
    const { pathname, hash } = window.location;
    const url = pathname + hash;
    window.history.pushState("", "", url);
  }
  // @ts-ignore
  window.__CURRENT_SUB_APP__ = app.activeRule;
};
