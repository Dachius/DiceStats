export function frequencyChart(distribution){
    new Chart(document.getElementById('distributionChart'), {
        type: 'bar',
        data: {
            labels: Array.from(distribution.map.keys()),
            datasets: [{
                label: 'Frequency',
                data: Array.from(distribution.map.values()),
                borderWidth: 0,
                barPercentage: 1.25,
                skipNull: true
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
    new Chart(document.getElementById('distributionChart'), {
        type: 'bar',
        data: {
            labels: Array.from(distribution.map.keys()),
            datasets: [{
                label: 'percentage',
                data: Array.from(distribution.map.values()).map(n => 100 * n / distribution.combinations),
                borderWidth: 0,
                barPercentage: 1.25,
                skipNull: true
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