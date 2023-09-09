'use strict'

// Begin by selecting the DOM elements
const modalElm = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const showModalBtn = document.querySelectorAll(".show-modal");

// EvenFunctions 
function closeModal() {
    modalElm.classList.add("hidden");
    overlay.classList.add("hidden");
}

function openModal() {
    modalElm.classList.remove("hidden");
    overlay.classList.remove("hidden");
}


// Adding eventListener to each modalBtn
for (let i = 0; i < showModalBtn.length; i++) {
    showModalBtn[i].addEventListener('click', openModal);
};
// not dependent on Modal buttons so handled outside of for loop
// handling closeModalBtn 
closeModalBtn.addEventListener('click', closeModal)
// handling clicking overlay to close
overlay.addEventListener('click', closeModal)

// escape key handling 
document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape' && !modalElm.classList.contains("hidden")) {
        closeModal();
    }
});