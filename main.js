const reset = document.querySelector('.reset');
const pod = document.querySelector('.pod');
const input = document.querySelector('.input');
const span = document.querySelector('.span');
const btn = document.querySelector('.btn');
const ques = document.querySelector('.q');


const randomNum = function () {
    return Math.floor(Math.random() * 20) + 1;
}

function changeBackgroundColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + r + "," + g + "," + b + ")";
    pod.style.backgroundColor = randomColor;
}

function decreaseNumber() {
    let currentNumber = parseInt(span.innerHTML);
    if (currentNumber > 0) {
        span.innerHTML = currentNumber - 1;
    } else if (currentNumber === 0) {
        location.reload(true);
    }
}

const randomNumber = randomNum();


btn.addEventListener('click', function () {

    if (isNaN(input.value)) {
        pod.innerHTML = 'Только цифры';
    } else if (input.value === '') {
        pod.innerHTML = 'Введите значение';
    } else if (input.value > 20) {
        pod.innerHTML = 'От 1 до 20';
    } else {
        decreaseNumber()
        result();
    }


    changeBackgroundColor();
    function result() {
        if (randomNumber > parseInt(input.value)) {
            pod.innerHTML = 'Слишком мало';
        } else if (randomNumber < parseInt(input.value)) {
            pod.innerHTML = 'Слишком много';
        } else {
            ques.innerHTML = randomNumber;
            document.body.style.backgroundColor = "green"
            pod.innerHTML = 'Правильно!!!';
        }
    }

});


reset.addEventListener('click', function () {
    location.reload(true);
})





