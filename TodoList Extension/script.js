const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.button-6');




if(window.localStorage.getItem("todos") == undefined){
     var todos = [];
     window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosexe = window.localStorage.getItem("todos");
var todos = JSON.parse(todosexe); 

class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	var input = document.createElement('input');
    	input.type = "text";
    	input.value = name; 
    	input.classList.add('item_input');

        

    	var remove = document.createElement('button');
      remove.className="btn";
       
    	remove.classList.add('remove');
        
    	remove.innerHTML = "Done✅";
    	remove.addEventListener('click', () => this.remove(itemBox, name),);
       

        var deleteItem = document.createElement('button');
    	deleteItem.classList.add('remove');
    	deleteItem.innerHTML = "Delete❌";
    	deleteItem.addEventListener('click', () =>
            this.remove(itemBox, name) ,
          
           

          );
       

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(deleteItem);
        itemBox.appendChild(remove);


    }
    
    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
        
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		inputValue.value = "";
	}
}
for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}
$(function(){

  $('.btn').confettiButton({

    // the number of particles
    num: 60,
  
    // an array of colos
    colorArray: ['#FF5566', '#FFFFFF', '#F1C40F', '#2EBFF6', '#2ECC71'],
  
    // min/max distances
    minX: 5,
    minY: 5,
    maxX: 120,
    maxY: 120,
  
    // min/max scale levels
    minScale: 50,
    maxScale: 150,
  
    // animation speed
    speed: 1,
  
    // rotate the particles
    rotation: true,
  
    // appears on a hover event
    hoverOnly: false
  
  });

});