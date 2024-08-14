// Selección de elementos
const btnEncriptar = document.querySelector('.btn-encriptar');
const btnDesencriptar = document.querySelector('.btn-desencriptar');
const encriptadorTextArea = document.querySelector('.encriptador-text-area');
const avisoMensaje = document.querySelector('.aviso-mensaje');
const mensajeTextArea = document.querySelector('.mensaje-text-area');
const mensajeContenedor = document.querySelector('.mensaje-contenedor');
const btnCopiar = document.querySelector('.btn-copiar');

// Función para mostrar el mensaje de aviso
function mostrarAviso(mensaje, colorFondo, colorTexto) {
    avisoMensaje.textContent = mensaje;
    avisoMensaje.style.backgroundColor = colorFondo;
    avisoMensaje.style.color = colorTexto;
    setTimeout(() => {
        avisoMensaje.style.backgroundColor = ''; // Volver al color original
        avisoMensaje.style.color = ''; // Volver al color original
        avisoMensaje.textContent = 'Solo letras minúsculas y sin acentos'; // Volver al texto original
    }, 1500);
}

// Función para validar el contenido del área de texto
function validarTexto(texto) {
    if (texto === '') {
        mostrarAviso('El campo de texto no debe estar vacío', 'red', 'white');
        return false;
    }

    const expresionInvalida = /[A-Z$\.\~\@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f\dáéíóúàèìòùäëïöü]/g;
    if (expresionInvalida.test(texto)) {
        mostrarAviso('El texto contiene caracteres no permitidos (mayúsculas, acentos, números o símbolos)', 'orange', 'black');
        return false;
    }

    return true;
}

// Función para encriptar el texto
function encriptarTexto(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

// Función para manejar el botón de encriptar
function manejarEncriptar() {
    const texto = encriptadorTextArea.value;

    if (!validarTexto(texto)) return;

    const textoEncriptado = encriptarTexto(texto);
    mensajeTextArea.value = textoEncriptado;

    // Ocultar el contenedor de mensaje y mostrar el botón de copiar
    mensajeContenedor.style.display = 'none';
    btnCopiar.style.visibility = 'visible';
}

// Función para manejar el botón de desencriptar
function manejarDesencriptar() {
    const texto = encriptadorTextArea.value;

    if (!validarTexto(texto)) return;

    const textoDesencriptado = desencriptarTexto(texto);
    mensajeTextArea.value = textoDesencriptado;

    // Ocultar el contenedor de mensaje y mostrar el botón de copiar
    mensajeContenedor.style.display = 'none';
    btnCopiar.style.visibility = 'visible';
}

// Asignación de eventos a los botones
btnEncriptar.addEventListener('click', manejarEncriptar);
btnDesencriptar.addEventListener('click', manejarDesencriptar);

// Función para copiar el texto al portapapeles
btnCopiar.addEventListener('click', () => {
    mensajeTextArea.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});
