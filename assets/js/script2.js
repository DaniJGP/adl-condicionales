const cantidad1 = document.getElementById('sticker1');
const cantidad2 = document.getElementById('sticker2');
const cantidad3 = document.getElementById('sticker3');
const msg = document.getElementById('mensaje');
const btn = document.getElementById('btn-sticker');

btn.addEventListener('click', () => {
    let total =
        Number(cantidad1.value) +
        Number(cantidad2.value) +
        Number(cantidad3.value);

    if (total < 0) {
        msg.textContent = 'No puedes llevar stickers negativos ;)';
    } else if (total >= 0 && total <= 10) {
        msg.textContent = 'Llevas ' + total + ' stickers';
    } else if (total > 10) {
        msg.textContent = 'Llevas demasiados stickers';
    }
});


