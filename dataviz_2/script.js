d3.csv('astronautas.csv', d3.autoType).then(data => {
    
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

  d3.select('#chart').append(() => chart2)


})