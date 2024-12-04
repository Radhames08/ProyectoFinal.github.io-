document.getElementById("cedulaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const cedulaInput = document.getElementById("cedula").value;
    const resultado = document.getElementById("resultado");

    if (validarCedula(cedulaInput)) {
        resultado.textContent = "La cédula es válida.";
        resultado.classList.add("valid");
        resultado.classList.remove("invalid");
    } else {
        resultado.textContent = "La cédula es inválida.";
        resultado.classList.add("invalid");
        resultado.classList.remove("valid");
    }
});

function validarCedula(cedula) {
    // Verificar que la cédula tenga exactamente 11 dígitos numéricos
    const regexCedula = /^[0-9]{11}$/;
    return regexCedula.test(cedula);
}
