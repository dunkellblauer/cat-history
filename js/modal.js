const openModalBtns = document.querySelectorAll('.openModal');
const commonModal = document.getElementById('commonModal');

openModalBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        commonModal.style.display = 'flex';
    });
});

const closeModalBtn = commonModal.querySelector('.close');

closeModalBtn.addEventListener('click', function () {
    commonModal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === commonModal) {
        commonModal.style.display = 'none';
    }
});
