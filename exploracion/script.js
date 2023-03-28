d3.csv('astronautas.csv', d3.autoType).then(data => {
  

  // Total astronautas por genero
  let chart = Plot.plot({
    marks: [
      Plot.barY(data, 
        Plot.groupX({y: 'count'}, {x: 'ocupacion', sort:{x: 'y', reverse: true}})  
      )
    ],
    x: {grid: false, line: true},
    y: {grid: true, line: false},
    color: {
      legend: true,
      scheme: "blues"
    },
  })

  // Edad promedio por pais
  let chart2 = Plot.plot({
    marks: [
      Plot.barX(
        data.filter(d => d.ocupacion != 'participante de vuelo espacial'),
        Plot.groupY(
          {
            x1: 'min',
            x2: 'max',
          },
          { x: 'edad_mision', y: 'ocupacion' },
        ),
      ),
    ],

    y: {label: "Ocupacion"},
    x: {grid: true, insetLeft: 50, insetRight: 30},

    width: 900,
    height: 300,
    marginLeft: 150, 
    insetLeft: 30,
    insetRight: 30
  })

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

  // - Horas en mision vs horas en eva 
  let chart4 = Plot.plot({
    marks: [
      Plot.lineY(data.filter(d => d.ocupacion != 'participante de vuelo espacial'), 
        Plot.binX({y: 'sum'}, {x: "anio_mision", y: "mision_hs", thresholds: 11, stroke: "ocupacion", strokeWidth: 3, curve: 'natural'}),
        ),
      ],
    width: 1000,
    y: {grid: true, zero: true},
    style: {
      backgroundColor: '#272727',
      color: '#ffffff'
    },
    color: {
      scheme: 'blues',
      legend: true
    }
  })


  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
  d3.select('#chart2').append(() => chart2)
  d3.select('#chart3').append(() => chart3)
  d3.select('#chart4').append(() => chart4)
})