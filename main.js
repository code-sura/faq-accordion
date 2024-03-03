document.addEventListener("DOMContentLoaded", function () {
  const accordionBtns = document.querySelectorAll(".accordion-btn");

  accordionBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
      const buttonDescription = this.nextElementSibling;
      const plusIcon = this.querySelector(".icon-plus");
      const miusIcon = this.querySelector(".icon-minus");

      buttonDescription.style.transition = "max-height 0.2s ease-in-out"; // Add transition

      if (buttonDescription.style.maxHeight) {
        // Collapse content with animation
        buttonDescription.style.maxHeight = "0px";
        plusIcon.style.display = "block";
        miusIcon.style.display = "none";
      } else {
        // Expand content with animation
        buttonDescription.style.maxHeight =
          buttonDescription.scrollHeight + "px";
        plusIcon.style.display = "none";
        miusIcon.style.display = "block";
      }

      // Close other open accordion items
      accordionBtns.forEach((otherBtn) => {
        if (otherBtn !== this) {
          otherBtn.classList.remove("active");
          otherBtn.nextElementSibling.style.maxHeight = null;
          otherBtn.querySelector(".icon-plus").style.display = "block";
          otherBtn.querySelector(".icon-minus").style.display = "none";
        }
      });
    });
  });
});
