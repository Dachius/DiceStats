import * as Display from "/js/display.js";
import * as Calc from "/js/calc.js";


function drawChart(){
    Display.probabilityChart(Calc.distribution(3, 6));
}

drawChart();