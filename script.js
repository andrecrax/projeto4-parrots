let numeroCartas = 0;
let jogadas = 0;
function iniciarJogo(){
    numeroCartas = prompt("Digite com quantas cartas quer jogar:");
    if(numeroCartas % 2 != 0 || numeroCartas < 4 || numeroCartas > 14){
        iniciarJogo();
    }
}
iniciarJogo();


























minhaArray.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}