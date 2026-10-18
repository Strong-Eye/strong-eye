
var graficosAtuais = [];

function selecionarCard(card) {

    //Parte onde faz o css de Hover funfar
    var cards = document.querySelectorAll('.card-pardal');

    cards.forEach(function (item) {
        item.classList.remove('selecionado');
    });

    card.classList.add('selecionado');

    // Localizando onde tacar as dashs
    var conteudo_dashs = document.getElementById('conteudo_dashs');

    // Destruindo caso for selecionar outro card
    graficosAtuais.forEach(function (grafico) {
        grafico.destroy();
    });

    graficosAtuais = [];

    if (card.id == 'card1') {

        conteudo_dashs.innerHTML = `
            <div class="row g-3">

                <div class="col-12 col-lg-6">
                    <div class="mt-5 ms-5 bg-dark p-3 rounded">
                        <h4 class="text-light">Uso da CPU</h4>
                        <div style="height: 250px; width: 100%;">
                            <canvas id="graficoCPU"></canvas>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="card medidor-card bg-dark text-light mb-4 mt-5 ms-6 align-items-center">
                        <h3 class="mt-3">Uso CPU</h3>
                        <div style="height: 180px; width: 100%; max-width: 300px;">
                            <canvas id="medidorCPU"></canvas>
                        </div>
                        <p>90%</p>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="mt-5 ms-5 bg-dark p-3 rounded">
                        <h4 class="text-light">Uso da RAM</h4>
                        <div style="height: 250px; width: 100%;">
                            <canvas id="graficoRAM"></canvas>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="card medidor-card bg-dark text-light mb-4 mt-5 ms-6 align-items-center">
                        <h3 class="mt-3">Uso RAM</h3>
                        <div style="height: 180px; width: 100%; max-width: 300px;">
                            <canvas id="medidorRAM"></canvas>
                        </div>
                        <p>80%</p>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="mt-5 ms-5 bg-dark p-3 rounded">
                        <h4 class="text-light">Uso do Disco</h4>
                        <div style="height: 250px; width: 100%;">
                            <canvas id="graficoDisco"></canvas>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="card medidor-card bg-dark text-light mb-4 mt-5 ms-6 align-items-center">
                        <h3 class="mt-3">Uso Disco</h3>
                        <div style="height: 180px; width: 100%; max-width: 300px;">
                            <canvas id="medidorDisco"></canvas>
                        </div>
                        <p>60%</p>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="mt-5 ms-5 mb-5 bg-dark p-3 rounded">
                        <h4 class="text-light">Velocidade de Rede</h4>
                        <div style="height: 250px; width: 100%;">
                            <canvas id="graficoRede"></canvas>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="card medidor-card bg-dark text-light mb-4 mt-5 ms-6 align-items-center">
                        <h4 class="mt-3">Pacotes de Rede</h4>
                        <div style="height: 250px; width: 100%;">
                            <canvas id="graficoPacotes"></canvas>
                        </div>
                    </div>
                </div>

            </div>
        `;

        // colocando os valores para a criação funcionar
        criarLinha('graficoCPU', [0, 12, 38, 30, 65, 48, 40, 65, 90, 90]);
        criarMedidor('medidorCPU', 90, '#B80000');

        criarLinha('graficoRAM', [10, 25, 18, 75, 50, 38, 90, 90, 85, 80]);
        criarMedidor('medidorRAM', 80, '#B80000');

        criarLinha('graficoDisco', [0, 15, 40, 32, 70, 50, 42, 85, 60, 100]);
        criarMedidor('medidorDisco', 60, '#52DCE5');

        criarLinhaRede('graficoRede', [0, 20, 65, 50, 125, 85, 70, 140, 100, 110]);
        criarGraficoPacotes();


    } else if (card.id == 'card2') {

        conteudo_dashs.innerHTML = `
            <div class="row g-3">

                <div class="col-12 col-lg-6">
                    <div class="mt-5 ms-5 bg-dark p-3 rounded">
                        <h4 class="text-light">Uso do Disco</h4>
                        <div style="height: 250px; width: 100%;">
                            <canvas id="graficoDisco"></canvas>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="card medidor-card bg-dark text-light mb-4 mt-5 ms-6 align-items-center">
                        <h3 class="mt-3">Uso Disco</h3>
                        <div style="height: 180px; width: 100%; max-width: 300px;">
                            <canvas id="medidorDisco"></canvas>
                        </div>
                        <p>90%</p>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="mt-5 ms-5 bg-dark p-3 rounded">
                        <h4 class="text-light">Uso da CPU</h4>
                        <div style="height: 250px; width: 100%;">
                            <canvas id="graficoCPU"></canvas>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="card medidor-card bg-dark text-light mb-4 mt-5 ms-6 align-items-center">
                        <h3 class="mt-3">Uso CPU</h3>
                        <div style="height: 180px; width: 100%; max-width: 300px;">
                            <canvas id="medidorCPU"></canvas>
                        </div>
                        <p>45%</p>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="mt-5 ms-5 bg-dark p-3 rounded">
                        <h4 class="text-light">Uso da RAM</h4>
                        <div style="height: 250px; width: 100%;">
                            <canvas id="graficoRAM"></canvas>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="card medidor-card bg-dark text-light mb-4 mt-5 ms-6 align-items-center">
                        <h3 class="mt-3">Uso RAM</h3>
                        <div style="height: 180px; width: 100%; max-width: 300px;">
                            <canvas id="medidorRAM"></canvas>
                        </div>
                        <p>65%</p>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="mt-5 ms-5 bg-dark p-3 rounded">
                        <h4 class="text-light">Velocidade de Rede</h4>
                        <div style="height: 250px; width: 100%;">
                            <canvas id="graficoRede"></canvas>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="card medidor-card bg-dark text-light mb-4 mt-5 ms-6 align-items-center">
                        <h4 class="mt-3">Pacotes de Rede</h4>
                        <div style="height: 250px; width: 100%;">
                            <canvas id="graficoPacotes"></canvas>
                        </div>
                    </div>
                </div>

            </div>
        `;

        criarLinha('graficoDisco', [0, 15, 40, 32, 70, 50, 42, 85, 90, 95]);
        criarMedidor('medidorDisco', 90, '#B80000');

        criarLinha('graficoCPU', [0, 12, 38, 30, 45, 48, 40, 50, 45, 45]);
        criarMedidor('medidorCPU', 45, '#52DCE5');

        criarLinha('graficoRAM', [10, 25, 18, 35, 50, 38, 60, 65, 60, 65]);
        criarMedidor('medidorRAM', 65, '#52DCE5');

        criarLinhaRede('graficoRede', [0, 20, 65, 50, 90, 85, 70, 100, 95, 100]);
        criarGraficoPacotes();


    } else if (card.id == 'card3') {

        conteudo_dashs.innerHTML = `
            <div class="row g-3">

                <div class="col-12 col-lg-6">
                    <div class="mt-5 ms-5 bg-dark p-3 rounded">
                        <h4 class="text-light">Velocidade de Rede</h4>
                        <div style="height: 250px; width: 100%;">
                            <canvas id="graficoRede"></canvas>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="card medidor-card bg-dark text-light mb-4 mt-5 ms-6 align-items-center">
                        <h4 class="mt-3">Pacotes de Rede</h4>
                        <div style="height: 250px; width: 100%;">
                            <canvas id="graficoPacotes"></canvas>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="mt-5 ms-5 bg-dark p-3 rounded">
                        <h4 class="text-light">Uso da CPU</h4>
                        <div style="height: 250px; width: 100%;">
                            <canvas id="graficoCPU"></canvas>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="card medidor-card bg-dark text-light mb-4 mt-5 ms-6 align-items-center">
                        <h3 class="mt-3">Uso CPU</h3>
                        <div style="height: 180px; width: 100%; max-width: 300px;">
                            <canvas id="medidorCPU"></canvas>
                        </div>
                        <p>50%</p>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="mt-5 ms-5 bg-dark p-3 rounded">
                        <h4 class="text-light">Uso da RAM</h4>
                        <div style="height: 250px; width: 100%;">
                            <canvas id="graficoRAM"></canvas>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="card medidor-card bg-dark text-light mb-4 mt-5 ms-6 align-items-center">
                        <h3 class="mt-3">Uso RAM</h3>
                        <div style="height: 180px; width: 100%; max-width: 300px;">
                            <canvas id="medidorRAM"></canvas>
                        </div>
                        <p>60%</p>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="mt-5 ms-5 bg-dark p-3 rounded">
                        <h4 class="text-light">Uso do Disco</h4>
                        <div style="height: 250px; width: 100%;">
                            <canvas id="graficoDisco"></canvas>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="card medidor-card bg-dark text-light mb-4 mt-5 ms-6 align-items-center">
                        <h3 class="mt-3">Uso Disco</h3>
                        <div style="height: 180px; width: 100%; max-width: 300px;">
                            <canvas id="medidorDisco"></canvas>
                        </div>
                        <p>60%</p>
                    </div>
                </div>

            </div>
        `;

        criarLinhaRede('graficoRede', [189, 180, 170, 160, 125, 100, 94, 90, 84, 70]);
        criarGraficoPacotes();

        criarLinha('graficoCPU', [0, 12, 38, 30, 45, 48, 40, 50, 50, 50]);
        criarMedidor('medidorCPU', 50, '#52DCE5');

        criarLinha('graficoRAM', [10, 25, 18, 35, 50, 38, 60, 55, 60, 60]);
        criarMedidor('medidorRAM', 60, '#52DCE5');

        criarLinha('graficoDisco', [0, 15, 40, 32, 45, 50, 42, 55, 60, 60]);
        criarMedidor('medidorDisco', 60, '#52DCE5');


    } else if (card.id == 'card4') {

        conteudo_dashs.innerHTML = `
            <div class="row g-3">

                <div class="col-12 col-lg-6">
                    <div class="mt-5 ms-5 bg-dark p-3 rounded">
                        <h4 class="text-light">Uso da RAM</h4>
                        <div style="height: 250px; width: 100%;">
                            <canvas id="graficoRAM"></canvas>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="card medidor-card bg-dark text-light mb-4 mt-5 ms-6 align-items-center">
                        <h3 class="mt-3">Uso RAM</h3>
                        <div style="height: 180px; width: 100%; max-width: 300px;">
                            <canvas id="medidorRAM"></canvas>
                        </div>
                        <p>95%</p>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="mt-5 ms-5 bg-dark p-3 rounded">
                        <h4 class="text-light">Uso da CPU</h4>
                        <div style="height: 250px; width: 100%;">
                            <canvas id="graficoCPU"></canvas>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="card medidor-card bg-dark text-light mb-4 mt-5 ms-6 align-items-center">
                        <h3 class="mt-3">Uso CPU</h3>
                        <div style="height: 180px; width: 100%; max-width: 300px;">
                            <canvas id="medidorCPU"></canvas>
                        </div>
                        <p>45%</p>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="mt-5 ms-5 bg-dark p-3 rounded">
                        <h4 class="text-light">Uso do Disco</h4>
                        <div style="height: 250px; width: 100%;">
                            <canvas id="graficoDisco"></canvas>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="card medidor-card bg-dark text-light mb-4 mt-5 ms-6 align-items-center">
                        <h3 class="mt-3">Uso Disco</h3>
                        <div style="height: 180px; width: 100%; max-width: 300px;">
                            <canvas id="medidorDisco"></canvas>
                        </div>
                        <p>55%</p>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="mt-5 ms-5 bg-dark p-3 rounded">
                        <h4 class="text-light">Velocidade de Rede</h4>
                        <div style="height: 250px; width: 100%;">
                            <canvas id="graficoRede"></canvas>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="card medidor-card bg-dark text-light mb-4 mt-5 ms-6 align-items-center">
                        <h4 class="mt-3">Pacotes de Rede</h4>
                        <div style="height: 250px; width: 100%;">
                            <canvas id="graficoPacotes"></canvas>
                        </div>
                    </div>
                </div>

            </div>
        `;

        criarLinha('graficoRAM', [10, 25, 48, 75, 80, 88, 90, 93, 95, 95]);
        criarMedidor('medidorRAM', 95, '#B80000');

        criarLinha('graficoCPU', [0, 12, 38, 30, 45, 48, 40, 45, 45, 45]);
        criarMedidor('medidorCPU', 45, '#52DCE5');

        criarLinha('graficoDisco', [0, 15, 40, 32, 45, 50, 42, 55, 55, 55]);
        criarMedidor('medidorDisco', 55, '#52DCE5');

        criarLinhaRede('graficoRede', [0, 20, 65, 50, 90, 85, 70, 100, 100, 100]);
        criarGraficoPacotes();
    }
}


