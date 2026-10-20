Chart.defaults.color = '#fff';

new Chart(document.getElementById('graficoAlertas'), {
  type: 'bar',
  data: {
    labels: ['Semana -3', 'Semana -2', 'Semana passada', 'Semana atual'],
    datasets: [{
      label: 'Alertas',
      data: [1, 2, 4, 3], // troque pelos dados reais
      backgroundColor: '#0d6efd'
    }]
  },
  options: {
    maintainAspectRatio: false,
    plugins: { title: { display: true, text: 'Alertas por semana' } },
    scales: { y: { beginAtZero: true, ticks: { precision: 0 } } }
  }
});