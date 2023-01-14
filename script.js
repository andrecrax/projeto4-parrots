let numeroCartas = 0;
let jogadas = 0;
function iniciarJogo(){
    numeroCartas = prompt("Digite com quantas cartas quer jogar:");
    if(numeroCartas % 2 != 0 || numeroCartas < 4 || numeroCartas > 14){
        iniciarJogo();
    }
}
iniciarJogo();
criarDivs(numeroCartas);





















function criarDivs(numeroCartas) {
    let boxCard = document.querySelector(".boxCard");
    for (let i = 0; i < numeroCartas; i++) {
      let novaDiv = document.createElement("div");
      novaDiv.classList.add("card");
      let img = document.createElement("img");
      img.src = "/archive/back.png";
      novaDiv.appendChild(img);
      boxCard.appendChild(novaDiv);
    }
  }
  
  
  




minhaArray.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}