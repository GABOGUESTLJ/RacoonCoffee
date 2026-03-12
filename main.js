// 1. IMPORTACIONES (Traemos el equipo especializado)
import { Vistas, productos, combos, coffies } from './data.js';
import { renderizarItems } from './ui.js';
import { navegar } from './navigation.js';

// 2. SELECTORES (Captura de objetivos en el DOM)
// Navegación General
const header_logo = document.querySelector('.header-logo');
const header_productos = document.querySelector('.header_productos');
const header_combos = document.querySelector('.header_combos');
const header_racoon_coffies = document.querySelector('.header_coffies');

// Sidebar y Botones de Acción
const btn_Menu_SB = document.getElementById('btn-menu-sb');
const btn_Sidebar = document.getElementById('sidebar');
const btn_close_sb = document.querySelector('.btn-close-sb');
const btn_explorar_m_hero = document.querySelector('.btn_explorar_menu_hero');
const btn_explorar_combos_menu = document.querySelector('.btn_explorar_combos_menu');

// Contenedores de Secciones (El Mapa)
const seccionesMap = {
    [Vistas.HERO]: document.getElementById('hero'),
    [Vistas.MENU]: document.getElementById('menu_section'),
    [Vistas.COMBOS]: document.getElementById('combos_section'),
    [Vistas.COFFIES]: document.getElementById('coffies_section')
};

// Contenedores de Inyección de Datos
const productos_container = document.getElementById('productos_container');
const combos_container = document.getElementById('combos_container');
const coffies_container = document.getElementById('coffies_container');

// 3. SISTEMA DE FILTRADO (Lógica de precisión)
// Filtros para la sección de Productos
document.querySelectorAll('.btn_filter_menu').forEach(boton => {
    boton.addEventListener('click', () => {
        const cat = boton.getAttribute('data-cat');
        const filtrados = cat === 'todos' ? productos : productos.filter(p => p.categoria.includes(cat));
        renderizarItems(filtrados, productos_container);
    });
});

// Filtros para la sección de Combos
document.querySelectorAll('.btn_filter_combos').forEach(boton => {
    boton.addEventListener('click', () => {
        const cat = boton.getAttribute('data-cat');
        const filtrados = cat === 'todos' ? combos : combos.filter(c => c.categoria.includes(cat));
        renderizarItems(filtrados, combos_container);
    });
});

//Filtro para la seleccion especial
document.querySelectorAll('.btn_filter_coffies').forEach(boton => {
    boton.addEventListener('click', () => {
        const cat = boton.getAttribute('data-cat');
        const filtrados = cat === 'todos' ? coffies : coffies.filter(c => c.categoria.includes(cat));
        renderizarItems(filtrados, coffies_container);
    });
});

// 4. LISTENERS DE NAVEGACIÓN (Los sensores del sistema)
// Escucha de cambios en la URL (Botón atrás/adelante del navegador)
window.addEventListener('hashchange', () => {
    const vistaActual = window.location.hash.replace('#', '');
    navegar(vistaActual || Vistas.HERO, seccionesMap);
});

// Navegación desde el Header
header_logo.addEventListener('click', (e) => { e.preventDefault(); navegar(Vistas.HERO, seccionesMap); });
header_productos.addEventListener('click', (e) => { e.preventDefault(); navegar(Vistas.MENU, seccionesMap); });
header_combos.addEventListener('click', (e) => { e.preventDefault(); navegar(Vistas.COMBOS, seccionesMap); });
header_racoon_coffies.addEventListener('click', (e) => { e.preventDefault(); navegar(Vistas.COFFIES, seccionesMap); });

// Navegación desde botones internos
btn_explorar_m_hero.addEventListener('click', () => navegar(Vistas.MENU, seccionesMap));
btn_explorar_combos_menu.addEventListener('click', () => navegar(Vistas.COMBOS, seccionesMap));


// Sidebar Toggle
btn_Menu_SB.addEventListener('click', () => btn_Sidebar.classList.toggle('active'));
btn_close_sb.addEventListener('click', () => btn_Sidebar.classList.remove('active'));

// 5. INICIALIZACIÓN (Encendido de la máquina)
// Dibujamos el inventario inicial en sus respectivos contenedores
renderizarItems(productos, productos_container);
renderizarItems(combos, combos_container);
renderizarItems(coffies, coffies_container);

// Validamos la ruta actual al cargar la página
const vistaInicial = window.location.hash.replace('#', '') || Vistas.HERO;
navegar(vistaInicial, seccionesMap);