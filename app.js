document.getElementById('abrirContenido').addEventListener('click', function () {

    document.getElementById('inicio').style.display = 'none';

    document.getElementById('contenidoOculto').style.display = 'block';

});

// conexion api

document.getElementById('results').addEventListener('click', () => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Mostrar los resultados en la página
        // const resultsDiv = document.getElementById('results');
        // data.forEach(item => {
        //   const resultItem = document.createElement('p');
        //   resultItem.textContent = item.nombre;
        //   resultsDiv.appendChild(resultItem);
        // });
      })
      .catch(error => {
        console.error('Error al obtener los datos', error);
      });
});



// document.getElementById('personajes').addEventListener('click', () => {
//     fetch('https://hp-api.onrender.com/api/characters')
//     .then(response => response.json())
//     .then(data => {
//     console.log(data);
//     //mostrar datos en mi html
//     const consulta = document.getElementById('resultadoAPI');
//       consulta.innerHTML = `<p class="text-black">Nombre: ${data[0].name}</p>
//                             <p class="text-white">Casa: ${data[0].house}</p>
//                             <p class="text-white">Patronus: ${data[0].patronus}</p>
//                             <p class="text-white">Image: ${data[0].image}</p>`;
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// });

