export function renderizarItems(lista, contenedor) {
    contenedor.innerHTML = "";
    lista.forEach(item => {
        const contenidoHTML = item.contenido 
            ? `<ul class="lista_contenido">${item.contenido.map(i => `<li>• ${i}</li>`).join('')}</ul>` 
            : "";

        contenedor.innerHTML += `
            <div class="card_cafe">
                <img src="${item.imagen}" alt="${item.nombre}">
                <div class="card_info">
                    <h3>${item.nombre}</h3>
                    ${contenidoHTML}
                    <p class="precio">$${item.precio.toFixed(2)}</p>
                    <button class="btn-comprar">Añadir al carrito</button>
                </div>
            </div>
        `;
    });
}



