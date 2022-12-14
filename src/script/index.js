


(async () => {



    const topology = await fetch(
        'topo.json'
    ).then(response => response.json());

    // const topology = await fetch(
    //     'topo.json'
    // ).then(response => response.json());





    // Prepare demo data. The data is joined to map using value of 'hc-key'
    // property by default. See API docs for 'joinBy' for more info on linking
    // data and map.
    const data = [
        ['Apiacás', 5], ['Cuiabá', 50], ['Água Boa', 40], ['Alta Floresta', 25],
        ['Alto Taquari', 5], ['Arenápolis', 5], ['Barra do Bugres', 15], ['Barra do Garças', 30],
        ['Brasnorte', 10], ['Campo Novo do Parecis', 10], ['Campo Verde', 10], ['Canarana', 10],
        ['Chapada dos Guimarães', 10], ['Claúdia', 6], ['Colíder', 15], ['Colniza', 15],
        ['Comodoro', 16], ['Diamantino', 8], ['Feliz Natal', 6], ['Jaciara', 5],
        ['Juara', 10], ['Juína', 10], ['Juscimeira', 8], ['Matupá', 33],
        ["Mirassol d'Oeste", 10], ['Nortelândia', 18], ['Nova Canaa do Norte', 10],['Nova Mutum', 75], ['Nova Ubiratã', 10], ['Nova Xavantina', 25], ['Novo são Joaquim', 7], ['Paranaíta', 10 ], ['Paranatinga', 25], ['Pedra Preta', 5], ['Porto Alegre do Norte', 40], ['Poxoréo', 15], ['Primavera do Leste', 40], ['Querência', 10], ['Rondonópolis', 40], ['Rosário Oeste', 20]
    ];

    // Create the chart
    Highcharts.mapChart('container-map', {
        chart: {
            map: topology,
            backgroundColor: 'aliceblue',
        },

        title: {
            text: 'Mapa Distributivo de Atividade'
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

})();
