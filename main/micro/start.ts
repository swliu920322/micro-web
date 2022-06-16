import { getList, setList } from "./const/subApps";
import { rewriteRouter } from "./router/rewriteRouter";
import { currentApp } from "./utils";
import { setMainLifeCycle } from "./const/mainLifeCycle";
import { ISubObj, LifeCycle } from "@/store/sub";

rewriteRouter();

export const registerMicroApps = (
  appList: ISubObj[] = [],
  lifeCycle: Record<LifeCycle, Array<() => void>>
) => {
  setList(appList);
  lifeCycle.beforeLoad[0]();
  setTimeout(() => {
    lifeCycle.mount[0]();
  }, 1000);

  setMainLifeCycle(lifeCycle);
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
  if (app) {
    const { pathname, hash } = window.location;
    const url = pathname + hash;
    window.history.pushState("", "", url);
  }
  // @ts-ignore
  window.__CURRENT_SUB_APP__ = app.activeRule;
};
