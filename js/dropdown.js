const dropdowns = document.querySelectorAll('.dropdown');

function toggleDropdown(event) {
    const dropdownMenu = this.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('show');
}

function closeDropdowns(event) {
    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        if (dropdownMenu.classList.contains('show') && !dropdown.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
}

dropdowns.forEach(dropdown => {
    const toggleButton = dropdown.querySelector('.dropdown-toggle');
    toggleButton.addEventListener('click', toggleDropdown);
});

document.addEventListener('click', closeDropdowns);

export { toggleDropdown, closeDropdowns };
export default class Dropdown {
}