const primaryNav = document.querySelector(".navbar");
const navToggle = document.querySelector(".mobile-nav-toggle");

/**
 * Toggles the visibility of the primary navigation and updates the aria-expanded attribute of the nav toggle. Currently called from in the html button code.
 */
function toggleNav() {
    // Get the current visibility state of the primary navigation
    const isVisible = primaryNav.getAttribute("data-visible");

    // If the primary navigation is currently hidden, show it and update the aria-expanded attribute
    if (isVisible === "false") {
        primaryNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
    } 
    // If the primary navigation is currently visible, hide it and update the aria-expanded attribute
    else {
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
    }
}
