document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll(".gallery-item");

    document.querySelectorAll(".tag-filter").forEach(function(filter) {
        filter.addEventListener("click", function() {
            const tag = this.dataset.tag;
            galleryItems.forEach(function(item) {
                if (tag === "all" || item.dataset.galleryTag === tag) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
