document.querySelector(".nav-pedidos").addEventListener('click',()=>{
    clear(document.querySelector(".container-all"))



    let containermaps = document.createElement("div")
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")

    containermaps.className = "container-not-map"

    div1.className = "not-map"
    div2.className = "not-map"

    containermaps.append(div1,div2)
    document.querySelector(".container-all").appendChild(containermaps)
    map(div1, "Almoxarifado",[["Cuiabá",1],["Apiacás",1]])
    map(div2, "Patrimônio",[["Água Boa",1],["Poconé",1]])

})

function clear (element){
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
}

async function map(element,titleMap,data){
  const topology = await fetch(
      'topo.json'
  ).then(response => response.json());

  // const topology = await fetch(
  //     'topo.json'
  // ).then(response => response.json());





  // Prepare demo data. The data is joined to map using value of 'hc-key'
  // property by default. See API docs for 'joinBy' for more info on linking
  // data and map.
  // const data = [
  //   ["Cuiabá",1]
  // ];

  // Create the chart
  Highcharts.mapChart(element, {
      chart: {
          map: topology,
          backgroundColor: 'aliceblue',
      },

      title: {
          text: titleMap
      },

      mapNavigation: {
          enabled: true,
          buttonOptions: {
              verticalAlign: 'bottom'
          }
      },

      colorAxis: {
          min: 0
      },

      series: [{
          data: data,
          name: 'papel',
          states: {
              hover: {
                  color: '#BADA55'
              }
          },
          dataLabels: {
              enabled: true,
              format: '{point.name}'
          }
      }]
  });

};