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

      style: {
        backgroundColor: "1f1f1f",
        scheme: 'blues',
        color: 'rgb(107, 174, 214)'
      }

    })

    d3.select('#chart').append(() => chart)
})