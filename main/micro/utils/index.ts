// 给当前路由跳转打补丁
export const patchRouter = (globalEvent = () => 1, eventName = "") => {
  return function () {
    const e = new Event(eventName);
    // @ts-ignore
    globalEvent.apply(this, arguments);
    window.dispatchEvent(e);
  };
};
