import * as Display from "./display.js";
import * as Calc from "./calc.js";


function drawChart(){
    Display.probabilityChart(Calc.distribution(3, 6));
}

drawChart();