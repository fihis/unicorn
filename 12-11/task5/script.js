window.onload = function () {
    let menuBtn = document.getElementById('menu-btn');
    let menu = document.getElementById('menu');
    menuBtn.onclick = () => {
        menu.classList.toggle('hide');
    }
}

