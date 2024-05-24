const galleryItemsModal = document.querySelectorAll(".gallery-item");
const modal = document.querySelector(".modal");
const modalImage = document.getElementById("modalImage");
const closeModalButton = document.querySelector(".close");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

function openModal(imageSrc) {
    modalImage.src = imageSrc;
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function updateModalImage(index) {
    currentIndex = (index + galleryItemsModal.length) % galleryItemsModal.length;
    modalImage.src = galleryItemsModal[currentIndex].src;
}

function prevImage() {
    updateModalImage(currentIndex - 0.5);
}

function nextImage() {
    updateModalImage(currentIndex + 0.5);
}

galleryItemsModal.forEach(function(item, index) {
    item.addEventListener("click", function() {
        currentIndex = index;
        openModal(this.src);
    });
});

closeModalButton.addEventListener("click", closeModal);
prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});
