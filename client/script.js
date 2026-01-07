// Datos de los proyectos - Todo el contenido se gestiona desde este array
const projects = [
    {
        id: "project-1",
        title: "Sistema de estimación de rendimiento en viñedos",
        shortDesc: "Actualmente me encuentro desarrollando un pipeline de Visión por Computadora y ML para estimar rendimiento de uvas en campo.",
        tech: ["Python", "OpenCV", "PyTorch", "Pandas"],
        image: "assets/img/vinedo.jpg",
        featured: true,
        details: {
            context: "Proyecto académico de investigación orientado a agricultura de precisión, enfocado en la estimación de rendimiento de racimos de uvas en viñedos reales.",
            problem: "La estimación tradicional del rendimiento es manual, costosa y propensa a errores. Además, los viñedos presentan desafíos reales como variabilidad de iluminación, oclusión de racimos y condiciones no controladas.",
            solution: "Diseño de un pipeline basado en visión por computadora y machine learning para detectar racimos de uvas y estimar su rendimiento a partir de imágenes RGB / RGB-D, evaluando la viabilidad técnica en condiciones reales de campo.",
            technicalApproach: [
                "Análisis del estado del arte en detección de racimos",
                "Evaluación de técnicas de visión RGB y profundidad",
                "Preprocesamiento de imágenes en entornos no controlados",
                "Diseño de un pipeline reproducible (ingesta, procesamiento, evaluación)"
            ],
            keyLearnings: [
                "Adaptación de modelos de CV a escenarios reales",
                "Importancia de la calidad de datos",
                "Limitaciones prácticas más allá del modelo",
                "Pensamiento de ingeniería aplicado a investigación"
            ]
        },
        links: [
            { label: "GitHub", url: "https://github.com/usuario/repo-uvas" }
        ]
    },
    {
        id: "project-2",
        title: "Sistema de monitoreo y análisis de red (UniFi)",
        shortDesc: "Recolección y análisis de métricas de red desde UniFi Controller.",
        tech: ["Python", "API REST", "Data Analysis", "Networking"],
        image: "assets/img/unifi.png",
        featured: true,
        details: {
            context: "Proyecto técnico orientado al análisis de métricas de red y monitoreo de infraestructura, utilizando datos reales provenientes de un controlador UniFi.",
            problem: "La información de red suele estar distribuida y no siempre es fácil de analizar o reutilizar para generar métricas, estadísticas o visualizaciones útiles.",
            solution: "Diseño de un sistema para recolectar métricas desde UniFi Controller, procesarlas y analizarlas, permitiendo generar estadísticas, mapas de calor y datos históricos.",
            technicalApproach: [
                "Recolección estructurada de métricas de red",
                "Backend ligero en Python",
                "Modelado de datos y persistencia",
                "Consideraciones de escalabilidad y seguridad",
                "Diseño pensando en expansión futura (más APs)"
            ],
            keyLearnings: [
                "Integración con sistemas reales",
                "Diseño backend orientado a datos",
                "Pensamiento en seguridad y escalabilidad",
                "Trabajo con infraestructura de red"
            ]
        },
        links: [
            { label: "GitHub", url: "https://github.com/usuario/repo-unifi" }
        ]
    },
    {
        id: "project-3",
        title: "Sistema de reconocimiento facial para control de acceso",
        shortDesc: "Sistema de reconocimiento facial diseñado para controlar accesos, integrando frontend, backend y un servicio intermediario de comunicación con dispositivos físicos.",
        tech: ["Flask", "Visión por Computadora", "React", "AWS"],
        image: "assets/img/facial.jpg", // Espacio para imagen como los anteriores
        featured: true,
        details: {
            context: "Proyecto personal diseñado para la gestión automatizada de identidades y accesos físicos.",
            problem: "La necesidad de sistemas de seguridad biométricos eficientes y escalables para el control de personal.",
            solution: "Implementación de una arquitectura de microservicios que procesa feeds de video en tiempo real y gestiona permisos de acceso.",
            technicalApproach: [
                "Diseño de frontend interactivo en React",
                "Desarrollo de API robusta en Flask",
                "Implementación de modelos de reconocimiento facial con OpenCV/Dlib",
                "Integración con servicios de AWS para almacenamiento y cómputo"
            ],
            keyLearnings: [
                "Integración de sistemas heterogéneos (SW/HW)",
                "Optimización de latencia en procesamiento de video",
                "Gestión de servicios en la nube (AWS)",
                "Seguridad y privacidad de datos biométricos"
            ]
        },
        links: [
            { label: "Frontend", url: "https://github.com/usuario/face-front" },
            { label: "Backend", url: "https://github.com/usuario/face-back" }
        ]
    }
];

