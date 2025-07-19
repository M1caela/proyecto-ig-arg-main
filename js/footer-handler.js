document.addEventListener("DOMContentLoaded", function () {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (!footerPlaceholder) return;

    // Detectar profundidad del archivo actual
    const path = window.location.pathname;
    const depth = path.split("/").length - 2;
    const relativePath = "../".repeat(depth) + "footer.html";

    // Cargar el footer
    fetch(relativePath)
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el footer.");
            }
            return response.text();
        })
        .then(html => {
            footerPlaceholder.innerHTML = html;
            console.log("✅ Footer cargado correctamente");
        })
        .catch(error => {
            console.error("Error al cargar el footer:", error);
        });
});
