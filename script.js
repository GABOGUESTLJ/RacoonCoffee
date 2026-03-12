// 1. ELEMENTOS
const btn_Menu_SB = document.getElementById('btn-menu-sb');
const btn_Sidebar = document.getElementById('sidebar');
const btn_close_sb = document.querySelector('.btn-close-sb');
const btn_explorar_m_hero = document.querySelector('.btn_explorar_menu_hero');
const btn_explorar_combos_menu = document.querySelector('.btn_explorar_combos_menu');
const header_combos = document.querySelector('.header_combos');
const header_productos = document.querySelector('.header_productos');
const header_logo = document.querySelector('.header-logo');

const hero_section = document.getElementById('hero');
const menu_section = document.getElementById('menu_section');
const combos_section = document.getElementById('combos_section');
const productos_container = document.getElementById('productos_container');
const combos_container = document.getElementById('combos_container');

// 2. CONFIGURACIÓN
const Vistas = Object.freeze({
    HERO: 'inicio',
    MENU: 'productos',
    COMBOS: 'combos'
});

const productos = [
    { nombre: "Mocachino", precio: 1.50, imagen: "images/productos/Mocachino.png", categoria: ["Bebidas_calientes"] },
    { nombre: "Espresso", precio: 1.50, imagen: "images/productos/Espresso.png", categoria: ["Bebidas_calientes"] },
    { nombre: "Frappé", precio: 1.50, imagen: "images/productos/Frappe.png", categoria: ["Bebidas_frias"] }
];

const combos = [
    {
        nombre: "Combo Americano",
        precio: 2.00,
        imagen: "images/productos/combo1.png",
        contenido: ["Americano Grande", "Croissant de Jamón y Queso"], 
        categoria: ["Bebidas_calientes", "Salados"]
    },
    {
        nombre: "Breaktime",
        precio: 2.00,
        imagen: "images/productos/breaktime.png",
        contenido: ["Capuchino medio", "Galleta de chocolate"], 
        categoria: ["Bebidas_calientes", "Dulces"]
    },
    {
        nombre: "Para compartir",
        precio: 5.00,
        imagen: "images/productos/compartir.png",
        contenido: ["Dos Lattes", "2 Sanduches de la casa", "Porción de cheesecake"], 
        categoria: ["Bebidas_calientes", "Salados", "Dulces"]
    }
];

// 3. MOTOR DE RENDERIZADO UNIVERSAL
function renderizarItems(lista, contenedor) {
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

// 4. SISTEMA DE FILTRADO SEPARADO
// Filtros del Menú
const botonesFiltroMenu = document.querySelectorAll('.btn_filter_menu');
botonesFiltroMenu.forEach(boton => {
    boton.addEventListener('click', () => {
        const cat = boton.getAttribute('data-cat');
        const filtrados = cat === 'todos' ? productos : productos.filter(p => p.categoria.includes(cat));
        renderizarItems(filtrados, productos_container);
    });
});

// Filtros de Combos
const botonesFiltroCombos = document.querySelectorAll('.btn_filter_combos');
botonesFiltroCombos.forEach(boton => {
    boton.addEventListener('click', () => {
        const cat = boton.getAttribute('data-cat');
        const filtrados = cat === 'todos' ? combos : combos.filter(c => c.categoria.includes(cat));
        renderizarItems(filtrados, combos_container);
    });
});

// 5. NAVEGACIÓN
function navegar(vista) {
    window.location.hash = vista;
    const seccionesMap = {
        [Vistas.HERO]: hero_section,
        [Vistas.MENU]: menu_section,
        [Vistas.COMBOS]: combos_section
    };
    const todasLasSecciones = [hero_section, menu_section, combos_section];
    todasLasSecciones.forEach(s => s.style.display = 'none');

    if (seccionesMap[vista]) {
        seccionesMap[vista].style.display = 'block';
    }
}

// 6. LISTENERS GENERALES
btn_Menu_SB.addEventListener('click', () => btn_Sidebar.classList.toggle('active'));
btn_close_sb.addEventListener('click', () => btn_Sidebar.classList.remove('active'));

window.addEventListener('hashchange', () => {
    const vistaActual = window.location.hash.replace('#', '');
    navegar(vistaActual || Vistas.HERO);
});

btn_explorar_m_hero.addEventListener('click', () => navegar(Vistas.MENU));
btn_explorar_combos_menu.addEventListener('click', () => navegar(Vistas.COMBOS));
header_combos.addEventListener('click', (e) => { e.preventDefault(); navegar(Vistas.COMBOS); });
header_productos.addEventListener('click', (e) => { e.preventDefault(); navegar(Vistas.MENU); });
header_logo.addEventListener('click', (e) => { e.preventDefault(); navegar(Vistas.HERO); });

// 7. INICIALIZACIÓN
renderizarItems(productos, productos_container); 
renderizarItems(combos, combos_container); 

const vistaInicial = window.location.hash.replace('#', '') || Vistas.HERO;
navegar(vistaInicial);