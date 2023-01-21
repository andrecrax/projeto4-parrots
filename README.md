# :bird: Jogo da memória
![image](https://user-images.githubusercontent.com/49844995/213829093-366cca83-8417-4418-a780-3ea9b9109905.png)
</br></br>
Seu segundo projeto com JavaScript será a implementação do jogo Parrot Card Game, um jogo da memória temático com aleatoriedade, efeitos e transição, responsividade e papagaios dançantes!


# :link: <a href="https://projeto3-driveneats-jftym2w3v-andrecrax.vercel.app/">Acesse o Vercel aqui</a>


# :white_check_mark: Requisitos<br>
  :small_blue_diamond: Não utilize nenhuma biblioteca para implementar este projeto (jQuery, lodash, React, etc), nem outras linguagens que compilem para JS (TypeScript, ELM, etc), somente JavaScript puro.<br>
  :small_blue_diamond: Aplicar layout para desktop e mobile, seguindo o Figma.<br>
  :small_blue_diamond: Ao entrar no jogo, o usuário deverá ser perguntado com quantas cartas quer jogar (utilize prompt).<br>
  :small_blue_diamond: O usuário só poderá inserir números pares no prompt, de 4 a 14. Qualquer número que fuja dessa regra não deve ser aceito. No caso de números inválidos, o prompt deverá ficar sendo repetido em loop, até que o usuário coloque um número válido.<br>
  :small_blue_diamond: Após inserir um número de cartas válido, o jogo deverá inserir as cartas viradas pra baixo na página de forma que a distribuição seja aleatória.<br>
  :small_blue_diamond: É obrigatório que tanto a imagem do papagaio virado pra baixo quanto a imagem virada pra cima (gif) sejam implementadas como tag <img src="..."> (não deve ser um background).<br>
  :small_blue_diamond: Papagaios iguais devem necessariamente usar a mesma imagem como base (não podem ser arquivos diferentes para um mesmo papagaio).<br>
  :small_blue_diamond: Ao clicar em uma carta, ela deve ser virada.<br>
  :small_blue_diamond: Caso seja a primeira carta do par, ela deve permanecer virada até o usuário escolher a segunda carta.<br>
  :small_blue_diamond: Caso seja a segunda carta virada, existem duas situações: Caso seja igual à primeira carta, o usuário acertou e ambas agora devem ficar viradas pra cima até o final do jogo; Caso seja uma carta diferente da primeira carta virada, o usuário errou. Nesse caso, o jogo deve aguardar 1 segundo e então virar as duas cartas para baixo novamente.<br>
  :small_blue_diamond: Quando o usuário terminar de virar todas as cartas corretamente, deverá ser exibido um alert com a mensagem Você ganhou em X jogadas!, sendo X a quantidade de vezes que o usuário virou uma carta no jogo, ou seja, cada carta virada é uma jogada, não é virar duas cartas que é uma jogada..<br>
  :small_blue_diamond: Você deverá incluir no seu código os atributos data-test nos elementos indicados no <a href="https://www.figma.com/file/VX1aPipdOE4pvelmQJTMFR/Parrot-Card-Game---Seletores?node-id=0%3A1">Figma</a> a seguir.<br>
