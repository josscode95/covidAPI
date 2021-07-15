var canva = document.getElementById('myChart');
   var myChart = new Chart(canva, {
      type: 'line',
      data: {
         datasets: [
            {
               label: 'Confirmados',
               backgroundColor: 'transparent',
               borderColor: 'red',
               borderWidth: 1
            },
            {
               label: 'Muertes',
               backgroundColor: 'transparent',
               borderColor: 'green',
               borderWidth: 1
            },
            {
               label: 'Recuperados',
               backgroundColor: 'transparent',
               borderColor: 'blue',
               borderWidth: 1
            },
            {
               label: 'Activos',
               backgroundColor: 'transparent',
               borderColor: 'orange',
               borderWidth: 1
            }
         ]
      },
      options: {
         scales: {
               y: {
                  beginAtZero: true
               }
         }
      }
   });

   let url = 'peru.json';

   fetch(url)
      .then(res => res.json())
      .then(datos => mostrar(datos))
      .catch(err => console.log(err))


   const mostrar = (casos) =>{

      casos.forEach(element => {
         myChart.data['labels'].push(element.Date)
         myChart.data['datasets'][0].data.push(element.Confirmed)
         myChart.data['datasets'][1].data.push(element.Deaths)
         myChart.data['datasets'][2].data.push(element.Recovered)
         myChart.data['datasets'][3].data.push(element.Active)
      });

   }