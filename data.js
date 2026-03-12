export const Vistas = Object.freeze({
    HERO: 'inicio',
    MENU: 'productos',
    COMBOS: 'combos',
    COFFIES: 'coffies'
});

export const productos = [
    { nombre: "Mocachino", precio: 1.50, imagen: "images/productos/Mocachino.png", categoria: ["Bebidas_calientes"] },
    { nombre: "Espresso", precio: 1.50, imagen: "images/productos/Espresso.png", categoria: ["Bebidas_calientes"] },
    { nombre: "Frappé", precio: 1.50, imagen: "images/productos/Frappe.png", categoria: ["Bebidas_frias"] }
];

export const combos = [
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

export const coffies = [
        { 
        nombre: "Racoon bed", precio: 2.00, 
        imagen: "images/productos/Mocachino.png", 
        categoria: ["Dulces"] 
    },

];