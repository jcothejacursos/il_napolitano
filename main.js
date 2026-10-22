document.addEventListener('DOMContentLoaded',cargarProductos);

async function cargarProductos() {
  const response = await fetch('productos.json');   // 1. pide el archivo
  const productos = await response.json();          // 2. convierte el contenido a objeto/array JS
  console.log(productos);                           // 3. ya podés usarlo
}