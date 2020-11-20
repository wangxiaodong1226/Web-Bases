function Footer() {
    var dom = document.getElementById('root');
    var footer = document.createElement('div');
    footer.innerHTML = 'footer'+num;
    dom.appendChild(footer);
}