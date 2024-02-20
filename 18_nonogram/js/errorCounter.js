import getCurrentProgress from "./currentProgress.js";

export default (selector, solution) => {
  let currentProgress = getCurrentProgress(".block");
  let errorCount = 0;

  for (let i = 0; i < document.querySelectorAll(selector).length; i++) {
    if (currentProgress[i] == solution[i]) continue;
    errorCount++;
  }
  return errorCount;
};
