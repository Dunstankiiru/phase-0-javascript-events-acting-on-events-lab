// Your code here


function moveDodgerLeft() {
    let dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left, 10);
    if (left > 0) {
        dodger.style.left = (left - 1) + 'px';
    }
}

function moveDodgerRight() {
    let dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left, 10);
    if (left < 360) {
        dodger.style.left = (left + 1) + 'px';
    }
}
