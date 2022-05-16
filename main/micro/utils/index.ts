// 给当前路由跳转打补丁
import { getList } from "../const/subApps";

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

const filterApp = (key: string, value: string) => {
  const currentApp = getList().filter((i) => i[key] === value);
  if (currentApp?.length) {
    return currentApp[0];
  }
  return {};
};
export const isTurnChild = () => {
  // @ts-ignore
  return window.__CURRENT_SUB_APP__ !== window.location.pathname;
};
