
export function filtrarPorNombre(productos,texto){
    const busqueda=texto.toLowerCase().trim();
    return productos.filter(p=>p.nombre.toLowerCase().includes(busqueda));
}