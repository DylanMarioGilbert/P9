const galleryItems = document.querySelectorAll(".gallery-item");
    const filters = document.querySelectorAll(".tag-filter");

    function filterGallery(tag) {
        galleryItems.forEach(function(item) {
            if (tag === "all" || item.dataset.galleryTag === tag) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    filters.forEach(function(filter) {
        filter.addEventListener("click", function() {
            const tag = this.dataset.tag;

            filters.forEach(function(f) {
                f.classList.remove("active");
            });

            this.classList.add("active");

            filterGallery(tag);
        });
    });

    document.querySelector(".tag-filter[data-tag='all']").click();