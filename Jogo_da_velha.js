
const Jogo_da_velha = {

   board: ['','','','','','','','',''],

   Symbols:{
        Option:["O","X"],
        turn_index:0,
        change:function(){
            this.turn_index
        }

    },


   container_element:null,
   gameover:false

    init: function(container){
         this.container_element = container;
   },

    make_play: function(position){
        if (this.gameover) return false;
        if (this.bord[position]=== ''){

        }
    }

    draw:function(){
        
        let content = '';

        for (i in this.board){
            content += '<div onclick= Jogo_da_velha.make_play ('+ i +')'>'' + this.bord[i] + '</div>'
        }

    this.container_element.innerHTML = content;

   },
   

};