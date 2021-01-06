
document.getElementsByClassName("relogio")[0].innerHTML = new Date().toLocaleString();

const cayde = document.getElementById("cayde"); // Pega o elemento "#cayde" de dentro do DOM utilizando o Id
const caydeTitulo = document.getElementsByClassName("titulo")[0]; //Pega o elemento ".titulo" do DOM utilizando a class

let caydeBool = false; 
let caydeTituloBool = false;

// Função utilizada para quando se clicka na imagem do cayde-6 na página ela muda para uma outra imagem
const ThumbOnClick = () => {
    cayde.src = caydeBool ? "imagens/Thumb.gif" // Uma condição ternária (If else da vida)
                          : "imagens/Thumb3.gif";
    caydeBool = !caydeBool; // Aqui se inverte o valor do "caydeBool" de false para true e vice-versa"
}

const TitleOnClick = () => {
    caydeTitulo.innerText = caydeTituloBool ? "Cayde-69: O piadista da vanguarda" 
                                            : "Cayde-6";
    caydeTituloBool = !caydeTituloBool; 
}