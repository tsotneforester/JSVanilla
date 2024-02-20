export function cleanBoard(selector) {
  let temp = document.querySelectorAll(selector);
  for (let i = 0; i < temp.length; i++) {
    temp[i].classList.remove("checkhint");
    temp[i].classList.remove("wronghint");
  }
}
