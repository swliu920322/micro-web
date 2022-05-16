let lifeCycle: Record<string, Array<() => void>> = {};
export const getMainLifeCycle = () => lifeCycle;
export const setMainLifeCycle = (
  data: Record<string, Array<() => void>> = {}
) => (lifeCycle = data);
