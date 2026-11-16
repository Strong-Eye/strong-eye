
const RadarData = {
  labels: ["CPU", "RAM", "Disco"],
  datasets: [
    {
      label: "Atual",
      data: [45, 76, 60],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
    },
    {
      label: "Previsto (24h)",
      data: [45, 100, 60],
      fill: true,
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      borderColor: "rgb(255, 159, 64)",
      pointBackgroundColor: "rgb(255, 159, 64)",
      pointBorderColor: "#fff",
    },
    {
      label: "Limite Máximo",
      data: [100, 100, 90],
      fill: false,
      borderDash: [5, 5],
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Limite Mínimo",
      data: [10, 10, 10],
      fill: false,
      borderDash: [5, 5],
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
    },
  ],
};

const PrevisaoData = {
  labels: [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00"
  ],

  datasets: [
    {
      label: "Histórico",
      data: [45, 48, 51, 55, 58, 62, null, null, null, null, null],
      borderColor: "rgb(54, 162, 235)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderWidth: 2,
      tension: 0.3,
      pointRadius: 3,
    },
    {
      label: "Previsão",
      data: [null, null, null, null, null, 62, 68, 73, 79, 85, 92],
      borderColor: "rgb(255, 159, 64)",
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      borderDash: [5, 5],
      borderWidth: 2,
      tension: 0.3,
      pointRadius: 3,
    },
    {
      label: "Limite Máximo",
      data: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
      borderColor: "rgb(255, 99, 132)",
      borderDash: [5, 5],
      borderWidth: 1,
      pointRadius: 0,
      fill: false,
    },
    {
      label: "Limite Mínimo",
      data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      borderColor: "rgb(255, 99, 132)",
      borderDash: [5, 5],
      borderWidth: 1,
      pointRadius: 0,
      fill: false,
    }
  ]
};

const RadarConfig = {
  type: "radar",
  data: RadarData,
  options: {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.5,

    elements: {
      line: {
        borderWidth: 2,
      },
    },

    scales: {
      r: {
        min: 0,
        max: 100,

        ticks: {
          color: "white",
          backdropColor: "transparent",
          stepSize: 25,
        },

        pointLabels: {
          color: "white",
        },
        grid: {
        color: '#ffffff8c' 
      },
      angleLines: {
        color: '#ffffff59' 
      }
      },
    },
  },
};

const PrevisaoConfig = {
  type: "line",

  data: PrevisaoData,

  options: {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 3,

    scales: {
      y: {
        min: 0,
        max: 100,
        title: {
          display: true,
          text: "Utilização (%)"
        },
        grid: {
        color: '#ffffff00' 
      },
        border: {
        color: '#ffffff00'
      }
      },

      x: {
        title: {
          display: true,
          text: "Horário"
        },
        grid: {
        color: '#ffffff00' 
      },
        border: {
        color: '#ffffff' 
      }
      }
    }
  }
};


const PrevisaoChart = new Chart(
  document.getElementById("PrevisaoChart"),
  PrevisaoConfig
);
const RadarChart = new Chart(
  document.getElementById("RadarChart"),
  RadarConfig
);


const components = {
  CPU: {
    current: 45,
    average: 43.2,
    max: 58.4,
    min: 31.5,
    limitMax: 90,
    limitMin: 10,
    status: "Normal",
    confidence: "Confiab. alta",
    alerts: "0 de 3",
    risk: "RAM",
    riskDetail: "76% · limite 80%",
    remaining: 45,
    above: 35,
    time: "—",
  },

  RAM: {
    current: 76,
    average: 72.4,
    max: 79.2,
    min: 61.0,
    limitMax: 80,
    limitMin: 10,
    status: "Atenção",
    confidence: "Confiab. média",
    alerts: "1 de 3",
    risk: "RAM",
    riskDetail: "76% · limite 80%",
    remaining: 4,
    above: 66,
    time: "4 h",
    critical: true,
  },

  Disco: {
    current: 60,
    average: 59.8,
    max: 60.8,
    min: 59.1,
    limitMax: 90,
    limitMin: 10,
    status: "Normal",
    confidence: "Confiab. alta",
    alerts: "1 de 3",
    risk: "RAM",
    riskDetail: "76% · limite 80%",
    remaining: 30,
    above: 50,
    time: "—",
  },
};

