 (function(){
     const buttons = document.querySelectorAll('button');
     let count = 0;


     buttons.forEach(function(button) {
         button.addEventListener('click', function() {
            if(button.classList.contains('button-x')){
                count--;
            } else if(button.classList.contains('button-y')){
                count++;
            }
             
            const counter = document.querySelector('#cont2');
            counter.textContent = count;
             

            if(count<0) {
                counter.style.color = 'red';
            } else if(count>0){
                 counter.style.color = 'green';
            } else if(count == 0){
                 counter.style.color = 'black';
            } 
           }); 
          });  
        })();
        