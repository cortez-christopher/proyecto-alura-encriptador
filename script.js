const textArea = document.querySelector(".texto-encriptado");
const mensaje = document.querySelector(".gestor-mensaje");
const inst = document.querySelector(".instruccion");
const img = document.getElementById("imagen");
const header = document.querySelector(".ningun");
let btnCopy = document.querySelector(".copiar");
let texto = document.getElementById("texto-copiado");
let textoPegar = document.getElementById("texto-encriptado");
let copiadoRealizado = false;

// Matriz que contiene los pares de caracteres para la encriptación/desencriptación
const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

// Transforma el texto de entrada a minúsculas y elimina las letras que son ingresadas con caracteres especiales

document.getElementById('texto-encriptado').addEventListener('input', function(){
    let textoMinusculas = this.value.toLowerCase();
    textoMinusculas = textoMinusculas.replace(/[^\w\s]/gi, ''); 
    this.value = textoMinusculas; 
})

// Encripta el texto ingresado y actualiza el campo de usuario
function btnEncriptar() {
    if (textArea.value == "") {
        return;
    } else {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";

        mensaje.style.display = "flex";
        btnCopy.style.display = "block";
        img.style.display = "none";
        header.style.display = "none";
        inst.style.display = "none";
    }
} 

// Desencripta el texto ingresado y actualiza el campo de usuario
function btnDesencriptar() {
    if (textArea.value == "") {
        return;
    } else {
        const textoDesencriptado = desencriptar(textArea.value);
        mensaje.value = textoDesencriptado;
        textArea.value = "";

        mensaje.style.display = "flex";
        btnCopy.style.display = "block";
        img.style.display = "none";
        header.style.display = "none";
        inst.style.display = "none";
    }
}

// Realiza la encriptación del texto basado en la matriz de códigos
function encriptar(stringEncriptado) {
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

// Realiza la desencriptación del texto basado en la matriz de códigos
function desencriptar(stringDesencriptado) {
    for (let i = 0; i < stringDesencriptado.length; i++) {
        for (let j = 0; j < matrizCodigo.length; j++) {
            const codigo = matrizCodigo[j];
            if (stringDesencriptado.substring(i).startsWith(codigo[1])) {
                stringDesencriptado = stringDesencriptado.substring(0, i) + codigo[0] + stringDesencriptado.substring(i + codigo[1].length);
                break; 
            }
        }
    }
    return stringDesencriptado;
}


// copiar el texto encriptado/desencriptado al portapapeles 

async function copy() {
    let txt = mensaje.value;
    await navigator.clipboard.writeText(txt);

    // Informa al usuario que el texto ha sido 'copiado'
    btnCopy.textContent = 'Texto Copiado';
    copiadoRealizado = true; 

    // Se restaura el texto original después de 3 segundos
    setTimeout(function() {
        btnCopy.textContent = 'Copiar';
        copiadoRealizado = false; 
    }, 3000); 
}

// Eventos para gestionar la copia de texto y la interacción con el área de texto

btnCopy.addEventListener('click', copy);

textoPegar.addEventListener('focus', function(){
    // Pega el texto encriptado/desencriptado si se ha realizado una copia previamiente presionado el botón copiar
    if (copiadoRealizado) {
        this.value = mensaje.value;
    }
});






