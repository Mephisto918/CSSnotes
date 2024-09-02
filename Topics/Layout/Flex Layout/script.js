const cardrandom = document.querySelectorAll('.randomimgcard');

cardrandom.forEach(cardrandom => {
    let rand = Math.floor(Math.random() * 36) + 1;
    cardrandom.style.backgroundImage = 'url(../../imgSampleSources/' + rand + '.jpg)'; 
})

