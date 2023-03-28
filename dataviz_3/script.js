d3.csv('astronautas.csv', d3.autoType).then(data => {
    // - Horas en mision según nacionalidad 
    let chart3 = Plot.plot({
        facet: {
          data: data,
          x: 'genero',
        },
    
        marks: [
            Plot.barY(data, 
              Plot.groupX({y: 'count'}, {x: 'ocupacion', fill: 'ocupacion'})
            ),
            Plot.axisX({tickVisible: false}),
            Plot.frame()
        ],
    
        color: {legend: false, scheme: 'blues'},
        style: {
          backgroundColor: "1f1f1f",
          color: "white"
        },
        width: 900,
        height: 400
    })


    d3.select('#chart').append(() => chart3)

})