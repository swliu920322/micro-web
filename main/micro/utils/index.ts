// 给当前路由跳转打补丁
import { getList } from "../const/subApps";
import { ISubObj } from "@/store/sub";

export const patchRouter = (globalEvent = () => 1, eventName = "") => {
  return function (...args: any[]) {
    // @ts-ignore
    globalEvent.apply(this, args);
    window.dispatchEvent(new Event(eventName));
  };
};

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

export const isTurnChild = () => {
  // @ts-ignore
  console.log("cur", window.__CURRENT_SUB_APP__);

  // @ts-ignore
  window.__ORIGIN_APP__ = window.__CURRENT_SUB_APP__; // 上一个子应用

  // 那么现在呢我们就需要获取到我们的 location.pathname 里面符合我们 子应用配置的 activeRule 的这样一个规则
  let prefix: any = window.location.pathname.match(/(\/\w+)/);
  if (prefix) {
    prefix = prefix[0];
  } else {
    return;
  }
  // @ts-ignore
  if (window.__CURRENT_SUB_APP__ === prefix) {
    return false;
  }
  // @ts-ignore
  const currentApp = window.location.pathname.match(/(\/\w+)/);
  if (!currentApp) {
    return;
  }
  // @ts-ignore
  console.log("cur", currentApp[0]);
  // @ts-ignore
  window.__CURRENT_SUB_APP__ = currentApp[0];
  return true;
};
