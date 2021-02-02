document.querySelector('.nav_button_mobile').onclick = function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('active');
}