d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    let chart = Plot.plot({
      marks: [
        Plot.dot(data, {
          x: 'genero',
          y: 'edad_mision',
          fill: 'ocupacion'
        }),
      ],
      x: {grid: true, zero: true, line: true},
      y: {grid: true, line: true},
      color: {
        legend: true
      }
    })

    // Guardamos el svg generado en la variable chart
    let chart2 = Plot.plot({
        marks: [
            Plot.tickX(data, {
            y: 'genero',
            x: 'edad_mision',
            fill: 'ocupacion'
          }),
        ],
        x: {grid: true, line: true},
        y: {grid: true, line: true},
        color: {
          legend: true
        }
      })

    // Agregamos chart al div#chart de index.html
    d3.select('#chart').append(() => chart)
    d3.select('#chart2').append(() => chart2)
})