// Create variables to hold the values for modelName and duration
var modelName = "XYZ";
var duration = 0;

// Function to recalculate the total cost
function recalculate() {
  var costLabel = document.getElementById("calculated-cost");
  var totalCost;
  if (modelName === "XYZ") {
    totalCost = duration * 100;
  } else if (modelName === "CPRG") {
    totalCost = duration * 213;
  }
  costLabel.innerHTML = totalCost.toFixed(2);
}

// Function to switch between models
function changeModel() {
  var modelLabel = document.getElementById("model-text");
  if (modelName === "XYZ") {
    modelName = "CPRG";
    modelLabel.innerHTML = "Model CPRG";
  } else if (modelName === "CPRG") {
    modelName = "XYZ";
    modelLabel.innerHTML = "Model XYZ";
  }
  recalculate();
}

var modelButton = document.getElementById("model-button");
modelButton.addEventListener("click", changeModel);

// Function to change the duration
function changeDuration() {
  var durationLabel = document.getElementById("duration-text");
  var newDuration = prompt("Enter the new duration:");
  duration = parseInt(newDuration);
  durationLabel.innerHTML = duration;
  recalculate();
}

var durationButton = document.getElementById("duration-button");
durationButton.addEventListener("click", changeDuration);
