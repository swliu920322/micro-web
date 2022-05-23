export const performScriptForFunction = (script: string) => {
  return new Function(script).call(window, window);
};
export const performScriptForEval = (script: string, appName: string) => {
  const scriptText = `
      () => {
        ${script}
        return window['${appName}']
      }
    `;
  return eval(scriptText).call(window, window); // app module mount
};
