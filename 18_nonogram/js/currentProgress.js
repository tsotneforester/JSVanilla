export default function (selector) {
  let currentProgress = [];
  let temp = document.querySelectorAll(selector);
  for (let i = 0; i < temp.length; i++) {
    if (temp[i].classList.contains("blackbox")) {
      currentProgress.push("t");
    } else {
      currentProgress.push("");
    }
  }
  return currentProgress;
}
