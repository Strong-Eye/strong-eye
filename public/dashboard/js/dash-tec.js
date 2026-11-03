
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
            <div class="d-flex flex-column bg-dark p-3 rounded mt-4 w-75">
                <h2 class="text-light">Relatório Individual - Radar 1</h2>
                <p class="text-light mb-4"><b>Modelo:</b> Doppler H37 | <b>Status:</b> Crítico | <b>Em alerta:</b> RAM, Rede e Buffer</p>

                <div class="row g-3">

                    <div class="col-12">
                        <div class="p-3 rounded d-flex flex-column" style="background-color: var(--bg-principal)">
                            <h4 class="text-light mb-3">Uso da RAM</h4>
                                <div class="row g-3 align-items-center">
                                <div class="col-12 col-lg-8">
                                    <div style="height: 250px; width: 100%;"><canvas id="graficoRAM"></canvas></div>
                                </div>
                                <div class="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center text-light">
                                    <div style="height: 180px; width: 100%; max-width: 300px;"><canvas id="medidorRAM"></canvas></div>
                                    <h3 class="mt-2 mb-0">78%</h3>
                                    <p class="mb-0">Última leitura</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="p-3 rounded d-flex flex-column" style="background-color: var(--bg-principal)">
                            <h4 class="text-light mb-3">Uso da CPU</h4>
                            <div class="row g-3 align-items-center">
                                <div class="col-12 col-lg-8">
                                    <div style="height: 250px; width: 100%;"><canvas id="graficoCPU"></canvas></div>
                                </div>
                                <div class="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center text-light">
                                    <div style="height: 180px; width: 100%; max-width: 300px;"><canvas id="medidorCPU"></canvas></div>
                                    <h3 class="mt-2 mb-0">45%</h3>
                                    <p class="mb-0">Última leitura</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="p-3 rounded d-flex flex-column" style="background-color: var(--bg-principal)">
                            <h4 class="text-light mb-3">Utilização do Buffer de disco</h4>
                            <div class="row g-3 align-items-center">
                                <div class="col-12 col-lg-8">
                                    <div style="height: 250px; width: 100%;"><canvas id="graficoDisco"></canvas></div>
                                </div>
                                <div class="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center text-light">
                                    <div style="height: 180px; width: 100%; max-width: 300px;"><canvas id="medidorDisco"></canvas></div>
                                    <h3 class="mt-2 mb-0">55%</h3>
                                    <p class="mb-0">Última leitura</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="p-3 rounded d-flex flex-column" style="background-color: var(--bg-principal)">
                            <h4 class="text-light mb-3">Rede</h4>
                            <div class="row g-3 align-items-center">

                                <div class="col-12 col-lg-8">
                                    <div style="height: 250px; width: 100%;"><canvas id="graficoRede"></canvas></div>
                                </div>

                                <div class="col-12 col-lg-4">
                                    <div style="height: 250px; width: 100%;"><canvas id="graficoPacotes"></canvas></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        criarLinha('graficoRAM', [10, 25, 48, 47, 55, 59, 60, 67, 70, 78]);
        criarMedidor('medidorRAM', 78, '#dd3315');

        criarLinha('graficoCPU', [0, 12, 38, 30, 45, 48, 40, 45, 45, 45]);
        criarMedidor('medidorCPU', 45, '#dfe211');

        criarLinha('graficoDisco', [0, 0, 0, 0, 1, 9, 15, 23, 35, 49]);
        criarMedidor('medidorDisco', 49, '#dfe211');

        criarLinhaRede('graficoRede', [10, 12, 8, 5, 1, 0, 0, 0, 0, 0]);
        criarGraficoPacotes()


    } else if (card.id == 'card2') {
        conteudo_dashs.innerHTML = `
            <div class="d-flex flex-column bg-dark p-3 rounded mt-4 w-75">
                <h2 class="text-light">Relatório Individual - Radar 3</h2>
                <p class="text-light mb-4"><b>Modelo:</b> Doppler H37 | <b>Status:</b> Crítico | <b>Em alerta:</b> RAM, Rede e Buffer</p>

                <div class="row g-3">

                    <div class="col-12">
                        <div class="p-3 rounded d-flex flex-column" style="background-color: var(--bg-principal)">
                            <h4 class="text-light mb-3">Uso da RAM</h4>
                                <div class="row g-3 align-items-center">
                                <div class="col-12 col-lg-8">
                                    <div style="height: 250px; width: 100%;"><canvas id="graficoRAM"></canvas></div>
                                </div>
                                <div class="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center text-light">
                                    <div style="height: 180px; width: 100%; max-width: 300px;"><canvas id="medidorRAM"></canvas></div>
                                    <h3 class="mt-2 mb-0">95.5%</h3>
                                    <p class="mb-0">Última leitura</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="p-3 rounded d-flex flex-column" style="background-color: var(--bg-principal)">
                            <h4 class="text-light mb-3">Uso da CPU</h4>
                            <div class="row g-3 align-items-center">
                                <div class="col-12 col-lg-8">
                                    <div style="height: 250px; width: 100%;"><canvas id="graficoCPU"></canvas></div>
                                </div>
                                <div class="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center text-light">
                                    <div style="height: 180px; width: 100%; max-width: 300px;"><canvas id="medidorCPU"></canvas></div>
                                    <h3 class="mt-2 mb-0">100%</h3>
                                    <p class="mb-0">Última leitura</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="p-3 rounded d-flex flex-column" style="background-color: var(--bg-principal)">
                            <h4 class="text-light mb-3">Utilização do Buffer de disco</h4>
                            <div class="row g-3 align-items-center">
                                <div class="col-12 col-lg-8">
                                    <div style="height: 250px; width: 100%;"><canvas id="graficoDisco"></canvas></div>
                                </div>
                                <div class="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center text-light">
                                    <div style="height: 180px; width: 100%; max-width: 300px;"><canvas id="medidorDisco"></canvas></div>
                                    <h3 class="mt-2 mb-0">7%</h3>
                                    <p class="mb-0">Última leitura</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="p-3 rounded d-flex flex-column" style="background-color: var(--bg-principal)">
                            <h4 class="text-light mb-3">Rede</h4>
                            <div class="row g-3 align-items-center">

                                <div class="col-12 col-lg-8">
                                    <div style="height: 250px; width: 100%;"><canvas id="graficoRede"></canvas></div>
                                </div>

                                <div class="col-12 col-lg-4">
                                    <div style="height: 250px; width: 100%;"><canvas id="graficoPacotes"></canvas></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        criarLinha('graficoRAM', [13, 21, 38, 49, 54, 51, 63, 67, 78, 95.5]);
        criarMedidor('medidorRAM', 95.5, '#dd3315');

        criarLinha('graficoCPU', [0, 14, 42, 32, 38, 51, 43, 61, 75, 100]);
        criarMedidor('medidorCPU', 100, '#dd3315');

        criarLinha('graficoDisco', [0, 0, 0, 0, 0, 0, 0, 0, 0, 7]);
        criarMedidor('medidorDisco', 7, '#dfe211');

        criarLinhaRede('graficoRede', [10, 12, 8, 9, 7, 5, 3, 3, 1, 0]);
        criarGraficoPacotes()


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
                'Recebido'
            ],

            datasets: [{
                label: 'Pacotes por segundo',
                data: [0, 0],

                backgroundColor: [
                    '#2196F3',
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
                    suggestedMax: 100,
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

