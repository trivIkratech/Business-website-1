/**
 * THE VERDANT ESTATE — MAIN INTERACTION SCRIPT
 * Handles header scrolling, active nav highlights, tabbed components,
 * FAQ accordions, brochure downloads, and floating actions.
 */

document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initActiveNavSpy();
  initMobileNavClose();
  initSmoothScroll();
  initPlanTabs();
  initLocationTabs();
  initFaqAccordion();
  initBackToTop();
  initBrochureDownload();
  initPreselectionHandlers();
});

/**
 * Header background opacity on scroll
 */
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/**
 * Active navigation spy using IntersectionObserver
 */
function initActiveNavSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".site-header .nav-link");

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -65% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/**
 * Automatically close mobile Bootstrap offcanvas/collapse after clicking a nav link
 */
function initMobileNavClose() {
  const navCollapse = document.getElementById("navbarEstateNav");
  const navLinks = document.querySelectorAll(".site-header .nav-link, .site-header .btn-gold");

  if (!navCollapse) return;

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
}

/**
 * Smooth scrolling with sticky header offset
 */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        e.preventDefault();
        const headerHeight = document.querySelector(".site-header")?.offsetHeight || 80;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPos,
          behavior: "smooth"
        });
      }
    });
  });
}

/**
 * Master Plan & Floor Plan Interactive Tabs
 */
function initPlanTabs() {
  const planButtons = document.querySelectorAll(".plan-tab-btn");
  const planImage = document.getElementById("activePlanImage");
  const planTitle = document.getElementById("activePlanTitle");
  const planSub = document.getElementById("activePlanSub");

  if (!planButtons.length || !planImage) return;

  const planMap = {
    master: {
      src: "assets/images/floor-plans/master-plan.svg",
      title: "Comprehensive Master Campus Blueprint",
      sub: "12 Acres Master Development with 78% Open Spaces & 4 Towers"
    },
    "2bhk": {
      src: "assets/images/floor-plans/2bhk-plan.svg",
      title: "2 BHK Grande Architectural Floor Plan",
      sub: "Carpet Area: 920 sq.ft. | Super Area: 1,350 sq.ft."
    },
    "3bhk": {
      src: "assets/images/floor-plans/3bhk-plan.svg",
      title: "3 BHK Royal Architectural Floor Plan",
      sub: "Carpet Area: 1,420 sq.ft. | Super Area: 1,980 sq.ft."
    },
    "4bhk": {
      src: "assets/images/floor-plans/4bhk-plan.svg",
      title: "4 BHK Presidential Architectural Floor Plan",
      sub: "Carpet Area: 2,380 sq.ft. | Super Area: 3,450 sq.ft."
    }
  };

  planButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      planButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const planKey = btn.getAttribute("data-plan");
      const data = planMap[planKey];

      if (data) {
        planImage.style.opacity = "0.2";
        setTimeout(() => {
          planImage.src = data.src;
          planImage.alt = data.title;
          if (planTitle) planTitle.textContent = data.title;
          if (planSub) planSub.textContent = data.sub;
          planImage.style.opacity = "1";
        }, 150);
      }
    });
  });
}

/**
 * Location connectivity dynamic category tabs
 */
function initLocationTabs() {
  const locationTabs = document.querySelectorAll(".location-tab-btn");
  const connectivityContainer = document.getElementById("connectivityListContainer");

  if (!locationTabs.length || !connectivityContainer || typeof PROJECT_DATA === "undefined") return;

  const iconMap = {
    tech: "bi-building",
    transit: "bi-train-front",
    schools: "bi-mortarboard",
    healthcare: "bi-hospital",
    retail: "bi-bag-check"
  };

  const renderCategory = (categoryKey) => {
    const list = PROJECT_DATA.connectivity[categoryKey] || [];
    const icon = iconMap[categoryKey] || "bi-geo-alt";

    connectivityContainer.innerHTML = list.map(item => `
      <div class="connectivity-item">
        <div class="connectivity-name">
          <i class="bi ${icon} text-gold"></i>
          <span>${item.name}</span>
        </div>
        <div class="connectivity-badge">
          ${item.time} • ${item.dist}
        </div>
      </div>
    `).join("");
  };

  locationTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      locationTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const cat = tab.getAttribute("data-category");
      renderCategory(cat);
    });
  });

  // Render initial default (tech)
  renderCategory("tech");
}

/**
 * Accessible FAQ Accordion
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const header = item.querySelector(".faq-header");
    const collapse = item.querySelector(".faq-collapse");

    if (!header || !collapse) return;

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other accordions for clean single-open behavior
      faqItems.forEach((other) => {
        other.classList.remove("active");
        const otherCollapse = other.querySelector(".faq-collapse");
        if (otherCollapse) {
          otherCollapse.style.maxHeight = null;
        }
      });

      if (!isActive) {
        item.classList.add("active");
        collapse.style.maxHeight = `${collapse.scrollHeight + 30}px`;
      }
    });
  });
}

/**
 * Back to top floating button
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }, { passive: true });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/**
 * Verified Brochure Download Trigger
 */
function initBrochureDownload() {
  const brochureButtons = document.querySelectorAll(".btn-download-brochure");

  brochureButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const pdfPath = PROJECT_DATA?.brand?.brochureUrl || "assets/documents/brochure.pdf";
      
      // Create temporary download anchor to cleanly download the brochure
      const link = document.createElement("a");
      link.href = pdfPath;
      link.download = "The-Verdant-Estate-Brochure.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
}

/**
 * Prefill configuration choice from Residence cards into enquiry form
 */
function initPreselectionHandlers() {
  const preselectBtns = document.querySelectorAll("[data-preselect-config]");
  const configSelect = document.getElementById("preferredConfigSelect");

  preselectBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const val = btn.getAttribute("data-preselect-config");
      if (configSelect && val) {
        configSelect.value = val;
      }
      const enquirySection = document.getElementById("enquiry");
      if (enquirySection) {
        const headerHeight = document.querySelector(".site-header")?.offsetHeight || 80;
        window.scrollTo({
          top: enquirySection.getBoundingClientRect().top + window.pageYOffset - headerHeight,
          behavior: "smooth"
        });
      }
    });
  });
}

