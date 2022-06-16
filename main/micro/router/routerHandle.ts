import { isTurnChild } from "../utils";
import { lifeCycle } from "../lifeCycle";

export const turnApp = async (...args: any[]) => {
  console.log('turnApp')
  if (isTurnChild()) {
    await lifeCycle();
  }
};
