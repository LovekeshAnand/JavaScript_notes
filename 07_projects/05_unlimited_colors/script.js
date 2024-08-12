//generate a random number

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

let intervalID
start.addEventListener('click', function(){
    const changeBgColor = function(){
        document.body.style.backgroundColor = randomColor();
    }
    intervalID = setInterval(changeBgColor, 1000)
})
stop.addEventListener('click', function(){
    clearInterval(intervalID)
    intervalID = null
})