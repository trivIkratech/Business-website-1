/**
 * THE VERDANT ESTATE — LEAD GENERATION FORM SCRIPT
 * Comprehensive client-side validation, Indian phone number verification,
 * consent enforcement, and transparent endpoint submission handling.
 */

document.addEventListener("DOMContentLoaded", () => {
  initEnquiryForm();
});

function initEnquiryForm() {
  const form = document.getElementById("enquiryLeadForm");
  const statusAlert = document.getElementById("formStatusAlert");

  if (!form || !statusAlert) return;

  const phoneInput = document.getElementById("formPhone");
  const emailInput = document.getElementById("formEmail");
  const nameInput = document.getElementById("formFullName");
  const consentCheckbox = document.getElementById("formConsentCheckbox");
  const submitBtn = document.getElementById("formSubmitBtn");

  // Format phone number to clean digits
  if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset status alert
    statusAlert.style.display = "none";
    statusAlert.className = "form-status-alert";
    statusAlert.innerHTML = "";

    // Validation checks
    const fullName = nameInput?.value.trim();
    const phone = phoneInput?.value.trim();
    const email = emailInput?.value.trim();
    const consent = consentCheckbox?.checked;

    if (!fullName || fullName.length < 3) {
      showError("Please enter your full name (at least 3 characters).");
      nameInput?.focus();
      return;
    }

    // Indian 10-digit mobile number format
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phone || !phoneRegex.test(phone)) {
      showError("Please enter a valid 10-digit Indian mobile number (starting with 6, 7, 8, or 9).");
      phoneInput?.focus();
      return;
    }

    // Standard email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      showError("Please provide a valid email address for receiving project documentation.");
      emailInput?.focus();
      return;
    }

    if (!consent) {
      showError("Please acknowledge the consent checkbox to authorize our sales team to contact you.");
      consentCheckbox?.focus();
      return;
    }

    // Prepare lead payload
    const formData = {
      fullName,
      phone: `+91 ${phone}`,
      email,
      configuration: document.getElementById("preferredConfigSelect")?.value || "Not Specified",
      preferredVisit: document.getElementById("formVisitDate")?.value || "Flexible",
      message: document.getElementById("formNotes")?.value.trim() || "",
      timestamp: new Date().toISOString()
    };

    // Simulate sending / transparent handling
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Submitting Enquiry...';
    }

    setTimeout(() => {
      console.log("[The Verdant Estate] Lead Payload Captured:", formData);

      // Honest notice requirement: explain whether CRM backend is linked
      statusAlert.classList.add("alert-success");
      statusAlert.innerHTML = `
        <strong><i class="bi bi-check-circle-fill me-2"></i> Enquiry Registered Successfully!</strong><br>
        Thank you, <strong>${fullName}</strong>. Your enquiry for <em>${formData.configuration}</em> has been recorded.
        <small class="d-block mt-2 text-muted">Notice: In this development environment, the lead payload has been logged in the secure browser console. Once connected to your CRM/Webhook endpoint, instant SMS & Email notifications will trigger automatically.</small>
      `;
      statusAlert.style.display = "block";

      form.reset();

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="bi bi-send-fill me-2"></i> Submit Priority Enquiry';
      }
    }, 900);
  });

  function showError(msg) {
    statusAlert.classList.add("alert-danger");
    statusAlert.innerHTML = `<i class="bi bi-exclamation-triangle-fill me-2"></i> ${msg}`;
    statusAlert.style.display = "block";
  }
}

