function validateEmail(emailAdress) { /* para validar email */
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) { return true; }
    else { return false; }
} let emailAdress = "te@st@gmail.com";

let pegaSubmit = document.getElementById("submit");
let listaInput = document.querySelectorAll(".envolve-input");

function percorreCampos() {
    listaInput.forEach( /* foreach */
        (valorCorrente, indice) => {
            if (indice == 2) {
                let campoEmail = valorCorrente.children[0].value;
                if(validateEmail(campoEmail)){
                    valorCorrente.children[1].classList = "icone-erro";
                    valorCorrente.nextElementSibling.classList = "esconde-advertencia";
                }
                else{
                    valorCorrente.children[1].classList = "mostra-icone-erro";
                    valorCorrente.nextElementSibling.classList = "mostra-advertencia";
                }
            }else{
                let campoGeral = valorCorrente.children[0].value;
                if(campoGeral == ""){
                    console.log(valorCorrente.children[1]);
                    valorCorrente.children[1].classList = "mostra-icone-erro";
                    valorCorrente.nextElementSibling.classList = "mostra-advertencia";
                }else{
                    console.log("deu certo");
                    valorCorrente.children[1].classList = "icone-erro";
                    valorCorrente.nextElementSibling.classList = "esconde-advertencia";
                }
            }
        }
    )
}

pegaSubmit.addEventListener("click",
    () => { percorreCampos(); }
)
