'use strict';


let boxOne = document.querySelector('.box-one'), 
    boxItem = document.querySelectorAll('.box-one__item'), 
    boxTwo = document.querySelector('.box-two');

boxOne.addEventListener('click', function(event) { 
  let target = event.target;

  if (target.classList.contains('box-one__item')) {
    var cloneTar = target.cloneNode(true); 
    boxTwo.appendChild(cloneTar);  
  } 

  let closed = document.createElement('div');

  closed.classList.add('delete'); 
  closed.textContent = 'X';

  cloneTar.appendChild(closed);

  closed.addEventListener('click', function() { 
        cloneTar.remove();
  })
})

