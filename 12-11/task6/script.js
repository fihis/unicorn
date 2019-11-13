window.onload = function () { 
    let messages = document.getElementsByClassName('message');
    for (let i = 0; i < messages.length; i++){
        let cross = document.createElement('span');
        cross.innerHTML = '[x]';
        cross.style.color = 'red';
        cross.style.fontFamily = 'sans-serif';
        cross.style.position = 'absolute';
        cross.style.top = '5px';
        cross.style.right = '5px';
        cross.style.cursor = 'pointer';
        cross.onclick = () => {
            cross.parentElement.style.display = 'none'
        }
        messages[i].append(cross);
    }
}