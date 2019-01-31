

function toggleContent() {
    const content = document.querySelector('.dropdown-content');
    // Toggle the ".dropdown-hidden" class off and on
    content.classList.toggle('dropdown-hidden');
}



// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdown = document.querySelector('.dropdown-button');
dropdown.addEventListener('click', toggleContent);

