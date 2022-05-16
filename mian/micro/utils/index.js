// 给当前路由跳转打补丁
export const patchRouter = (globalEvent = () => {}, eventName = "") => {
  console.log("patchRouter____patchRouter");
  return function () {
    const e = new Event(eventName);
    globalEvent.apply(this, arguments);
    window.dispatchEvent(e);
  };
};
