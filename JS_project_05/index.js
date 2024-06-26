const randomcolor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

const generateGradient = function() {
    const color1 = randomcolor();
    const color2 = randomcolor();
    const color3 = randomcolor();
    return `linear-gradient(90deg, ${color1}, ${color2} , ${color3})`;
};

console.log(randomcolor);

let intervalId;
const startChangingColor = function(){
    document.body.style.transition = 'background 4s ease-in-out';
    intervalId = setInterval(changeBgcolor, 1000);

    function changeBgcolor(){
        document.body.style.background = generateGradient(); 
    }
};

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor);
