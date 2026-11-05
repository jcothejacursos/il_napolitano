//====================================================================
//  ui.js: todo lo que se dibuja en pantalla (Por ej: galería y modal).
//====================================================================

export function abrirModal(pizza) {
    Swal.fire({
        title: pizza.nombre.toUpperCase(),
        html: `<img src="${pizza.imagen}" style="width:100%;border-radius:8px; margin-bottom:12px"> <p style="color:#555;font-size:1rem;margin-bottom:0.75rem">${pizza.descripcion}</p> <p style="color:#135D76;font-size:2rem;font-weight:bold;margin:0">$ ${pizza.precio.toLocaleString('es-AR')}</p>`,
        confirmButtonText: 'Cerrar',
        confirmButtonColor: '#0D7139',
        width: '500px',
    })
}

export async function renderizarGaleria(productos) {

    let gallery = document.querySelector('.gallery'); //Dentro del ul cargo dinamicamente li
    productos.forEach(function (pizza) {
        let li = document.createElement("li");
        li.innerHTML = `
<div class="box">
                    <figure>
                        <img src="${pizza.imagen}" class="img-clickeable"/>
                        <figcaption>
                            <h3>${pizza.nombre}</h3>
                            <p>$ ${pizza.precio.toLocaleString('es-AR')}</p>
                            <time>${pizza.fecha}</time>
                        </figcaption>
                    </figure>
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