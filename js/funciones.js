var productosSeleccionados = productosSeleccionados || [];


function cargarSeccion(seccion) {
  const contenidoPrincipal = document.getElementById("contenido-principal");

  if (seccion === 'productos') {
      fetch('secciones/productos.html')  // Aquí debes poner la ruta a tu archivo productos
          .then(response => response.text())
          .then(data => {
              contenidoPrincipal.innerHTML = data;
          })
          .catch(error => console.log(error));
  } 

  if (seccion === 'contacto') {
    fetch('secciones/contacto.html')  // Aquí debes poner la ruta a tu archivo productos
      .then(response => response.text())
      .then(data => {
        contenidoPrincipal.innerHTML = data;
    })
    .catch(error => console.log(error));
} 
  }



function verCarrito() {
  if (productosSeleccionados.length > 0) {
      fetch('secciones/carrito.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: 'productos=' + encodeURIComponent(JSON.stringify(productosSeleccionados))
      })
      .then(response => response.text())
      .then(data => {
          document.getElementById('contenido-principal').innerHTML = data;
      })
      .catch(error => {
          console.error('Error al cargar el carrito:', error);
      });
  } else {
      alert("El carrito está vacío. Agregue productos antes de ver el carrito.");
  }
}


function agregarAlCarrito(buttonElement, producto, precio) {
  var cantidadInput = buttonElement.parentElement.querySelector('.cantidad');
  var cantidad = parseInt(cantidadInput.value);

  if (cantidad < 1) {
      alert("Por favor ingrese una cantidad válida.");
      return;
  }

  var productoDetalle = {
      nombre: producto,
      precio: precio,
      cantidad: cantidad
  };

  productosSeleccionados.push(productoDetalle);

  // Solo actualizar el valor oculto, pero NO enviar el formulario
  document.getElementById("productos-seleccionados").value = JSON.stringify(productosSeleccionados);

  alert(`${producto} agregado al carrito.`);
}

