window.onload = ()=>{
    const linkStyle = document.createElement('link');
    linkStyle.rel = 'stylesheet';
    linkStyle.href = './style.css';

    document.head.append(linkStyle);

    const body = document.querySelector('body');

    const backLink = document.createElement('a');
    const h1 = document.createElement('h1');
    h1.append(backLink);
    backLink.textContent = 'Back';

    body.prepend(h1);
    backLink.addEventListener('click', () => {
        backLink.href = '../CSS Notes Main.html';
    });
}