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

const filterApp = (key: keyof ISubObj, value: string): ISubObj | null => {
  const currentApp = getList().filter((i) => i[key] === value);
  if (currentApp?.length) {
    return currentApp[0];
  }
  return null;
};
export const filterAppByRoute = (router: string) => {
  return filterApp("activeRule", router);
};
export const isTurnChild = () => {
  // @ts-ignore
  window.__ORIGIN_APP__ = window.__CURRENT_SUB_APP__;
  // @ts-ignore
  if (window.__CURRENT_SUB_APP__ !== window.location.pathname) {
    const currentApp = window.location.pathname.match(/(\/\w+)/);
    if (!currentApp) {
      return;
    }
    // @ts-ignore
    window.__CURRENT_SUB_APP__ = currentApp[0];
    return true;
  }
  return false;
};
