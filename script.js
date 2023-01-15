let numberCards = 0;
let plays = 0;
let shuffleDoubleCharacters = [];
let firstCard = "";
let secondCard = "";
activeCards = 0;

const characters = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'tripletsparrot'
    ];
function endGame(){
  let activeCards = document.querySelectorAll('.card-reveal');

  if(activeCards.length == numberCards){
    setTimeout(() => {
      alert(`Você ganhou em ${plays} jogadas!`);
    }, 500); 
  }
}
function iniciarJogo(){
    numberCards = prompt("Digite com quantas cartas quer jogar:");
    if(numberCards % 2 != 0 || numberCards < 4 || numberCards > 14){
        iniciarJogo();
    }
}
function shuffleCards() {
   let doubleCharacters = [];
  for (let i = 0; i < numberCards/2; i++) {
    doubleCharacters[i] = characters[i];
  }
  doubleCharacters = [...doubleCharacters, ...doubleCharacters];
  shuffleDoubleCharacters = doubleCharacters.sort(() => Math.random() - 0.5);
}
function checkCards(){
  if(firstCard.getAttribute('data-caracter') === secondCard.getAttribute('data-caracter')){
    firstCard = '';
    secondCard = '';
    endGame();
  }else{
    setTimeout(() => {

      firstCard.classList.remove('card-reveal');
      secondCard.classList.remove('card-reveal');

      firstCard = '';
      secondCard = '';
    }, 1000);
  }
}
const revealCard = (target) => {

  if(target.className.includes("card-reveal")){
    return;
  }
  if(firstCard === ''){
  target.classList.add("card-reveal");
  firstCard = target;
  plays++;
}else if(secondCard === ''){
  target.classList.add("card-reveal");
  secondCard = target;
  plays++;
  checkCards();
}
  
}
function createCards() {
    shuffleCards();

    let grid = document.querySelector(".grid");

    for (let i = 0; i < numberCards; i++) {

      let card = document.createElement("div");
      let upImg = document.createElement("img");
      upImg.src = `/archive/${shuffleDoubleCharacters[i]}.gif`;
      let parrot = document.createElement("img");
      parrot.src = "/archive/back.png";
      let front = document.createElement("div");
      let back = document.createElement("div");


      card.className = 'card';
      front.className = 'face front';
      back.className = 'face back';
      
      grid.appendChild(card);
      card.appendChild(front);
      front.appendChild(upImg);
      upImg.setAttribute('data-test', 'face-up-image');
      /* let frontDiv = document.querySelector('.front');
      let img = frontDiv.querySelector('img');
      img.setAttribute('data-test', 'face-up-image'); */

      
      parrot.setAttribute('data-test', 'face-down-image');
      back.appendChild(parrot);
      card.appendChild(back);
      card.setAttribute('data-caracter',shuffleDoubleCharacters[i]);
      card.setAttribute('data-test', `card`);
      card.addEventListener("click", (event) => revealCard(event.currentTarget));
    }
  }
  iniciarJogo();
  createCards(numberCards);

/* minhaArray.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
} 



*/
