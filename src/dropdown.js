const Dropdown = {
    dropdownBtn: document.getElementById("btn"),
    dropdownMenu: document.getElementById("dropdown"),
    toggleArrow: document.getElementById("arrow"),

    toggleDropdown() {
        this.dropdownMenu.classList.toggle("show");
        this.toggleArrow.classList.toggle("arrow");
    }
}

export default Dropdown;