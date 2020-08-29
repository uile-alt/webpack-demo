import x from "./x.js";
import jpg from "./assets/2.jpg";

console.log(x);
const div = document.getElementById("app");
console.log(jpg);
div.innerHTML = `
    <img src="${jpg}">
`;

const button = document.createElement("button");
button.innerHTML = "懒加载";

button.onclick = () => {
  const promise = import("./lazy");
  promise.then(
    (modules) => {
      const fn = modules.default;
      fn();
      console.log("加载成功");
    },
    () => {
      console.log("加载失败");
    }
  );
};
div.appendChild(button);
