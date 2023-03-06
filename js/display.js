export var distributionChart;

export function frequencyChart(distribution){
    distributionChart = new Chart(document.getElementById('distribution-chart'), {
        type: 'bar',
        data: {
            labels: Array.from(distribution.map.keys()),
            datasets: [{
                label: 'Frequency',
                data: Array.from(distribution.map.values()),
                barPercentage: 1.25
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

export function probabilityChart(distribution){
    distributionChart = new Chart(document.getElementById('distribution-chart'), {
        type: 'bar',
        data: {
            labels: Array.from(distribution.map.keys()),
            datasets: [{
                label: '%',
                data: Array.from(distribution.map.values()).map(n => 100 * n / distribution.combinations),
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