window.onload = function() {
    let cross = document.createElement('span');
    cross.innerHTML = '[x]';
    document.body.append(cross);
    let messages = document.getElementsByClassName('message');
    console.log(messages);

}