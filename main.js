
function abrirModal(pizza){
  Swal.fire({
    title: pizza.nombre.toUpperCase(),
    html: `<img src="${pizza.imagen}"> <p>${pizza.descripcion}</p> <p>${pizza.precio}</p>`,
    confirmButtonText: 'Cerrar',
    confirmButtonColor: '#0D7139',
    width: '500px',
  })
}

document.addEventListener('DOMContentLoaded',cargarProductos);

async function cargarProductos() {
  const response = await fetch('productos.json');   // 1. pide el archivo
  const productos = await response.json();          // 2. convierte el contenido a objeto/array JS
  let gallery = document.querySelector('.gallery')
  productos.forEach(function (pizza){
    let li = document.createElement('li');
    li.innerHTML= `
    <div class="box"> 
      <figure>
        <img src="${pizza.imagen}" class="img-clickeable"/>
        <figcaption>
          <h3>${pizza.nombre}</h3>
          <p>${pizza.precio}</p>
          <time>${pizza.fecha}</time>
        </figcaption>
        <figure/>
      <button class="button" value="1" data-price="${pizza.precio}">
        Añadir al carrito <i class="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
    `;
    // ✅ Abrir el modal al hacer clic en la imagen
    const img = li.querySelector('.img-clickeable');
    img.addEventListener('click', () => abrirModal(pizza));

    gallery.appendChild(li);
  })
}