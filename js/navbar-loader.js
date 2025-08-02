
document.addEventListener('DOMContentLoaded', function() {
    loadNavbar();
});

function getNavbarHTML() {
    return `
    <!-- navbar --> 
    <!-- los links estan puestos como placeholders para que se reemplacen por las rutas correctas --> 

    <nav id="navbar" class="fixed top-0 left-0 w-full bg-transparent text-white p-4 z-[9999] transition-colors duration-300">
        <div class="container mx-auto flex justify-between items-center">
            <!-- Logo -->
            <div class="text-xl font-bold">
                <a href="INDEX_LINK">
                    <img id="escarapela" src="IMG_ESCARAPELA" alt="Escarapela" title="Inicio">
                </a>
            </div>

            <!-- Botón hamburguesa (Mobile) -->
            <button id="menu-toggle" class="md:hidden focus:outline-none">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>

            <!-- Menú Desktop -->
            <ul id="menu" class="hidden md:flex space-x-6">
                <li><a href="HISTORIA_LINK" class="font-semibold hover:text-[#74ACDF]">Historia</a></li>

                <!-- CULTURA -->
                <li class="relative group" onmouseenter="openDropdown('dropdown-cultura')" onmouseleave="closeDropdown('dropdown-cultura')">
                    <button class="font-semibold hover:text-[#74ACDF] flex items-center">
                        Cultura
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <ul id="dropdown-cultura" class="absolute left-0 hidden bg-[#1e2b57] text-white mt-2 rounded-lg shadow-lg min-w-48" onmouseenter="openDropdown('dropdown-cultura')" onmouseleave="closeDropdown('dropdown-cultura')">
                        <li><a href="CULTURA_LINK" class="font-semibold block px-4 py-2 hover:text-[#8492C7]">Cultura</a></li>
                        <li><a href="CULTURA_GASTRONOMIA" class="font-semibold block px-4 py-2 hover:text-[#8492C7]">Gastronomía</a></li>
                        <li><a href="CULTURA_FESTIVIDADES" class="font-semibold block px-4 py-2 hover:text-[#8492C7]">Festividades</a></li>
                    </ul>
                </li>

                <li><a href="GUIA_LINK" class="font-semibold hover:text-[#74ACDF]">Guía turística</a></li>

                <!-- TURISMO -->
                <li class="relative group" onmouseenter="openDropdown('dropdown-turismo')" onmouseleave="closeDropdown('dropdown-turismo')">
                    <button class="font-semibold hover:text-[#74ACDF] flex items-center">
                        Turismo
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <ul id="dropdown-turismo" class="absolute left-0 hidden bg-[#1e2b57] text-white mt-2 rounded-lg shadow-lg min-w-48" onmouseenter="openDropdown('dropdown-turismo')" onmouseleave="closeDropdown('dropdown-turismo')">
                        <li><a href="TURISMO_TURISMO" class="font-semibold block px-4 py-2 hover:text-[#8492C7]">Turismo</a></li>      
                        <li><a href="TURISMO_INVIERNO" class="font-semibold block px-4 py-2 hover:text-[#8492C7]">Invierno</a></li>
                        <li><a href="TURISMO_VERANO" class="font-semibold block px-4 py-2 hover:text-[#8492C7]">Verano</a></li>
                        <li><a href="TURISMO_MAPA" class="font-semibold block px-4 py-2 hover:text-[#8492C7]">Mapa sonoro</a></li>
                    </ul>
                </li>

                <li><a href="AMBIENTE_LINK" class="font-semibold hover:text-[#74ACDF]">Ambiente</a></li>
                <li><a href="JUEGOS_LINK" class="font-semibold hover:text-[#74ACDF]">¡Juegos!</a></li>
            </ul>
        </div>

        <!-- Menú Mobile -->
        <div id="mobile-menu" class="hidden">
            <button id="close-menu" class="absolute top-4 right-4 text-white text-3xl font-bold hover:text-[#74ACDF]">&times;</button>
            
            <div class="mt-16 px-4">
                <ul class="space-y-4">
                    <li>
                        <a href="HISTORIA_LINK" class="block py-2 font-semibold hover:text-[#8492C7]">Historia</a>
                    </li>

                    <!-- CULTURA MOBILE -->
                    <li>
                        <button class="dropdown-toggle w-full flex items-center justify-between py-2 font-semibold hover:text-[#8492C7]" data-target="mobile-cultura">
                            <span>Cultura</span>
                            <svg class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <ul id="mobile-cultura" class="hidden ml-4 mt-2 space-y-2">
                            <li><a href="CULTURA_INDEX" class="block py-1 font-semibold hover:text-[#8492C7]">Cultura</a></li>
                            <li><a href="CULTURA_GASTRONOMIA" class="block py-1 font-semibold hover:text-[#8492C7]">Gastronomía</a></li>
                            <li><a href="CULTURA_FESTIVIDADES" class="block py-1 font-semibold hover:text-[#8492C7]">Festividades</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="GUIA_LINK" class="block py-2 font-semibold hover:text-[#8492C7]">Guía turística</a>
                    </li>

                    <!-- TURISMO MOBILE -->
                    <li>
                        <button class="dropdown-toggle w-full flex items-center justify-between py-2 font-semibold hover:text-[#8492C7]" data-target="mobile-turismo">
                            <span>Turismo</span>
                            <svg class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <ul id="mobile-turismo" class="hidden ml-4 mt-2 space-y-2">
                            <li><a href="TURISMO_INDEX" class="block py-1 font-semibold hover:text-[#8492C7]">Turismo</a></li>  
                            <li><a href="TURISMO_INVIERNO" class="block py-1 font-semibold hover:text-[#8492C7]">Invierno</a></li>
                            <li><a href="TURISMO_VERANO" class="block py-1 font-semibold hover:text-[#8492C7]">Verano</a></li>
                            <li><a href="TURISMO_MAPA" class="block py-1 font-semibold hover:text-[#8492C7]">Mapa sonoro</a></li>

                        </ul>
                    </li>

                    <li>
                        <a href="AMBIENTE_LINK" class="block py-2 font-semibold hover:text-[#8492C7]">Ambiente</a>
                    </li>
                    <li>
                        <a href="JUEGO_LINK" class="block py-2 font-semibold hover:text-[#8492C7]">¡Juegos!</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;
}

function loadNavbar() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (!navbarPlaceholder) {
        console.error('No se encontró el elemento navbar-placeholder');
        return;
    }



    // Determinar la ruta base según la ubicación actual, para evitar problemas con subcarpetas
    const currentPath = window.location.pathname;
    console.log('Current path:', currentPath);
    
    // Detectar el nivel de profundidad 
    let basePath = '';
    let level = 'root'; 
    
    if (currentPath === '/' || currentPath.endsWith('/index.html') || currentPath === '/index.html') {
        basePath = './';
        level = 'root';
    } else if (currentPath.includes('/cultura/') || currentPath.includes('/turismo/') || currentPath.includes('/juegos/') || currentPath.includes('/ambiente/') || currentPath.includes('/guia/') || currentPath.includes('/historia/')) {
        if (currentPath.includes('/turismo/mapa/')) {
            basePath = '../../';  // subir 2 niveles
            level = 'level2';
        } else {
            basePath = '../';
            level = 'level1';
        }
    } else {
        basePath = './';
        level = 'root';
    }

    // Crear las rutas según el path(nivel) y reemplazar los placeholders del html
    const routes = createRoutes(basePath);

    let navbarHTML = getNavbarHTML();
    
    navbarHTML = navbarHTML.replace(/INDEX_LINK/g, routes.index); // g = global
    navbarHTML = navbarHTML.replace(/IMG_ESCARAPELA/g, routes.escarapela);
    navbarHTML = navbarHTML.replace(/HISTORIA_LINK/g, routes.historia);
    navbarHTML = navbarHTML.replace(/CULTURA_LINK/g, routes.cultura.index);
    navbarHTML = navbarHTML.replace(/CULTURA_INDEX/g, routes.cultura.index);
    navbarHTML = navbarHTML.replace(/CULTURA_GASTRONOMIA/g, routes.cultura.gastronomia);
    navbarHTML = navbarHTML.replace(/CULTURA_FESTIVIDADES/g, routes.cultura.festividades);
    navbarHTML = navbarHTML.replace(/TURISMO_MAPA/g, routes.turismo.mapa);
    navbarHTML = navbarHTML.replace(/TURISMO_INVIERNO/g, routes.turismo.invierno);
    navbarHTML = navbarHTML.replace(/TURISMO_VERANO/g, routes.turismo.verano);
    navbarHTML = navbarHTML.replace(/TURISMO_TURISMO/g, routes.turismo.index);
    navbarHTML = navbarHTML.replace(/TURISMO_INDEX/g, routes.turismo.index);
    navbarHTML = navbarHTML.replace(/GUIA_LINK/g, routes.guia);
    navbarHTML = navbarHTML.replace(/AMBIENTE_LINK/g, routes.ambiente);
    navbarHTML = navbarHTML.replace(/SUSTENTABILIDAD_LINK/g, routes.ambiente); 
    navbarHTML = navbarHTML.replace(/JUEGOS_LINK/g, routes.juegos);
    navbarHTML = navbarHTML.replace(/JUEGO_LINK/g, routes.juegos);
    
    // Insertar en el DOM el nuevo navbar
    navbarPlaceholder.innerHTML = navbarHTML;
    console.log('Navbar insertado en DOM');

    initializeNavbar(); // funcionalidades
}

function createRoutes(basePath) {
    return {
        index: basePath + 'index.html',
        escarapela: basePath + 'img/escarapela.webp',
        historia: basePath + 'historia/historia.html',
        cultura: {
            index: basePath + 'cultura/cultura.html',
            gastronomia: basePath + 'cultura/gastronomia.html',
            festividades: basePath + 'cultura/festividades.html'
        },
        turismo: {
            mapa: basePath + 'turismo/mapa/mapa-sonoro.html',
            invierno: basePath + 'turismo/invierno.html',
            verano: basePath + 'turismo/verano.html',
            index: basePath + 'turismo/turismo.html'
        },
        guia: basePath + 'guia/guia.html',
        ambiente: basePath + 'ambiente/ambiente.html',
        juegos: basePath + 'juegos/juegos.html'
    };
}

function initializeNavbar() {
    // Funcionalidad del menú mobile
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                mobileMenu.classList.add('show');
            }, 10);
        });
    }

    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            mobileMenu.classList.remove('show');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        });
    }

    // Cerrar menú mobile al hacer click fuera
    document.addEventListener('click', function(event) {
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                mobileMenu.classList.remove('show');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
            }
        }
    });

    // Prevenir que clicks dentro del menú mobile lo cierren
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Funcionalidad de dropdowns mobile
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.getAttribute('data-target');
            const targetDropdown = document.getElementById(targetId);
            if (targetDropdown) {
                targetDropdown.classList.toggle('hidden');
                
                // Rotar la flecha
                const arrow = this.querySelector('svg');
                if (arrow) {
                    arrow.classList.toggle('rotate-180');
                }
            }
        });
    });

    // Cambiar color del navbar al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.remove('bg-transparent');
                navbar.classList.add('bg-[#1e2b57]', 'bg-opacity-95');
            } else {
                navbar.classList.add('bg-transparent');
                navbar.classList.remove('bg-[#1e2b57]', 'bg-opacity-95');
            }
        }
    });

    // Resaltar página actual en el navbar
    highlightCurrentPage();
    
    console.log('Navbar completamente inicializado');
}

// Funciones para dropdowns desktop
let dropdownTimeout = null;

function openDropdown(dropdownId) {
    // Cancelar cualquier timeout pendiente
    if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
        dropdownTimeout = null;
    }
    
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        dropdown.classList.remove('hidden');
    }
}

function closeDropdown(dropdownId) {
    // Agregar delay de 300ms antes de cerrar, para que se pueda elegir una opción
    dropdownTimeout = setTimeout(() => {
        const dropdown = document.getElementById(dropdownId);
        if (dropdown) {
            dropdown.classList.add('hidden');
        }
        dropdownTimeout = null;
    }, 300);
}

function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('#navbar a');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath || (currentPath === '/' && linkPath.endsWith('index.html'))) {
            link.classList.add('text-[#74ACDF]');
        }
    });
}

// Función auxiliar para toggle de dropdowns mobile (por compatibilidad)
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        dropdown.classList.toggle('hidden');
    }
}