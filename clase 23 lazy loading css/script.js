document.getElementById("cargarEstilos").addEventListener("click", function() {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "estilos-no-criticos.css";
    document.head.appendChild(link);
    this.disabled = true;
});