function criarLinha(id, valores) {

    var canvas = document.getElementById(id);

    if (!canvas) {
        return;
    }

    var grafico = new Chart(canvas, {
        type: 'line',

        data: {
            labels: [
                '21:00', '21:30', '21:50', '22:15', '22:20',
                '22:55', '23:10', '23:35', '23:40', '00:45'
            ],

            datasets: [{
                label: 'Uso (%)',
                data: valores,
                borderColor: '#526DFF',
                backgroundColor: 'rgba(82, 109, 255, 0.15)',
                borderWidth: 3,
                pointRadius: 3,
                tension: 0,
                fill: true
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: {
                    display: false
                }
            },

            scales: {
                x: {
                    ticks: {
                        color: '#AAAAAA'
                    },
                    grid: {
                        color: '#333333'
                    }
                },

                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    grid: {
                        color: '#333333'
                    },
                    ticks: {
                        color: '#AAAAAA'
                    }
                }
            }
        }
    });

    graficosAtuais.push(grafico);
}

function criarLinhaRede(id, valores) {

    var canvas = document.getElementById(id);

    if (!canvas) {
        return;
    }

    var grafico = new Chart(canvas, {
        type: 'line',

        data: {
            labels: [
                '21:00', '21:30', '21:50', '22:15', '22:20',
                '22:55', '23:10', '23:35', '23:40', '00:45'
            ],

            datasets: [{
                label: 'Uso (%)',
                data: valores,
                borderColor: '#526DFF',
                backgroundColor: 'rgba(82, 109, 255, 0.15)',
                borderWidth: 3,
                pointRadius: 3,
                tension: 0,
                fill: true
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: {
                    display: false
                }
            },

            scales: {
                x: {
                    ticks: {
                        color: '#AAAAAA'
                    },
                    grid: {
                        color: '#333333'
                    }
                },

                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 200,
                    grid: {
                        color: '#333333'
                    },
                    ticks: {
                        color: '#AAAAAA'
                    }
                }
            }
        }
    });

    graficosAtuais.push(grafico);
}


