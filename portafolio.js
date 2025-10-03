console.log("hola"); // Esta línea es útil para confirmar que tu script se está ejecutando.
const trabajos = [
    {
        titulo: "Peque",
        categoria: "Ilustración",
        imagen: "peque2.png",
    },
    {
        titulo: "Maven",
        categoria: "Dirección Creativa",
        imagen: "maven2.png",
    },
    {
        titulo: "BRODERIE: E-COMMERCE",
        categoria: "Diseño Web",
        imagen: "broderie.png",
    },
    {
        titulo: "PATRÓN HALLOWEEN",
        categoria: "Ilustración de Patrones",
        imagen: "hallo.png",
    },
    {
        titulo: "BEHEALTHY: PACKAGING",
        categoria: "Diseño de Sistemas de Producto",
        imagen: "detox.png",
    },
    {
        titulo: "Lamp",
        categoria: "Diseño Industrial",
        imagen: "lamp2.png",
    },
    {
        titulo: "CODÚ",
        categoria: "Diseño Web",
        imagen: "codu.png", 
    },
    {
        titulo: "NEWLOOK",
        categoria: "Dirección de Arte y Producción 360°",
        imagen: "newlook.png", 
    },
    {
        titulo: "F. ALMA CHILE",
        categoria: "Manual de Marca",
        imagen: "alma.png", 
    },
    
];


function generarGaleria() {
    const contenedorGaleria = document.querySelector('.gallery-grid');
    
    if (!contenedorGaleria) {
        console.error("No se encontró el contenedor '.gallery-grid' en el HTML.");
        return;
    }

    let htmlGaleria = '';

    trabajos.forEach(trabajo => {
        // categoría
        htmlGaleria += `
            <div class="gallery-item">
                <img 
                    src="${trabajo.imagen}" 
                    width="1100"  
                    height="600" 
                >
                <div class="gallery-overlay">
                    <h3>${trabajo.titulo}</h3> 
                    <p>${trabajo.categoria}</p>
                </div>
            </div>
        `;
    });

    contenedorGaleria.innerHTML = htmlGaleria;
}

generarGaleria();