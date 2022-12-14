const ctx = document.getElementById("myChart")

const data = [
    ['Apiacás', 5], ['Cuiabá', 50], ['Água Boa', 40], ['Alta Floresta', 25],
    ['Alto Taquari', 5], ['Arenápolis', 5], ['Barra do Bugres', 15], ['Barra do Garças', 30],
    ['Brasnorte', 10], ['Campo Novo do Parecis', 10], ['Campo Verde', 10], ['Canarana', 10],
    ['Chapada dos Guimarães', 10], ['Claúdia', 6], ['Colíder', 15], ['Colniza', 15],
    ['Comodoro', 16], ['Diamantino', 8], ['Feliz Natal', 6], ['Jaciara', 5],
    ['Juara', 10], ['Juína', 10], ['Juscimeira', 8], ['Matupá', 33],
    ["Mirassol d'Oeste", 10], ['Nortelândia', 18], ['Nova Canaa do Norte', 10],['Nova Mutum', 75], ['Nova Ubiratã', 10], ['Nova Xavantina', 25], ['Novo são Joaquim', 7], ['Paranaíta', 10 ], ['Paranatinga', 25], ['Pedra Preta', 5], ['Porto Alegre do Norte', 40], ['Poxoréo', 15], ['Primavera do Leste', 40], ['Querência', 10], ['Rondonópolis', 40], ['Rosário Oeste', 20]
];

const label = data.map(element =>{
return element[0]
})
const data2 = data.map(element => {
    return element[1]
})


let novoG = ""
let myChart = null

document.querySelectorAll(".troca").forEach(element => {

  element.addEventListener("click", (element)=>{

    if(myChart != null ){
      myChart.destroy()
    }
    novoG = element.target.value
  
  myChart = new Chart(ctx, {
    type: novoG,
    data: {
      labels:label ,
      datasets: [{
        label: 'Consumo de Copos De Primeira Instancia de 01/11/2022 a 30/11/2022',
        data: data2,
        borderWidth: 3,
        overflow: "scroll"
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
    plugins:[ChartDataLabels]
  });
  })
  
  
});

function clear (element){
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}





