const normalbtt = document.getElementById('normalbt');
const box1 = document.getElementById('dirbox1');
normalbtt.addEventListener('click', function(){
    box1.classList.contains('animation') === true ? box1.removeAttribute('class') : box1.classList.add('animation');
});

const reversebtt = document.querySelector('#reversebt');
const box2 = document.getElementById('dirbox2');
reversebtt.addEventListener('click', function(){
    box2.classList.contains('animation') === true ? box2.removeAttribute('class') : box2.classList.add('animation');
});

const alternatett = document.querySelector('#alternatebt');
const box3 = document.getElementById('dirbox3');
alternatett.addEventListener('click', function(){
    box3.classList.contains('animation') === true ? box3.removeAttribute('class') : box3.classList.add('animation');
});

const alternatreversebtt = document.querySelector('#alternate-reversebt');
const box4 = document.getElementById('dirbox4');
alternatreversebtt.addEventListener('click', function(){
    box4.classList.contains('animation') === true ? box4.removeAttribute('class') : box4.classList.add('animation');
});

/*---------------------------------------------------- */

const nonebtt = document.getElementById('nonebt');
const bafbox1 = document.getElementById('bafbox1');
nonebtt.addEventListener('click', function(){
    bafbox1.classList.contains('animationbaf') === true ? bafbox1.removeAttribute('class') : bafbox1.classList.add('animationbaf');
});

const forwardsbtt = document.querySelector('#forwardsbt');
const bafbox2 = document.getElementById('bafbox2');
forwardsbtt.addEventListener('click', function(){
    bafbox2.classList.contains('animationbaf') === true ? bafbox2.removeAttribute('class') : bafbox2.classList.add('animationbaf');
});
const backwardstt = document.querySelector('#backwardsbt');
const bafbox3 = document.getElementById('bafbox3');
backwardstt.addEventListener('click', function(){
    bafbox3.classList.contains('animationbaf') === true ? bafbox3.removeAttribute('class') : bafbox3.classList.add('animationbaf');
});

const bothbtt = document.querySelector('#both');
const bafbox4 = document.getElementById('bafbox4');
bothbtt.addEventListener('click', function(){
    bafbox4.classList.contains('animationbaf') === true ? bafbox4.removeAttribute('class') : bafbox4.classList.add('animationbaf');
});


