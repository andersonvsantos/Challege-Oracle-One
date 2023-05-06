const message = document.querySelector(".message");
const result = document.querySelector(".result");
const notFound = document.querySelector(".image");
const copyBtn = document.querySelector(".copy-button")

//Lógica do descodificador

function removeImg() {
    notFound.style.display = "none";
    result.style.display = "block";
    copyBtn.style.display = "block";
}

function showImg() {
    notFound.style.display = "block";
    result.style.display = "none";
    copyBtn.style.display = "none";
}

function btnEncriptar() {
    const textoEncriptado = encriptar(message.value);
    result.value = textoEncriptado;
    message.value = "";
}

function encriptar(stringEncriptada) {
    if (stringEncriptada != "") {
        let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase();

        for(let i = 0; i < matrizCodigo.length; i++) {
            if(stringEncriptada.includes(matrizCodigo[i][0])) {
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }

        removeImg();

        return stringEncriptada;
        
    } else {
        alert('Por favor insira alguma mensagem!');
        showImg();
    }
}

function btnDescriptar() {
    const textoDescriptado = Descriptar(message.value);
    result.value = textoDescriptado;
    message.value = "";
}

function Descriptar(stringDescriptada) {
    if (stringDescriptada != "") {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDescriptada = stringDescriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptada.includes(matrizCodigo[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    removeImg();

    return stringDescriptada;

    } else {
        alert('Por favor insira alguma mensagem!');
        showImg();
    }
}

//Botão copiar

function copiar() {
    textoCopiado = document.getElementById("result");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    
    document.execCommand("copy");
}

//Mudar tema

const changeThemeBtn = document.querySelector("#change-theme");

changeThemeBtn.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode")
})