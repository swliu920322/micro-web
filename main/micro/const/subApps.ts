import { ISubObj } from "@/store/sub";

let list: ISubObj[] = [];
export const getList = () => list;

export const setList = (appList: ISubObj[] = []) => {
  list = appList;
};
