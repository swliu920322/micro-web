import { patchRouter } from "../utils";
import { turnApp } from "./routerHandle";
//  重写windows的路由跳转
export const rewriteRouter = () => {
  window.history.pushState = patchRouter(
    // @ts-ignore
    window.history.pushState,
    "micro_push"
  );

  window.history.replaceState = patchRouter(
    // @ts-ignore
    window.history.replaceState,
    "micro_replace"
  );
  window.addEventListener("micro_push", (...args) => {
    console.log("micro_push");
    turnApp(...args);
  });
  window.addEventListener("micro_replace", (...args) => {
    console.log("micro_push");
    turnApp(...args);
  });

  window.onpopstate = function () {
    console.log("onpopstate");
    turnApp();
  };
};
