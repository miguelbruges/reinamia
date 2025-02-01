let currentPage = 1;
const pages = document.querySelectorAll('.page');
const arrows = document.querySelectorAll('.arrow');
const yesButton = document.querySelector('.yes');

function showPage(pageNumber) {
    pages.forEach((page, index) => {
        page.style.display = (index + 1 === pageNumber) ? 'block' : 'none';
    });
}

arrows.forEach(arrow => {
    arrow.addEventListener('click', function(e) {
        if (e.target.classList.contains('right')) {
            if (currentPage < pages.length) {
                currentPage++;
            }
        } else if (e.target.classList.contains('left')) {
            if (currentPage > 1) {
                currentPage--;
            }
        }
        showPage(currentPage);
    });
});

yesButton.addEventListener('click', function() {
    currentPage = 2;  // Start poetry pages after the welcome page
    showPage(currentPage);
});
