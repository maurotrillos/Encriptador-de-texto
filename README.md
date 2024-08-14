# Encriptador de Texto

## Descripción

Este proyecto es una aplicación web que permite encriptar y desencriptar mensajes de texto. La encriptación se realiza sustituyendo ciertas letras por combinaciones específicas de caracteres, lo que permite intercambiar mensajes secretos con otras personas que conozcan la clave de encriptación.

## Funcionalidades

- **Encriptar texto**: Convierte las letras de un mensaje en su versión encriptada utilizando la siguiente clave:
  - La letra "e" se convierte en "enter"
  - La letra "i" se convierte en "imes"
  - La letra "a" se convierte en "ai"
  - La letra "o" se convierte en "ober"
  - La letra "u" se convierte en "ufat"
  
- **Desencriptar texto**: Convierte un mensaje encriptado de vuelta a su forma original.
- **Validación de entrada**: 
  - Solo se permiten letras minúsculas.
  - No se permiten acentos, números ni caracteres especiales.
  - Se muestra un mensaje de advertencia si el campo de texto está vacío o contiene caracteres no válidos.
  
- **Copiar al portapapeles**: Permite copiar el resultado encriptado o desencriptado al portapapeles con un solo clic.

## Requisitos

- Solo funciona con letras minúsculas.
- No deben ser utilizados acentos, números ni caracteres especiales.

## Tecnologías Utilizadas

- **HTML5**: Estructura del contenido.
- **CSS3**: Estilos y diseño visual.
- **JavaScript**: Lógica para la encriptación, desencriptación y validaciones.

## Estructura del Proyecto

El proyecto se organiza de la siguiente manera:

```bash
encriptador-texto/
│
├── index.html        # Página principal con el formulario de encriptación/desencriptación
├── styless.css       # Archivo CSS con los estilos
├── app.js            # Archivo JavaScript con la lógica de encriptación/desencriptación
├── img/              # Carpeta de imágenes utilizadas en el proyecto
│   ├── favicon.ico   # Ícono de la página
│   ├── logo.svg      # Logo de la página
│   ├── aviso.svg     # Icono para el aviso de información
│   ├── muñeco.svg    # Imagen de muñeco decorativa
│   └── portada.png   # Imagen de fondo
└── README.md         # Este archivo con la descripción del proyecto
