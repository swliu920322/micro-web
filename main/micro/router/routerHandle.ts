import { isTurnChild } from "../utils";
import { lifeCycle } from "../lifeCycle";

export const turnApp = async (...args: any[]) => {
  if (isTurnChild()) {
    console.log('turned')
    await lifeCycle();
  }
};
