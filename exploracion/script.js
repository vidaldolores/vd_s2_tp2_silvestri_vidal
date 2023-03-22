d3.csv('astronautas.csv', d3.autoType).then(data => {


  // Total astronautas por genero
  let chart = Plot.plot({
    marks: [
      Plot.barY(data, 
        Plot.groupX({y: 'count'}, {x: 'genero', sort:{x: 'y', reverse: true}})  
      )
    ],
    x: {grid: false, line: true},
    y: {grid: false, line: true},
    color: {
      legend: true,
      scheme: "blues"
    },
  })

  // Edad promedio por pais
  let chart2 = Plot.plot({
    marks: [
      Plot.barX(
        data,
        Plot.groupY(
          {
            x1: 'min',
            x2: 'max',
          },
          { x: 'edad_mision', y: 'ocupacion' },
        ),
      ),
    ],

    y: {label: "Ocupacion", labelOffset: 50},

    width: 900,
    marginLeft: 150, 
  })

  // - Horas en mision según nacionalidad 
  let chart3 = Plot.plot({
    marks: [
        Plot.barY(data, 
          Plot.groupX({y: 'count'}, {x: 'nacionalidad', sort:{x: 'y', reverse: true}})  
        )
    ],
    x: {grid: false, line: true},
    y: {grid: false, line: true},
    width: 1000,  
    color: {
      legend: true,
      scheme: "blues"
    },
    style: {
      backgroundColor: '#272727',
      color: '#ffffff'
    },
  })

  // - Horas en mision vs horas en eva 
  let chart4 = Plot.plot({
    marks: [
      Plot.rectY(data, 
        Plot.binX({y: 'sum'}, {x: "anio_mision", y: "mision_hs", thresholds: 11, fill: "ocupacion"}),
        ),
      ],
    width: 1000,
    y: {grid: true},
    style: {
      backgroundColor: '#272727',
      color: '#ffffff'
    },
    color: {
      scheme: 'greys'
    }
  })


  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
  d3.select('#chart2').append(() => chart2)
  d3.select('#chart3').append(() => chart3)
  d3.select('#chart4').append(() => chart4)
})