import "../css/index.css";
// import '../css/component.less'
import bg from "../static/img/bg.png";

function component() {
  // 文本
  const div = document.createElement("div");

  div.innerHTML = "hello world";
  div.className = "text";

  // 图片
  const img = new Image();
  // 高版本需要加default
  // img.src = require('../static/img/bg.png').default
  img.src = bg;
  div.appendChild(img);
  const div2 = document.createElement("div");
  div2.style.width = "200px";
  div2.style.height = "200px";
  div2.className = "bg";
  div2.style.display = "inline-block";
  div.appendChild(div2);

  // iconfont
  const div3 = document.createElement("i");
  div3.className = "iconfont icon-homefill";
  div.appendChild(div3);

  return div;
}

document.body.appendChild(component());
