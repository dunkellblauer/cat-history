function filterContent(id) {
    var contents = document.querySelectorAll('.menu__content');
    for (var i = 0; i < contents.length; i++) {
        if (contents[i].id === id) {
            contents[i].classList.remove('hide');
        } else {
            contents[i].classList.add('hide');
        }
    }
}

function showAllContent() {
    var contents = document.querySelectorAll('.menu__content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('hide');
    }
}
