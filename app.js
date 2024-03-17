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


// <!-- index.html -->
// <!DOCTYPE html>
// <html lang="es">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Página Principal</title>
// </head>
// <body>
//   <a id="btnConectarAPI" href="mostrar-datos.html" target="_blank">Mostrar Datos</a>

//   <script>
//     document.getElementById('btnConectarAPI').addEventListener('click', () => {
//       fetch('https://ejemploapi.com/datos')
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('La solicitud a la API no fue exitosa');
//           }
//           return response.json();
//         })
//         .then(data => {
//           // Construye la URL con los parámetros de los datos
//           const url = new URL('mostrar-datos.html', window.location.origin);
//           url.searchParams.append('dato1', data.dato1);
//           url.searchParams.append('dato2', data.dato2);
//           // Redirige a la página de mostrar-datos.html con los parámetros de los datos
//           window.location.href = url.href;
//         })
//         .catch(error => {
//           console.error('Error:', error);
//         });
//     });
//   </script>
// </body>
// </html>


