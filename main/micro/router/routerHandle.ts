import { isTurnChild } from "../utils";

export const turnApp = (...args: any[]) => {
  if (isTurnChild()) {
    console.log("路由切换了");
  }
};
