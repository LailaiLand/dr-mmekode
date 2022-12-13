function runCycle() {
  let timer = setTimeout(runCycle, 10);
  model.time++;
  randomBox();
  console.log(model.time, "running");
  if (model.time > model.cycle) {
    clearTimeout(timer);
    model.time = 0;
    model.cycle = model.cycle + model.cycle;
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
    runCycle();
  }
}
function randomBox(){
    showBox(colorPicker(), randomizer(50, 100), randomizer(50, 100), "submit");
}
function colorPicker(){
    //skriv noe fancy for å hex this shit
    let hexColor = "#";
    for (i = 0; i < 6; i++){
        let currentNum = randomizer(0, 15);
        if (currentNum == 10){
            currentNum = "A"
        } else if(currentNum == 11){
            currentNum = "B"
        }else if(currentNum == 12){
            currentNum = "C"
        }else if(currentNum == 13){
            currentNum = "D"
        }else if(currentNum == 14){
            currentNum = "E"
        }else if(currentNum == 15){
            currentNum = "F"
        }
        hexColor += currentNum
        console.log(hexColor);
    }
    return hexColor;
}

function randomizer(yourMin, yourMax){
    return Math.floor(Math.random()*yourMax)+yourMin;
}