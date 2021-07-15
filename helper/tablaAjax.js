const datos = new XMLHttpRequest();

datos.open('GET', 'peru.json', true);
datos.send();
datos.onreadystatechange = function(){

   if(this.readyState == 4 && this.status == 200){

      let json = JSON.parse(this.responseText);
      let res = document.querySelector('#tablaCovidBody');
      res.innerHTML = '';
      let numero = 1;

      for(let dcovid of json){

         res.innerHTML += `
            <tr class="tablaCovid__body--tr">
               <td class="tr__item">${numero++}</td>
               <td class="tr__item">${dcovid.Date.replace('T00:00:00Z', '')}</td>
               <td class="tr__item">${dcovid.Confirmed}</td>
               <td class="tr__item">${dcovid.Deaths}</td>
               <td class="tr__item">${dcovid.Recovered}</td>
               <td class="tr__item">${dcovid.Active}</td>
            </tr>
         `

      }

   }

}