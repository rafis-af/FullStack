

let palpitesAnteriores = [];

const NumeroAleatorio = Math.floor(Math.random() * 100)

function clique(){

    let palpite = document.getElementById('palpite').value;
    
    let resultado = document.getElementById('resultado');

    if (palpite === '' || isNaN(palpite) || palpite < 0 || palpite > 99) {
        resultado.textContent = "Por favor, insira um número entre 0 e 99.";
        return;
    }

    const palpiteNumero = parseInt(palpite, 10);

    if (palpiteNumero < NumeroAleatorio) {
        resultado.textContent = "Muito baixo! Tente novamente.";
        resultado.style.setProperty("background-color", "red")
    } else if (palpiteNumero > NumeroAleatorio) {
        resultado.textContent = "Muito alto! Tente novamente.";
        resultado.style.setProperty("background-color", "red",);
    } else {
        resultado.textContent = `Parabéns! Você acertou o número ${NumeroAleatorio}.`;
        resultado.style.setProperty("background-color", "green");
    }
    
    palpitesAnteriores.push(palpiteNumero);

    listaPalpites.innerHTML = '';

    palpitesAnteriores.forEach(function(palpite) {
        const item = document.createElement("li");
        item.textContent = palpite;
        listaPalpites.appendChild(item);
    });

}
 
document.getElementById("enviarPalpite").addEventListener("click", adivinharNumero);

