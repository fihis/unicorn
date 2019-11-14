window.onload = function () {
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'SPAN') {
            e.target.nextElementSibling.classList.toggle('hide');
        }
    }
    )
}
