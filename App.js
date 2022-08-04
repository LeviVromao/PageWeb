const body =  document.querySelector('body');
const checkbox = document.querySelector('.checkbox');

function addingClass(){

    if(checkbox.checked === true){
        console.log('checkado');
    
        body.classList.add('overflow-y')
    }
    else if(checkbox.checked === false){
        console.log('nao checkado');
        body.classList.remove('overflow-y')
    };
}