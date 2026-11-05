
//============================================================
// api.js: todo lo que tiene que ver con pedir datos al servidor.
// NO TRABAJA CON LA INTERFAZ
//============================================================


export async function obtenerProductos() {
      const response = await fetch('productos.json');
      const productos = await response.json();
      return productos;
} 