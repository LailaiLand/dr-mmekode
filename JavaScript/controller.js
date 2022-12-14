function runCycle() {
  let timer = setTimeout(runCycle, 10);
  model.time++;
  randomBox();
  console.log(model.time, "running");
  if (model.time > model.cycle) {
    clearTimeout(timer);
    model.time = 0;
    pauseTime();
  }
}
function pauseTime() {
  let timer = setTimeout(pauseTime, 1000);
  model.time++;
  console.log(model.time, "pause");
  if (model.time > model.pause) {
    clearTimeout(timer);
    model.time = 0;
    model.current++;
    if (model.current > model.repetition) {
      model.current = 0;
      model.cycle = model.cycle + model.cycle;
    }
    runCycle();
  }
}
function randomBox() {
  let red = randomizer(0, 255);
  let green = randomizer(0, 255);
  let blue = randomizer(0, 255);

  showBox(
    `rgb(${red}, ${green}, ${blue})`,
    randomizer(50, 100),
    randomizer(50, 100),
    `rgb(${colorPicker(red)}, ${colorPicker(green)}, ${colorPicker(blue)})`,
    "submit"
  );
}
function colorPicker(value) {
  let invertedColor = 255 - value;
  return invertedColor;
}

function randomizer(yourMin, yourMax) {
  return Math.floor(Math.random() * yourMax) + yourMin;
}
