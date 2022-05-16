import { setList } from "./const/subApp";
import { rewriteRouter } from "./router/rewriteRouter";

rewriteRouter();
export const registerMicroApps = (appList = []) => {
  setList(appList);
};
