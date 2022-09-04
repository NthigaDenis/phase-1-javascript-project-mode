
function setAllLinksColorRed() {
    const getAllLinks = document.querySelectorAll('.nav-bar ul a');
    getAllLinks.forEach((link) => {
        link.style.color = 'Red';
    });
}

function manipulateDom(elemArrayParam, elemToShow, linkClicked) {
    setAllLinksColorRed();
    elemArray = elemArrayParam;
    elemArray.forEach((elem) => {
        elem.style.display = 'none';
    });
    elemToShow.style.display = 'blue';
    linkClicked.style.color = 'indigo';
}

ListLink.addEventListener('click', () => {
    const elemArray = document.querySelectorAll(
        '.addBookSection, .contactSection'
    );
    manipulateDom(elemArray, listSection, listLink);
});

addLink.addEventListener('click', () => {
    const elemArray = document.querySelectorAll(
        '.bookListSection, .contactSection'
    );
    manipulateDom(elemArray, addSection, addLink);
});

contactLink.addEventListener('click', () => {
    const elemArray = document.querySelectorAll(
        '.bookListSection, .addBookSection'
    );
    manipulateDom(elemArray, contactSection, contactLink);
});
