/**
 * THE VERDANT ESTATE — GALLERY & LIGHTBOX SCRIPT
 * Category filtering, keyboard-accessible lightbox, next/previous controls,
 * and high-resolution floor-plan zooming.
 */

document.addEventListener("DOMContentLoaded", () => {
  initGalleryFiltering();
  initLightbox();
});

let currentGalleryList = [];
let currentLightboxIndex = 0;

function initGalleryFiltering() {
  const filterButtons = document.querySelectorAll(".gallery-filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (!filterButtons.length || !galleryItems.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");
        if (category === "all" || itemCategory === category) {
          item.style.display = "block";
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          }, 50);
        } else {
          item.style.opacity = "0";
          item.style.transform = "scale(0.95)";
          setTimeout(() => {
            item.style.display = "none";
          }, 250);
        }
      });
    });
  });
}

function initLightbox() {
  const lightbox = document.getElementById("estateLightbox");
  const lightboxImg = document.getElementById("lightboxImage");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.querySelector(".lightbox-close");
  const prevBtn = document.querySelector(".lightbox-prev");
  const nextBtn = document.querySelector(".lightbox-next");

  if (!lightbox || !lightboxImg) return;

  // Gather all items that can open in lightbox
  const gatherItems = () => {
    const visibleGalleryItems = Array.from(document.querySelectorAll(".gallery-item")).filter(
      item => item.style.display !== "none"
    );
    return visibleGalleryItems.map(item => ({
      src: item.querySelector("img")?.src || "",
      caption: item.querySelector(".gallery-item-title")?.textContent || "The Verdant Estate Gallery"
    }));
  };

  const openLightbox = (index, items) => {
    currentGalleryList = items;
    currentLightboxIndex = index;
    updateLightboxContent();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  };

  const updateLightboxContent = () => {
    if (!currentGalleryList.length) return;
    const item = currentGalleryList[currentLightboxIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.caption;
    if (lightboxCaption) {
      lightboxCaption.textContent = `${item.caption} (${currentLightboxIndex + 1} / ${currentGalleryList.length})`;
    }
  };

  const showNext = () => {
    if (!currentGalleryList.length) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentGalleryList.length;
    updateLightboxContent();
  };

  const showPrev = () => {
    if (!currentGalleryList.length) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentGalleryList.length) % currentGalleryList.length;
    updateLightboxContent();
  };

  // Gallery items click
  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      const items = gatherItems();
      const currentSrc = item.querySelector("img")?.src;
      const index = items.findIndex(i => i.src === currentSrc);
      openLightbox(index >= 0 ? index : 0, items);
    });
  });

  // Floor plan frame zoom click
  const planFrame = document.querySelector(".plan-image-frame");
  if (planFrame) {
    planFrame.addEventListener("click", () => {
      const activeImg = document.getElementById("activePlanImage");
      const activeTitle = document.getElementById("activePlanTitle");
      if (activeImg) {
        openLightbox(0, [{
          src: activeImg.src,
          caption: activeTitle?.textContent || "Architectural Floor Plan"
        }]);
      }
    });
  }

  // Navigation and closing events
  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (nextBtn) nextBtn.addEventListener("click", showNext);
  if (prevBtn) prevBtn.addEventListener("click", showPrev);

  // Click backdrop outside content to close
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("estate-lightbox")) {
      closeLightbox();
    }
  });

  // Keyboard accessibility
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });
}

