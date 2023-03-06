import * as Display from "./display.js";
import * as Calc from "./calc.js";

var formula = document.getElementById("formula");
formula.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      drawChart();
    }
});

function parseInput(input){
    var parsing = input.split("d");

    return parsing;
}

function drawChart(){
    if(Display.distributionChart != null){
        Display.distributionChart.destroy();
    }
    var input = parseInput(formula.value);
    Display.probabilityChart(Calc.distribution(input[0], input[1]));
}