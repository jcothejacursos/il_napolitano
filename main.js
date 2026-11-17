//============================================================
// main.js: Importa los módulos y los conecta entre sí. 
//============================================================

import {obtenerProductos} from './js/api.js';
import {abrirModal, renderizarGaleria, configurarBuscador} from './js/ui.js';

// lee los datos del JSON y los pega en la Interfaz
async function cargarProductos(){
 const data=await obtenerProductos();
 renderizarGaleria(data);
 configurarBuscador(data);
}

document.addEventListener('DOMContentLoaded', cargarProductos);