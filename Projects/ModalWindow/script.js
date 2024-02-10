'use strict';

// Begin by selecting the DOM elements
const modalElement = document.querySelector(".modal")
const overlayBackground = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
// here we use querySelectorAll to find ALL Show Modal buttons
// This returns a node list we can iterate through.
const showModalBtn = document.querySelectorAll(".show-modal");

// EventFunctions
// If we want to "close" something, we add the hidden class
function closeModal() {
    modalElement.classList.add("hidden");
    overlayBackground.classList.add("hidden");
}

// If we want to "open" something, we remove the hidden class.
function openModal() {
    // Show the modal div
    modalElement.classList.remove("hidden");
    // Show the overlay dark blurry background
    overlayBackground.classList.remove("hidden");
}

// Adding eventListener to each button in our showModalBtn node list
for (let i = 0; i < showModalBtn.length; i++) {
    showModalBtn[i].addEventListener('click', openModal);
};

// not dependent on showModalBtn buttons so handled outside of for loop
// Once a modal window opens, there will ALWAYS only be just 1 close button.
// handling closeModalBtn
closeModalBtn.addEventListener('click', closeModal)
// handling clicking overlayBackground to close modal window
overlayBackground.addEventListener('click', closeModal)

// Global events like key clicking occur on the document
// here we have to check two conditions
// Check 1 - Escape key was pressed (check the evt object for this)
// Check 2 - The modal window is currently shown i.e It does NOT contain the hidden class (check classList for this)
// The information of each event is stored in the evt object and is accessible in our eventHandler function.
document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape' && !modalElement.classList.contains("hidden")) {
        closeModal();
    }
});
