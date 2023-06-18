const shareButton = document.getElementById("imgShare");
const modal = document.getElementById("modal");


shareButton.onclick = function () {
    if (modal.classList.contains('close')) {
        modal.classList.remove('close');
        modal.classList.add('show');
        shareButton.style.backgroundColor = 'hsla(214, 17%, 60%, 0.5'
    } else if (modal.classList.contains('show')) {
        modal.classList.remove('show');
        modal.classList.add('close');
        shareButton.style.backgroundColor = 'white'
    }

};