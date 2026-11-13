faixa = document.getElementById("faixa");

radares = [
    {
        nome: "Radar SP-01",
        componente: "RAM",
        valor: 0.7
    },
    {
        nome: "Radar RJ-05",
        componente: "CPU",
        valor: 3.1
    },
    {
        nome: "Radar SP-02",
        componente: "Disco",
        valor: 5.3
    },
]

const largura = faixa.clientWidth;
const parte = largura / 14;

for(let i=0;i<radares.length;i++) {
    let x = radares[i].valor * parte;

    faixa.innerHTML += `
        <div class="position-absolute top-50 translate-middle gap-1" style="left: ${x}px; ">
            <div class="bg-dark text-white rounded-circle ponto-radar"></div>
            <p class="small text-white position-absolute top-100 start-50 text-nowrap">
                ${radares[i].nome}
            </p>
        </div>
    `
}   
