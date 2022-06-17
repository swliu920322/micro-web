import { getList, setList } from "./const/subApps";
import { rewriteRouter } from "./router/rewriteRouter";
import { currentApp } from "./utils";
import { setMainLifeCycle } from "./const/mainLifeCycle";
import { ISubObj, LifeCycle } from "@/store/sub";
import { prefetch } from "./loader/prefetch";

rewriteRouter();

export const registerMicroApps = (
  appList: ISubObj[] = [],
  lifeCycle: Record<LifeCycle, Array<() => void>>
) => {
  setList(appList);
  // lifeCycle.beforeLoad[0]();
  // setTimeout(() => {
  //   lifeCycle.mount[0]();
  // }, 1000);

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
    // 需要将 window.__CURRENT_SUB_APP__ = app.activeRule 这个代码放在 pushState 上面，
    // 如果放在下面的话会先执行 isTurnChild 方法了，这样 isTurnChild 方法中的 window.__CURRENT_SUB_APP__ 这个变量就会是 undefined
    // 这样保证 pushState 事件触发的时候保证 window.__CURRENT_SUB_APP__ 是有值的
    // @ts-ignore
    window.__CURRENT_SUB_APP__ = app.activeRule;

    const { pathname, hash } = window.location;
    const url = pathname + hash;
    window.history.pushState("", "", url);
  }
  // 预加载 - 加载接下来的所有子应用，但是不显示
  // 对于 prefetch 来说我们当前所有加载的方法其实都是异步的方法
  prefetch();
};
