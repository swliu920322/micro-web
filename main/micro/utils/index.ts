// 给当前路由跳转打补丁
export const patchRouter = (
  globalEvent: (...args: any[]) => any,
  eventName: string
) => {
  console.log("patchRouter____patchRouter");
  return function (...aa: any[]) {
    const e = new Event(eventName);
    globalEvent(...aa);
    window.dispatchEvent(e);
  };
};
