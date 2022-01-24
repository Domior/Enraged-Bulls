const dropdown = document.querySelector('.dropdown');
if (dropdown != null) {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownMenu.style.display = 'none';

    dropdownBtn.addEventListener('click', () => {
        if (dropdownMenu.style.display === 'none') {
            dropdownMenu.style.display = 'block';
        } else {
            dropdownMenu.style.display = 'none';
        }
    })

    dropdownItems.forEach(el => {
        el.addEventListener('click', () => {
            dropdownBtn.textContent = el.textContent;
            dropdownMenu.style.display = 'none';
        })
    })
}