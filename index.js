// Menu Dropdown Functionalities
const searchDropdown = document.getElementById('dropdown-container-search');

const toggleDropdown = () => {
    searchDropdown.classList.toggle('active');
}

function handleOutsideClick(event) {
    if (event.target !== searchDropdown && !searchDropdown.contains(event.target)) {
        searchDropdown.classList.remove('active');
    }
}
document.addEventListener('click', handleOutsideClick);

const dropdownButton = document.querySelector('.search-container');
dropdownButton.addEventListener('click', function(event) {
    event.stopPropagation();
});


// Dynamic Year
let year = new Date().getFullYear();

document.getElementById("year").innerHTML = year


// Scroll To Top
const btn = document.getElementById('button');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});

btn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Toggle responsive menu

const menu = document.getElementById('responsive-menu');
const menuToggler = document.getElementById('responsive-toggler');

menuToggler.addEventListener('click', () => {
    menu.classList.toggle('active')
})
