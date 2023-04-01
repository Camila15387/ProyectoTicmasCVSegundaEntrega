let hidetextbtn = document.getElementById('hidetextbtn');

let hidetext = document.getElementById('hidetext');

hidetextbtn.addEventListener('click', toggleText);

function toggleText () {
    hidetext.classList.toggleText('show');
}




