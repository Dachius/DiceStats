export var distributionChart;

export function probabilityChart(x, y){
    distributionChart = new Chart(document.getElementById('distribution-chart'), {
        type: 'bar',
        data: {
            labels: x,
            datasets: [{
                label: '%',
                data: y,
                borderWidth: 1,
                barPercentage: 1.25,
                backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--gray')
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}