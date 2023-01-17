
const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
const winningMessage = document.querySelector("[data-winning-message]");
const restartButton = document.querySelector("[data-restart-button]")  

const Jogo_da_velha = {
 

    board: ['','','','','','','','',''],
 
    simbols: {
         options: ['X','O'],
         turn_index: 0,
         change: function (){
             this.turn_index = (this.turn_index === 0? 1 : 0);
         }
 
     },
     
     
    container_element:null,
    gameover: false,
 
    winning_sequences: [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6]
     ],
 
     init(container){
          this.container_element = container;
    },
 
       

    make_play(position) {
     if (this.gameover || this.board[position] != '') return false;
     if (this.board[position] === ''){
         this.board[position] = this.simbols.options[this.simbols.turn_index];
         this.draw();
             
         let winning_sequences_index = this.check_winning_sequences( this.simbols.options[this.simbols.turn_index] );
         if (winning_sequences_index >= 0){
             this.game_is_over();
         } 
         
         else{
             this.simbols.change();
         }
         return true;
     }
    },
      
     

      
    stylize_winner_sequence(winner_sequence) {
     winner_sequence.forEach((position) => {
       this
         .container_element
         .querySelector(`div:nth-child(${position + 1})`)
         .classList.add('winner');

     });
   },

   
 
     game_is_over:function(){
         this.gameover = true;
         
        console.log("GAME OVER");
        alert("Venceu!");
     },

      
    
  

     is_game_over() {
         return !this.board.includes('');
     },
 
 
    start() {
        this.board.fill('');
        this.draw();
        this.gameover = false;       
    },

    restart() {
        if (this.is_game_over() || this.gameover) {
           this.start();
           console.log('O jogo irá começar!!')
    }   else if (confirm('Deseja reiniciar o jogo?')) {
            this.start();
        console.log('O jogo irá começar!')
      }
    },

     
 
     draw() {
         this.container_element.innerHTML = this.board.map((element, index) => `<div onclick="tic_tac_toe.make_play('${index}')"> ${element} </div>`).reduce((content, current) => content + current);
     },
 
     check_winning_sequences: function(simbol){
         for (i in this.winning_sequences){
             if (this.board[this.winning_sequences[i][0] ] == simbol &&
                 this.board[this.winning_sequences[i][1] ] == simbol &&
                 this.board[this.winning_sequences[i][2] ] == simbol){
                     return i;
                console.log('Sequencia vencedora: ' + i);
                 }
         };
 
         return -1;
 
     },
      
     
     draw:function(){
         
         let content = '';
 
         for ( i in this.board ) {
             content += '<div onclick="Jogo_da_velha.make_play(' + i + ')">' + this.board[i] + '</div>';
         };
 
 
     this.container_element.innerHTML = content;
 
    },
    
    
 
 };