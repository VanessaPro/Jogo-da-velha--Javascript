const Jogo_da_velha ={

    board:['','','','','','','','',''],

   Symbol:["O","X"],
   container_element:null,

   init:function(container){
         this.container_element = container;
   },

   draw:function (){
        
        let content = '';
        for (i in this.board){
            content += '<div>' + i + '</div>';
        }

    this.container_element.innerHTML = content;

   }
   

};
