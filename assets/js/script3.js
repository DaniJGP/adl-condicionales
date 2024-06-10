const dig1 = document.getElementById('dig1');
const dig2 = document.getElementById('dig2');
const dig3 = document.getElementById('dig3');
const btn = document.getElementById('btn-password');
const msg = document.getElementById('mensaje');

btn.addEventListener('click', () => {
    const guess = dig1.value + dig2.value + dig3.value;
    if (guess === '911') {
        msg.textContent = 'Password 1 correcto';
    } else if (guess === '714') {
        msg.textContent = 'Password 2 correcto';
    } else {
        msg.textContent = 'Password incorrecto';
    }
});
