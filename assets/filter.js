document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach(function(item) {
        item.parentNode.style.display = "block";
    });

    document.querySelectorAll(".tag-filter").forEach(function(filter) {
        filter.addEventListener("click", function() {
            const tag = this.dataset.tag;
            galleryItems.forEach(function(item) {
                if (tag === "all" || item.dataset.galleryTag === tag) {
                    item.parentNode.style.display = "block";
                } else {
                    item.parentNode.style.display = "none";
                }
            });
        });
    });
});
