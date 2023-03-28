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
    
        color: {legend: true, scheme: 'blues'},
        width: 1200
    })


    d3.select('#chart').append(() => chart3)

})