const periods = {
  "1 h": {
    average: 60.1,
    max: 60.8,
    min: 59.7,
    suffix: "última hora",
  },

  "6 h": {
    average: 59.9,
    max: 60.8,
    min: 59.3,
    suffix: "últimas 6 horas",
  },

  "24 h": {
    average: null,
    max: null,
    min: null,
    suffix: "últimas 24 horas",
  },

  "7 d": {
    average: 58.7,
    max: 63.2,
    min: 54.8,
    suffix: "últimos 7 dias",
  },

  "30 d": {
    average: 57.9,
    max: 67.1,
    min: 49.2,
    suffix: "últimos 30 dias",
  },
};

const componentNames = ["CPU", "RAM", "Disco"];

let selectedComponent = "Disco";
let selectedPeriod = "24 h";

function updateDashboard() {
  const data = components[selectedComponent];
  const period = periods[selectedPeriod];

  document.getElementById("detailTitle").textContent =
    `${selectedComponent} · histórico, previsão e limites (${selectedPeriod})`;

  document.getElementById("currentValue").textContent =
    `${data.current}%`;

  const stats = selectedComponent === "Disco" ? period : data;

  document.getElementById("averageValue").textContent =
    `${(stats.average ?? data.average).toFixed(1)}%`;

  document.getElementById("maxValue").textContent =
    `${(stats.max ?? data.max).toFixed(1)}%`;

  document.getElementById("minValue").textContent =
    `${(stats.min ?? data.min).toFixed(1)}%`;

  document.getElementById("toLimit").textContent =
    `${data.remaining}%`;

  document.getElementById("timeToLimit").textContent =
    data.time;

  document.getElementById("componentStatus").textContent =
    data.status;

  document.getElementById("confidenceStatus").textContent =
    data.confidence;

  document.getElementById("componentStatus").className =
    `pill ${data.critical ? "critical" : "good"}`;

  document.getElementById("maxLimitLabel").textContent =
    data.limitMax;

  document.getElementById("minLimitLabel").textContent =
    data.limitMin;

  document.getElementById("maxRemaining").textContent =
    `${data.remaining}%`;

  document.getElementById("aboveMinimum").textContent =
    `${data.above}%`;

  document.getElementById("alertCount").textContent =
    data.alerts;

  document.getElementById("highestRisk").textContent =
    data.risk;

  document.getElementById("riskDetail").textContent =
    data.riskDetail;

  document.getElementById("overallStatus").textContent =
    "Crítico";

  document.getElementById("reliability").textContent =
    data.critical ? "Média" : "Alta";

  document.getElementById("headerStatus").textContent =
    "Crítico";

  document.getElementById("headerStatus").className =
    "pill critical";

  document.querySelectorAll("[data-component]").forEach((btn) => {
    btn.classList.toggle(
      "active",
      btn.dataset.component === selectedComponent
    );
  });

  document.querySelectorAll("[data-period]").forEach((btn) => {
    btn.classList.toggle(
      "active",
      btn.dataset.period === selectedPeriod
    );
  });

  window.dashboardData = {
    component: selectedComponent,
    period: selectedPeriod,
    ...data,
    periodStats: period,
  };

}

document.querySelectorAll("[data-component]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedComponent = button.dataset.component;
    updateDashboard();
  });
});

document.querySelectorAll("[data-period]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedPeriod = button.dataset.period;
    updateDashboard();
  });
});

document.getElementById("previousComponent").addEventListener("click", () => {
  const index = componentNames.indexOf(selectedComponent);

  selectedComponent =
    componentNames[
      (index + componentNames.length - 1) % componentNames.length
    ];

  updateDashboard();
});

document.getElementById("nextComponent").addEventListener("click", () => {
  const index = componentNames.indexOf(selectedComponent);

  selectedComponent =
    componentNames[(index + 1) % componentNames.length];

  updateDashboard();
});

document.getElementById("radarSelect").addEventListener("change", (event) => {
  const id = event.target.value;

  document.getElementById("radarTitle").textContent = id;

  showToast(`${id} selecionado. Os dados exibidos são demonstrativos.`);
});

document.getElementById("technicianRows").addEventListener("click", (event) => {
  const button = event.target.closest("[data-tech]");

  if (!button) return;

  document.querySelectorAll("#technicianRows tr").forEach((row) => {
    row.classList.remove("selected-tech");
  });

  button.closest("tr").classList.add("selected-tech");

  showToast(
    `${button.dataset.tech} selecionado para atendimento (demonstração).`
  );
});

let toastTimer;

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}


updateDashboard();
