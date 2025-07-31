
document.addEventListener('DOMContentLoaded', function() {
    loadFooter();
});

function getFooterHTML() {
    return `
<footer class="footer footer-horizontal footer-center bg-[#74ACDF] p-8 flex flex-col justify-center">
    <div class="flex justify-center items-center text-center"> 
        <aside>
            <img class="w-[120px] m-auto" src="IMG_ESCARAPELA" alt="Escarapela argentina">
            <p class="font-bold text-white text-xl">ARG</p>
            <div class="text-white font-semibold">
                <a href="CONTACTO_LINK">Contacto</a> | 
                <a href="DESARROLLO_LINK">Sobre el desarrollo de la web</a>
            </div>
            <p class="text-white text-xs">Copyright © 2025 - All right reserved</p>
        </aside>
    </div>
</footer>
    `;
}

function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) {
        console.error('No se encontró el elemento footer-placeholder');
        return;
    }

    // Determinar la ruta  según la ubicación actual
    const currentPath = window.location.pathname;
    console.log('Footer - Current path:', currentPath);
    
    // Detectar el nivel de profundidad 
    let basePath = '';
    let level = 'root'; 
    
    if (currentPath === '/' || currentPath.endsWith('/index.html') || currentPath === '/index.html') {
        basePath = './';
        level = 'root';
    } else if (currentPath.includes('/cultura/') || currentPath.includes('/turismo/') || currentPath.includes('/juegos/') || currentPath.includes('/ambiente/') || currentPath.includes('/guia/') || currentPath.includes('/historia/')) {
        if (currentPath.includes('/turismo/mapa-sonoro/')) {
            basePath = '../../';
            level = 'level2';
        } else {
            basePath = '../';
            level = 'level1';
        }
    } else {
        basePath = './';
        level = 'root';
    }

    console.log('Footer - Nivel detectado:', level);
    console.log('Footer - Base path:', basePath);

    // Crear las rutas específicas
    const routes = createFooterRoutes(basePath);
    
    // reemplazar placeholders del html
    let footerHTML = getFooterHTML();
    
    // Reemplazar todos los placeholders
    footerHTML = footerHTML.replace(/IMG_ESCARAPELA/g, routes.escarapela);
    footerHTML = footerHTML.replace(/CONTACTO_LINK/g, routes.contacto);
    footerHTML = footerHTML.replace(/DESARROLLO_LINK/g, routes.desarrollo);
    
    console.log('Footer - HTML con rutas aplicadas');
    
    // Insertar en el DOM
    footerPlaceholder.innerHTML = footerHTML;
    console.log('✅ Footer insertado en DOM');
}

function createFooterRoutes(basePath) {
    return {
        escarapela: basePath + 'img/escarapela.webp',
        contacto: basePath + 'contacto.html',
        desarrollo: basePath + 'desarrollo.html'
    };
}