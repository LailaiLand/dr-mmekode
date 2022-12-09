start();
function start() {
  let html = /*HTML*/ `
    <button onclick ="runCycle(0)"> Do not click </button>
    `;
  model.view.innerHTML = html;
}
function showBox(color, tall, wide, content) {
  let html = /*HTML*/ `
    <div style=
    "background-color: ${color}; height: ${tall}vh; width:${wide}%; font-size: x-large; display: flex; justify-content: center; align-items: center;"
    >${content}</div>
    `;
  model.view.innerHTML = html;
}
