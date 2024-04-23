const randomColor= function(){
    const hex="123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color+= hex[Math.floor(Math.random()*16)]
    }
    return color;
}

let start=document.getElementById("start");
let stop=document.getElementById("stop");
let body=document.querySelector("body");

let global;

start.addEventListener('click',function(){
    global=setInterval(() => {
        body.style.backgroundColor=randomColor()   
    }, 1000);
})

stop.addEventListener('click',function(){
    clearInterval( global)
})