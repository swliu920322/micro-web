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
  // app module mount
  return eval(scriptText).call(window, window);
};
