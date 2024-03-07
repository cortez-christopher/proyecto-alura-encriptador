![Encabezado del Proyecto](/img/header.jpg)

# Encriptador de Texto

Este proyecto es un encriptador de texto simple, diseñado para codificar y decodificar mensajes usando una técnica de sustitución basada en una matriz de codificación predefinida. La herramienta está implementada en JavaScript y proporciona una interfaz de usuario intuitiva para interactuar fácilmente con las funcionalidades de encriptación y desencriptación.

## Características

- **Encriptación de Texto:** Convierte cualquier texto ingresado en una forma encriptada, asegurando que el mensaje original no pueda ser entendido sin el proceso correspondiente de desencriptación.
- **Desencriptación de Texto:** Permite recuperar el texto original a partir de su forma encriptada, utilizando la misma matriz de codificación utilizada para encriptar.
- **Interfaz Sencilla:** La interfaz de usuario está diseñada para ser directa y fácil de usar, facilitando la encriptación y desencriptación de mensajes con solo unos pocos clics.
- **Conversión a Minúsculas y Limpieza de Texto:** Automáticamente convierte el texto de entrada a minúsculas y elimina caracteres especiales para mantener la consistencia en la encriptación.
- **Copiado al Portapapeles:** Proporciona una opción para copiar el texto encriptado/desencriptado al portapapeles, permitiendo un fácil uso del texto en otras aplicaciones o mensajes.

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript

## Uso

Para utilizar el encriptador, sigue estos pasos:

### Encriptar un Mensaje

1. **Escribe el mensaje que deseas encriptar** en el área de texto.
2. Haz clic en el botón **"Encriptar"**.
3. **El texto encriptado aparecerá** en el campo de mensaje.

### Desencriptar un Mensaje

1. **Para desencriptar**, haz clic derecho y se pegara automaticamente el mensaje encriptado en el área de texto.
2. Haz clic en **"Desencriptar"**.
3. **Recibirás el texto original** en el campo de mensaje.


## Matriz de Codificación

La encriptación y desencriptación se basa en la siguiente matriz de reemplazo, que define cómo se deben transformar ciertas letras para codificar o decodificar el mensaje:

```javascript
const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];



