const image = document.querySelector('.image');
let bordered = false;

image.addEventListener ('click', function () {
    if (bordered) {
        this.style['border'] = 'none';
        bordered = false;
    } else {
        this.style['border'] = '2px solid red';
        bordered = true;
    }
})