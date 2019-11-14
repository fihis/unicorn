window.onload = function () {
    let mainImage = document.getElementById('main-image');
    document.getElementById('gallery').addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            mainImage.src = e.target.src;
            mainImage.style.display = 'block';
        }
    })
}