// Your code here
const dodger = document.getElementById("dodger");

document.addEventListener("keydown", function (event) {
    console.log(event);
});

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);

        dodger.style.left = `${left - 1}px`;
    }
});

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});

function moveDodgerRight() {
    let dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left, 10);
    if (left < 360) {
        dodger.style.left = (left + 1) + 'px';
    }
}

