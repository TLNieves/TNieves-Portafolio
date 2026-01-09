(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const e of i)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const e={};return i.integrity&&(e.integrity=i.integrity),i.referrerPolicy&&(e.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?e.credentials="include":i.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(i){if(i.ep)return;i.ep=!0;const e=n(i);fetch(i.href,e)}})();const c=[{id:"project-1",title:"Sistema de estimación de rendimiento en viñedos",shortDesc:"Actualmente me encuentro desarrollando un pipeline de Visión por Computadora y ML para estimar rendimiento de uvas en campo.",tech:["Python","OpenCV","PyTorch","Pandas","Sam3"],image:"assets/img/vinedo.jpg",featured:!0,details:{context:"Proyecto académico de investigación orientado a agricultura de precisión, enfocado en la estimación de rendimiento de racimos de uvas en viñedos reales.",problem:"La estimación tradicional del rendimiento es manual, costosa y propensa a errores. Además, los viñedos presentan desafíos reales como variabilidad de iluminación, oclusión de racimos y condiciones no controladas.",solution:"Diseño de un pipeline basado en visión por computadora y machine learning para detectar racimos de uvas y estimar su rendimiento a partir de imágenes RGB / RGB-D, evaluando la viabilidad técnica en condiciones reales de campo.",technicalApproach:["Análisis del estado del arte en detección de racimos","Evaluación de técnicas de visión RGB y profundidad","Preprocesamiento de imágenes en entornos no controlados","Diseño de un pipeline reproducible (ingesta, procesamiento, evaluación)"],keyLearnings:["Adaptación de modelos de CV a escenarios reales","Entrenamiento de modelos de Machine Learning","Limitaciones prácticas más allá del modelo","Pensamiento de ingeniería aplicado a investigación"]}},{id:"project-2",title:"Sistema de monitoreo y análisis de red (UniFi)",shortDesc:"Recolección y análisis de métricas de red desde UniFi Controller.",tech:["Flask","AWS","Data Analysis","UniFi API"],image:"assets/img/unifi.png",featured:!0,details:{context:"Proyecto técnico orientado al análisis de métricas de red y monitoreo de dispositivos, utilizando datos reales provenientes de un controlador UniFi.",problem:"Se busca obtener las ubicaciones recientes de un dispositivo mediante la triangulacion de señal de enrutadores asociados a un Controller de Unifi.",solution:"Diseño de un sistema para recolectar métricas desde UniFi Controller, procesarlas y analizarlas, permitiendo generar estadísticas, mapas de calor y datos históricos.",technicalApproach:["Recolección estructurada de métricas de red a traves de una app movil","Backend ligero en Python","Diseño de una app web para monitoreo de movimiento de dispositivos y manejo de pedidos","Diseño pensando en expansión futura (más routers, más métricas)"],keyLearnings:["Integración con sistemas reales de monitoreo de terceros","Integracion de diferentes apps a traves de arquitecturas serverless en AWS","Pensamiento en seguridad y escalabilidad","Trabajo con infraestructura de red"]},links:[{label:"GitHub",url:"https://github.com/TLNieves/MonitoreoUniFi-Backend"}]},{id:"project-3",title:"Sistema de reconocimiento facial para control de acceso",shortDesc:"Sistema de reconocimiento facial diseñado para controlar accesos, integrando frontend, backend y un servicio intermediario de comunicación con dispositivos físicos.",tech:["Flask","Visión por Computadora","React","AWS"],image:"assets/img/facial.jpg",featured:!0,details:{context:"Proyecto academico diseñado para la gestión automatizada de identidades y accesos físicos.",problem:"La necesidad de sistemas de seguridad biométricos eficientes y escalables para el control de personal.",solution:"Implementación de una arquitectura de microservicios que procesa feeds de video en tiempo real y gestiona permisos de acceso, junto con una aplicacion web diseñada para el control de los acceso a nivel granular por parte de una compania",technicalApproach:["Diseño de frontend interactivo en React","Desarrollo de API robusta en Flask","Implementación de modelos de reconocimiento facial con OpenCV/Dlib","Integración con servicios de AWS para almacenamiento y cómputo"],keyLearnings:["Integración de sistemas heterogéneos (SW/HW)","Optimización de latencia en procesamiento de video","Gestión de servicios en la nube (AWS)","Uso de modelos de Facenet para reconocimiento facial"]},links:[{label:"Frontend",url:"https://github.com/TLNieves/ReconocimientoFacial-Frontend"},{label:"Backend",url:"https://github.com/TLNieves/ReconocimientoFacial-Backend"}]}],d=document.getElementById("projects-grid"),r=document.getElementById("project-modal"),m=document.getElementById("modal-body"),u=document.getElementById("close-modal");function p(){d.innerHTML="",c.forEach(a=>{const o=document.createElement("div");o.className=`project-card ${a.featured?"featured":""}`;let n="";a.image?n=`
                <div class="project-image-container">
                    <img src="${a.image}" alt="${a.title}" class="project-image">
                </div>
            `:n='<div class="project-image-container" style="background: var(--card-bg)"></div>';let t="";Array.isArray(a.links)&&(t=a.links.map(e=>`<a href="${e.url}" target="_blank" class="btn">${e.label}</a>`).join(""));let i="";a.featured&&a.details&&(i=`<button class="btn view-details-btn" data-id="${a.id}">Ver más &rarr;</button>`),o.innerHTML=`
            ${n}
            <div class="project-content">
                <h4 class="project-title">${a.title}</h4>
                <p class="project-desc">${a.shortDesc}</p>
                <div class="project-tech">
                    ${a.tech.map(e=>`<span>${e}</span>`).join(" • ")}
                </div>
                <div class="card-actions">
                    ${i}
                    ${t}
                </div>
            </div>
        `,d.appendChild(o)}),document.querySelectorAll(".view-details-btn").forEach(a=>{a.addEventListener("click",o=>{const n=o.target.getAttribute("data-id");v(n)})})}function v(a){const o=c.find(e=>e.id===a);if(!o||!o.details)return;const n=o.details;let t=n.technicalApproach.map(e=>`<li>${e}</li>`).join(""),i=n.keyLearnings.map(e=>`<li>${e}</li>`).join("");m.innerHTML=`
        <h2 class="modal-title">${o.title}</h2>
        <p class="modal-subtitle">${n.context}</p>
        
        <div class="modal-section">
            <h5>Problema</h5>
            <p>${n.problem}</p>
        </div>

        <div class="modal-section">
            <h5>Solución</h5>
            <p>${n.solution}</p>
        </div>

        <div class="modal-section">
            <h5>Enfoque Técnico</h5>
            <ul>${t}</ul>
        </div>

        <div class="modal-section">
            <h5>Aprendizajes Clave</h5>
            <ul>${i}</ul>
        </div>
    `,r.classList.add("show"),document.body.style.overflow="hidden"}function l(){r.classList.remove("show"),document.body.style.overflow=""}u.addEventListener("click",l);window.addEventListener("click",a=>{a.target===r&&l()});document.addEventListener("DOMContentLoaded",p);
