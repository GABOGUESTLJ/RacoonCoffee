export function navegar(vista, seccionesMap) {
    // Actualizar la URL para que el Poco X7 Pro pueda retroceder
    window.location.hash = vista;

    // Apagar todas las secciones registradas
    Object.values(seccionesMap).forEach(s => s.style.display = 'none');

    // Encender solo la solicitada
    if (seccionesMap[vista]) {
        seccionesMap[vista].style.display = 'block';
    }
}