// GUÍA PARA MANEJO DE PROYECTOS:
// 1. Para agregar un proyecto: Añade un objeto al array 'projects' con un 'id' único.
// 2. Para habilitar "Ver más": Establece 'featured' en true y define el objeto 'details'.
// 3. Para cambiar textos: Edita las propiedades 'title', 'shortDesc' o los campos en 'details'.
// 4. Para imágenes: Guarda la imagen en 'assets/img/' y actualiza la propiedad 'image'.
// 5. Para links: El campo 'links' acepta un array de objetos { label, url }, permitiendo múltiples botones.

// Referencias al DOM
const projectsContainer = document.getElementById('projects-grid');
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');

// Función para renderizar proyectos
function renderProjects() {
    projectsContainer.innerHTML = '';
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = `project-card ${project.featured ? 'featured' : ''}`;
        
        // Imagen opcional: Siempre con contenedor para mantener el borde
        let imageHTML = '';
        if (project.image) {
            imageHTML = `
                <div class="project-image-container">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                </div>
            `;
        } else {
            imageHTML = `<div class="project-image-container" style="background: var(--card-bg)"></div>`;
        }

        // Renderizado de links (soporta múltiples repositorios)
        let linksHTML = '';
        if (Array.isArray(project.links)) {
            linksHTML = project.links.map(link => 
                `<a href="${link.url}" target="_blank" class="btn">${link.label}</a>`
            ).join('');
        }

        // Botón "Ver más"
        let viewMoreHTML = '';
        if (project.featured && project.details) {
            viewMoreHTML = `<button class="btn view-details-btn" data-id="${project.id}">Ver más &rarr;</button>`;
        }

        card.innerHTML = `
            ${imageHTML}
            <div class="project-content">
                <h4 class="project-title">${project.title}</h4>
                <p class="project-desc">${project.shortDesc}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span>${t}</span>`).join(' • ')}
                </div>
                <div class="card-actions">
                    ${viewMoreHTML}
                    ${linksHTML}
                </div>
            </div>
        `;

        projectsContainer.appendChild(card);
    });

    // Agregar event listeners a botones "Ver más"
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const projectId = e.target.getAttribute('data-id');
            openModal(projectId);
        });
    });
}

// Función para abrir el modal
function openModal(id) {
    const project = projects.find(p => p.id === id);
    if (!project || !project.details) return;

    const details = project.details;
    let approachList = details.technicalApproach.map(item => `<li>${item}</li>`).join('');
    let learningsList = details.keyLearnings.map(item => `<li>${item}</li>`).join('');

    modalBody.innerHTML = `
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-subtitle">${details.context}</p>
        
        <div class="modal-section">
            <h5>Problema</h5>
            <p>${details.problem}</p>
        </div>

        <div class="modal-section">
            <h5>Solución</h5>
            <p>${details.solution}</p>
        </div>

        <div class="modal-section">
            <h5>Enfoque Técnico</h5>
            <ul>${approachList}</ul>
        </div>

        <div class="modal-section">
            <h5>Aprendizajes Clave</h5>
            <ul>${learningsList}</ul>
        </div>
    `;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar modal
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('DOMContentLoaded', renderProjects);
