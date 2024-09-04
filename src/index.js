import './styles.css';
import Dropdown from './dropdown';

document.getElementById("btn").addEventListener("click", (e) => {
    e.stopPropagation();
    Dropdown.toggleDropdown();
});

document.documentElement.addEventListener("click", () => {
    if (Dropdown.dropdownMenu.classList.contains("show")) {
        Dropdown.toggleDropdown();
    }
})