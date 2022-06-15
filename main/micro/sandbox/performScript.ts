export const performScriptForFunction = (script: string, appName: string, global: any) => {
  const scriptText = `
     ${script}
        return window['${appName}']
    `;
  return new Function(scriptText).call(global, global);
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
