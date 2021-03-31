let img = document.querySelector('.face img');
let btn = document.querySelector('button');

function makeNewFace() {
    img.setAttribute('src', 'https://fakeface.rest/face/view');
}

window.addEventListener('load', makeNewFace);