window.onload = function() {
    let ball = document.getElementById('ball');
    let field = document.getElementById('field');
    field.addEventListener('click', (e) => {
        let ballPositionX = e.clientX - field.getBoundingClientRect().x - (ball.offsetWidth / 2);
        let ballPositionY = e.clientY - field.getBoundingClientRect().y - (ball.offsetHeight / 2);
        if (ballPositionX < 0) {
            ballPositionX = 0;
        }
        if (ballPositionY < 0) {
            ballPositionY = 0;
        }
        if (ballPositionX > field.offsetWidth - (ball.offsetWidth)) {
            ballPositionX = field.offsetWidth - (ball.offsetWidth);
        }
        if (ballPositionY > field.offsetHeight - (ball.offsetHeight)) {
            ballPositionY = field.offsetHeight - (ball.offsetHeight);
        }
        ball.style.left = `${ballPositionX}px`;
        ball.style.top = `${ballPositionY}px`;
    })
}