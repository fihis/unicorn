window.onload = function () {
    let images = document.getElementsByTagName('img');
    let curImageIndex = 0;
    images[curImageIndex].classList.add('cur-img');
    images[curImageIndex + 1].classList.add('next-img');
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === 37) {
            switch (true) {
                case (curImageIndex === 1): {
                    images[curImageIndex - 1].classList.replace('prev-img', 'cur-img');
                    images[curImageIndex].classList.replace('cur-img', 'next-img');
                    images[curImageIndex + 1].classList.remove('next-img');
                    curImageIndex--;
                    break;
                }
                case ((curImageIndex > 1) && (curImageIndex < (images.length - 1))): {
                    images[curImageIndex - 2].classList.add('prev-img');
                    images[curImageIndex - 1].classList.replace('prev-img', 'cur-img');
                    images[curImageIndex].classList.replace('cur-img', 'next-img');
                    images[curImageIndex + 1].classList.remove('next-img');
                    curImageIndex--;
                    break;
                }
                case (curImageIndex === (images.length-1)): {
                    images[curImageIndex - 2].classList.add('prev-img');
                    images[curImageIndex - 1].classList.replace('prev-img', 'cur-img');
                    images[curImageIndex].classList.replace('cur-img', 'next-img');
                    curImageIndex--;
                    break;
                }
            }
        }

        if (e.keyCode === 39) {
            switch (true) {
                case (curImageIndex === 0): {
                    images[curImageIndex].classList.replace('cur-img', 'prev-img');
                    images[curImageIndex + 1].classList.replace('next-img', 'cur-img');
                    images[curImageIndex + 2].classList.add('next-img');
                    curImageIndex++;
                    break;
                }
                case ((curImageIndex > 0) && (curImageIndex < (images.length-2))): {
                    images[curImageIndex - 1].classList.remove('prev-img');
                    images[curImageIndex].classList.replace('cur-img', 'prev-img');
                    images[curImageIndex + 1].classList.replace('next-img', 'cur-img');
                    images[curImageIndex + 2].classList.add('next-img');
                    curImageIndex++;
                    break;
                }
                case (curImageIndex === (images.length-2)): {
                    images[curImageIndex - 1].classList.remove('prev-img');
                    images[curImageIndex].classList.replace('cur-img', 'prev-img');
                    images[curImageIndex + 1].classList.replace('next-img', 'cur-img');
                    curImageIndex++;
                    break;
                }

            }
        }
    }
    )
}
