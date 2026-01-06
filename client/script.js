// Datos de los proyectos - Todo el contenido se gestiona desde este array
const projects = [
    {
        id: "project-1",
        title: "Sistema de estimación de rendimiento en viñedos",
        shortDesc: "Pipeline de Visión por Computadora y ML para estimar rendimiento de uvas en campo.",
        tech: ["Python", "OpenCV", "PyTorch", "Pandas"],
        image: "assets/img/vinedo.jpg", // Ruta de la imagen (Opcional)
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
        links: {
            github: "https://github.com/usuario/repo-uvas"
        }
    },
    {
        id: "project-2",
        title: "Sistema de monitoreo y análisis de red (UniFi)",
        shortDesc: "Recolección y análisis de métricas de red desde UniFi Controller.",
        tech: ["Python", "API REST", "Data Analysis", "Networking"],
        image: null, // Sin imagen: no dejará espacio vacío
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
        links: {
            github: "https://github.com/usuario/repo-unifi"
        }
    },
    {
        id: "project-3",
        title: "API RESTful de Gestión de Tareas",
        shortDesc: "API simple para gestión de tareas con autenticación JWT.",
        tech: ["Node.js", "Express", "PostgreSQL"],
        image: null,
        featured: false,
        links: {
            github: "#"
        }
    },
    {
        id: "project-4",
        title: "Script de Automatización de Backups",
        shortDesc: "Script en Bash para backup incremental de servidores Linux.",
        tech: ["Bash", "Linux", "Cron"],
        image: null,
        featured: false,
        links: {
            github: "#"
        }
    }
];

// Referencias al DOM
const projectsContainer = document.getElementById('projects-grid');
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');

// Función para renderizar proyectos
function renderProjects() {
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = `project-card ${project.featured ? 'featured' : ''}`;
        
        // Imagen opcional: Si no hay imagen, no se genera el HTML
        let imageHTML = '';
        if (project.image) {
            imageHTML = `
                <div class="project-image-container">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                </div>
            `;
        }

        // Badge de destacado
        let badgeHTML = '';
        if (project.featured) {
            badgeHTML = `<span class="featured-badge">Destacado</span>`;
        }

        // Links
        let linksHTML = '';
        if (project.links && project.links.github) {
            linksHTML += `<a href="${project.links.github}" target="_blank" class="btn">GitHub</a>`;
        }

        // Botón "Ver más" solo para destacados
        let viewMoreHTML = '';
        if (project.featured) {
            viewMoreHTML = `<button class="btn view-details-btn" data-id="${project.id}">Ver más &rarr;</button>`;
        }

        card.innerHTML = `
            ${badgeHTML}
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

    // Construir contenido del modal
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
    document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
}

// Función para cerrar modal
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

// Event Listeners para el modal
closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Inicializar
document.addEventListener('DOMContentLoaded', renderProjects);
