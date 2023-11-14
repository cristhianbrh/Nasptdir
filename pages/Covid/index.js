const localChart = document.getElementById("dashboardId");
const labels = []
const datas = []
const monthText = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const dailyGet = () => {

    fetch("https://api.covidtracking.com/v1/us/daily.json")
        .then((resp) => resp.json())
        .then(rpta => {
            rpta.forEach(m => {
                const monthNumber = monthText[(new Date(m.dateChecked)).getMonth()] + " " + (new Date(m.dateChecked)).getFullYear().toString();
                if (!labels.includes(monthNumber)) {
                    labels.unshift(monthNumber)
                    datas.unshift(m.positive)
                }
            });

            var data = {
                labels: labels,
                datasets: [{
                    label: 'Positivos a covid',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: datas
                }]
            };

            new Chart(localChart, {
                type: 'bar',
                data: data,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

        })


}
dailyGet();