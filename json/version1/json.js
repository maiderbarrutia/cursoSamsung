"use strict";

const resultados = document.querySelector("#results");
const resultadosProductos = document.querySelector("#productResults");
fetch("ejercicio.json")
  .then((response) => response.json())
  .then((data) => {
    tablaSupermercados(data);
    tablaProductos(data);
  });

function tablaSupermercados(data) {
  resultados.innerHTML = "";
  data.supermercados.map((valor) => {
    resultados.innerHTML += `
            <tr>
                <th>${valor.id}</th>
                <td>${valor.nombre}</td>
                <td>${valor.direccion}</td>
                <td>
                    Latitud: ${valor.geolocalizacion.latitud}
                    Longitud: ${valor.geolocalizacion.longitud}
                </td>
            </tr>
          `;
  });
}
function tablaProductos(data) {
  resultadosProductos.innerHTML = "";
  for (let valor of data.supermercados) {
    for (const producto of valor.productos) {
      resultadosProductos.innerHTML += `
              
              <tbody>
                  <tr>
                      <th>${valor.nombre}</th>
                      <td>${producto.nombre}</td>
                      <td>${producto.origen}</td>
                      <td>${producto.unidades}</td>
                      <td>${producto.unidadMedida}</td>
                      <td>${producto.precio} €</td>
                      <td>${producto.productoAdquirido}</td>
                  </tr>

              </tbody>
            `;
    }
  }
}
