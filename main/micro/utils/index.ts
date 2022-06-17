// 给当前路由跳转打补丁
import { getList } from "../const/subApps";
import { ISubObj } from "@/store/sub";

export function patchRouter(globalEvent = () => 1, eventName = "") {
  return function (...args: any[]) {
    // @ts-ignore
    globalEvent.apply(this, args);
    window.dispatchEvent(new Event(eventName));
  };
}

export const currentApp = () => {
  const currentUrl = window.location.pathname;
  return filterApp("activeRule", currentUrl);
};

export const filterAppByRoute = (router: string) => {
  return filterApp("activeRule", router);
};
// 查找子应用
const filterApp = (key: keyof ISubObj, value: string): ISubObj | null => {
  const currentApp = getList().filter((i) => i[key] === value);
  if (currentApp?.length) {
    return currentApp[0];
  }
  return null;
};

// 路由是否改变
// 路由如果一样，则没有变化
export const isTurnChild = () => {
  // @ts-ignore
  if (!window.__ORIGIN_APP__) {
    // @ts-ignore
    window.__ORIGIN_APP__ = window.__CURRENT_SUB_APP__; // 上一个子应用
    return true;
  }

  // 那么现在呢我们就需要获取到我们的 location.pathname 里面符合我们 子应用配置的 activeRule 的这样一个规则
  let prefix: any = window.location.pathname.match(/(\/\w+)/);
  if (prefix) {
    prefix = prefix[0];
  }
  // vue3跳转总是临时到到内部路由，影响切换逻辑，筛选掉临时路由
  if (!filterAppByRoute(prefix)) {
    return false;
  }
  // @ts-ignore
  window.__ORIGIN_APP__ = window.__CURRENT_SUB_APP__; // 上一个子应用

  // @ts-ignore
  if (window.__CURRENT_SUB_APP__ === prefix) {
    return false;
  }
  // 不一样的表示要跳转到另一个子应用去了
  // @ts-ignore
  const currentApp = window.location.pathname.match(/(\/\w+)/);
  if (currentApp) {
    // @ts-ignore
    window.__CURRENT_SUB_APP__ = currentApp[0];
    return true;
  }
};
