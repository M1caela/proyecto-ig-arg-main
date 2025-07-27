// navbar-loader-inline.js
document.addEventListener('DOMContentLoaded', function() {
    loadNavbar();
});

function getNavbarHTML() {
    return `
<!-- navbar -->
<nav id="navbar" class="fixed top-0 left-0 w-full bg-transparent text-white p-4 z-[9999] transition-colors duration-300">
    <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div class="text-xl font-bold">
            <a href="/index.html">
                <img id="escarapela" src="/img/escarapela.webp" alt="Escarapela" title="Inicio">
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
            <li><a href="/historia.html" class="font-semibold hover:text-[#74ACDF]">Historia</a></li>

            <!-- CULTURA -->
            <li class="relative group" onmouseenter="openDropdown('dropdown-cultura')" onmouseleave="closeDropdown('dropdown-cultura')">
                <button class="font-semibold hover:text-[#74ACDF] flex items-center">
                    Cultura
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <ul id="dropdown-cultura" class="absolute left-0 hidden bg-[#1e2b57] text-white mt-2 rounded-lg shadow-lg min-w-48">
                    <li><a href="/cultura/index.html" class="font-semibold block px-4 py-2 hover:text-[#8492C7]">Cultura</a></li>
                    <li><a href="/cultura/gastronomia.html" class="font-semibold block px-4 py-2 hover:text-[#8492C7]">Gastronomía</a></li>
                    <li><a href="/cultura/festividades.html" class="font-semibold block px-4 py-2 hover:text-[#8492C7]">Festividades</a></li>
                </ul>
            </li>

            <!-- TURISMO -->
            <li class="relative group" onmouseenter="openDropdown('dropdown-turismo')" onmouseleave="closeDropdown('dropdown-turismo')">
                <button class="font-semibold hover:text-[#74ACDF] flex items-center">
                    Turismo
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <ul id="dropdown-turismo" class="absolute left-0 hidden bg-[#1e2b57] text-white mt-2 rounded-lg shadow-lg min-w-48">
                    <li><a href="/turismo/mapa-sonoro/index.html" class="font-semibold block px-4 py-2 hover:text-[#8492C7]">Mapa sonoro</a></li>
                    <li><a href="/turismo/invierno.html" class="font-semibold block px-4 py-2 hover:text-[#8492C7]">Invierno</a></li>
                    <li><a href="/turismo/verano.html" class="font-semibold block px-4 py-2 hover:text-[#8492C7]">Verano</a></li>
                    <li><a href="/turismo/index.html" class="font-semibold block px-4 py-2 hover:text-[#8492C7]">Ver todo</a></li>  
                </ul>
            </li>

            <li><a href="/guia.html" class="font-semibold hover:text-[#74ACDF]">Guía turística</a></li>
            <li><a href="/sustentabilidad.html" class="font-semibold hover:text-[#74ACDF]">Ambiente</a></li>
            <li><a href="/juego/index.html" class="font-semibold hover:text-[#74ACDF]">¡Juegos!</a></li>
        </ul>
    </div>

    <!-- Menú Mobile -->
    <div id="mobile-menu" class="hidden">
        <button id="close-menu" class="absolute top-4 right-4 text-white text-3xl font-bold hover:text-[#74ACDF]">&times;</button>
        
        <div class="mt-16 px-4">
            <ul class="space-y-4">
                <li>
                    <a href="/historia.html" class="block py-2 font-semibold hover:text-[#8492C7]">Historia</a>
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
                        <li><a href="/cultura/index.html" class="block py-1 font-semibold hover:text-[#8492C7]">Cultura</a></li>
                        <li><a href="/cultura/gastronomia.html" class="block py-1 font-semibold hover:text-[#8492C7]">Gastronomía</a></li>
                        <li><a href="/cultura/festividades.html" class="block py-1 font-semibold hover:text-[#8492C7]">Festividades</a></li>
                    </ul>
                </li>

                <!-- TURISMO MOBILE -->
                <li>
                    <button class="dropdown-toggle w-full flex items-center justify-between py-2 font-semibold hover:text-[#8492C7]" data-target="mobile-turismo">
                        <span>Lugares increíbles</span>
                        <svg class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <ul id="mobile-turismo" class="hidden ml-4 mt-2 space-y-2">
                        <li><a href="/turismo/mapa-sonoro/index.html" class="block py-1 font-semibold hover:text-[#8492C7]">Mapa sonoro</a></li>
                        <li><a href="/turismo/invierno.html" class="block py-1 font-semibold hover:text-[#8492C7]">Invierno</a></li>
                        <li><a href="/turismo/verano.html" class="block py-1 font-semibold hover:text-[#8492C7]">Verano</a></li>
                        <li><a href="/turismo/index.html" class="block py-1 font-semibold hover:text-[#8492C7]">Ver todo</a></li>  
                    </ul>
                </li>

                <li>
                    <a href="/guia.html" class="block py-2 font-semibold hover:text-[#8492C7]">Guía turística</a>
                </li>
                <li>
                    <a href="/sustentabilidad.html" class="block py-2 font-semibold hover:text-[#8492C7]">Ambiente</a>
                </li>
                <li>
                    <a href="/juego/index.html" class="block py-2 font-semibold hover:text-[#8492C7]">¡Juegos!</a>
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

    // Determinar la ruta base según la ubicación actual
    const currentPath = window.location.pathname;
    let basePath = '';
    
    // Contar niveles de profundidad para determinar la ruta relativa
    const pathSegments = currentPath.split('/').filter(segment => segment !== '');
    const depth = pathSegments.length;
    
    console.log('Current path:', currentPath);
    console.log('Path segments:', pathSegments);
    console.log('Depth:', depth);
    
    // Si estamos en una subcarpeta, necesitamos subir niveles
    if (depth > 1) {
        basePath = '../'.repeat(depth - 1);
    }
    
    // Si estamos en el root o index, no necesitamos prefijo
    if (currentPath === '/' || currentPath.endsWith('index.html') || depth <= 1) {
        basePath = './';
    }

    console.log('Base path determinado:', basePath);

    // Obtener HTML del navbar
    const navbarHTML = getNavbarHTML();
    
    // Ajustar todas las rutas en el HTML del navbar
    const adjustedHtml = adjustNavbarPaths(navbarHTML, basePath);
    console.log('HTML del navbar ajustado');
    
    // Insertar en el DOM
    navbarPlaceholder.innerHTML = adjustedHtml;
    console.log('Navbar insertado en DOM');
    
    // Verificar que el contenido se insertó correctamente
    const insertedNav = document.getElementById('navbar');
    if (insertedNav) {
        console.log('✅ Navbar correctamente insertado');
        console.log('Menú mobile encontrado:', document.getElementById('mobile-menu') ? '✅' : '❌');
        console.log('Toggle button encontrado:', document.getElementById('menu-toggle') ? '✅' : '❌');
    } else {
        console.error('❌ Error: Navbar no se insertó correctamente');
    }
    
    // Inicializar funcionalidad del navbar
    initializeNavbar();
}

function adjustNavbarPaths(html, basePath) {
    console.log('Ajustando rutas con basePath:', basePath);
    
    // Ajustar rutas de enlaces href
    html = html.replace(/href="\/([^"]*)"?/g, (match, path) => {
        const newPath = `href="${basePath}${path}"`;
        console.log(`Ajustando ruta: ${match} -> ${newPath}`);
        return newPath;
    });
    
    // Ajustar rutas de imágenes src
    html = html.replace(/src="\/([^"]*)"?/g, (match, path) => {
        const newPath = `src="${basePath}${path}"`;
        console.log(`Ajustando imagen: ${match} -> ${newPath}`);
        return newPath;
    });
    
    return html;
}

function initializeNavbar() {
    console.log('Inicializando funcionalidad del navbar...');
    
    // Funcionalidad del menú mobile
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');

    console.log('Elementos encontrados:');
    console.log('- menuToggle:', menuToggle ? '✅' : '❌');
    console.log('- mobileMenu:', mobileMenu ? '✅' : '❌');
    console.log('- closeMenu:', closeMenu ? '✅' : '❌');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Toggle menu clicked');
            mobileMenu.classList.remove('hidden');
            // Agregar clase para mostrar el menú con animación
            setTimeout(() => {
                mobileMenu.classList.add('show');
            }, 10);
        });
        console.log('✅ Event listener agregado al toggle menu');
    } else {
        console.error('❌ No se pudo configurar el toggle del menú mobile');
    }

    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Close menu clicked');
            mobileMenu.classList.remove('show');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        });
        console.log('✅ Event listener agregado al botón cerrar');
    }

    // Cerrar menú mobile al hacer click fuera
    document.addEventListener('click', function(event) {
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                console.log('Click fuera del menú, cerrando...');
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
    console.log('Dropdown toggles encontrados:', dropdownToggles.length);
    
    dropdownToggles.forEach((toggle, index) => {
        console.log(`Configurando dropdown ${index + 1}:`, toggle);
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.getAttribute('data-target');
            console.log('Dropdown toggle clicked, target:', targetId);
            const targetDropdown = document.getElementById(targetId);
            if (targetDropdown) {
                targetDropdown.classList.toggle('hidden');
                console.log('Dropdown toggled, hidden:', targetDropdown.classList.contains('hidden'));
                
                // Rotar la flecha
                const arrow = this.querySelector('svg');
                if (arrow) {
                    arrow.classList.toggle('rotate-180');
                }
            } else {
                console.error('Target dropdown no encontrado:', targetId);
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
    
    console.log('✅ Navbar completamente inicializado');
}

// Funciones para dropdowns desktop (manteniendo las originales)
function openDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        dropdown.classList.remove('hidden');
    }
}

function closeDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        dropdown.classList.add('hidden');
    }
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