function criarGraficoPacotes() {

    var canvas = document.getElementById('graficoPacotes');

    if (!canvas) {
        return;
    }

    var grafico = new Chart(canvas, {
        type: 'bar',

        data: {
            labels: [
                'Enviado',
                'Esperado envio',
                'Recebido',
                'Esperado recebimento'
            ],

            datasets: [{
                label: 'Pacotes por segundo',
                data: [80, 100, 65, 90],

                backgroundColor: [
                    '#2196F3',
                    '#64B5F6',
                    '#00BCD4',
                    '#80DEEA'
                ],

                borderWidth: 0
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: {
                    labels: {
                        color: '#FFFFFF'
                    }
                }
            },

            scales: {
                x: {
                    ticks: {
                        color: '#FFFFFF'
                    },
                    grid: {
                        display: false
                    }
                },

                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#FFFFFF'
                    },
                    grid: {
                        color: '#333333'
                    }
                }
            }
        }
    });

    graficosAtuais.push(grafico);
}

function criarMedidor(id, valor, cor) {

    var canvas = document.getElementById(id);

    if (!canvas) {
        return;
    }

    var grafico = new Chart(canvas, {
        type: 'doughnut',

        data: {
            datasets: [{
                data: [valor, 100 - valor],

                backgroundColor: [
                    cor,
                    '#292929'
                ],

                borderWidth: 0
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,
            rotation: -90,
            circumference: 180,
            cutout: '75%',

            plugins: {
                legend: {
                    display: false
                },

                tooltip: {
                    enabled: false
                }
            }
        }
    });

    graficosAtuais.push(grafico);
    console.log(graficosAtuais);
}

