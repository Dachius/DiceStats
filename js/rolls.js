import * as Display from "./display.js";
import * as Calc from "./calc.js";

var formula = document.getElementById("formula");
formula.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      generateChart("percentage");
    }
});

// 3d6 -> d6 + d6 + d6
// 4d6D2 -> 
function parseInput(input){
    var parsing = input.split("d");

    return parsing;
}

function generateChart(option){
    var input = parseInput(formula.value);
    var dist = Calc.distribution(input[0], input[1]);

    var x, y;
    switch(option){
        case "percentage":
            x = Array.from(dist.map.keys());
            y = Array.from(dist.map.values()).map(n => 100 * (Number(n) / Number(dist.combinations)));
            break;
        case "percentile":
            x = Array.from(dist.map.keys());
            y = Array.from(dist.map.values()).map(n => 100 * (Number(n) / Number(dist.combinations)));
            for(var i = 1; i < y.length; i++){
                y[i] += y[i - 1];
            }


            break;
    }
    
    drawChart(x, y);
}

function drawChart(x, y){
    if(Display.distributionChart != null){
        Display.distributionChart.destroy();
    }

    Display.probabilityChart(x, y);
}