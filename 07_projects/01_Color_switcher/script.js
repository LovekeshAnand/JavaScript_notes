const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id//here we can also write color only
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id//here we can also write color only
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id//here we can also write color only
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id//here we can also write color only
        }
    })
    
})