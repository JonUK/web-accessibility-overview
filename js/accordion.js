
// Accessible accordion

initAccessibleAccordion('accessibleHeadingOne', 'accessibleContentOne');


function initAccessibleAccordion(headingId, contentId) {

    const headingParentElement = document.getElementById(headingId);
    const headingElement = document.getElementById(headingId).firstElementChild;
    const contentElement = document.getElementById(contentId);

    headingParentElement.setAttribute('role', 'heading'); // Set the heading parent to have the role of heading
    headingParentElement.setAttribute('aria-level', '3'); // Set the heading level (equivalent of h3)

    headingElement.setAttribute('tabindex', '0'); // Allow the header to receive focus
    headingElement.setAttribute('role', 'button'); // The header acts as a button. Could actually use a button in header.
    headingElement.setAttribute('aria-controls', contentId); // The header controls the visibility of the content
    headingElement.setAttribute('aria-expanded', 'false'); // Initially the content is not visible

    contentElement.style.display = 'none'; // Initially hide the content
    contentElement.setAttribute('role', 'region'); // Landmark section of the page that is sufficiently important
    contentElement.setAttribute('aria-labeledby', headingId); //
    contentElement.setAttribute('aria-hidden', 'true'); // Ensure the content is hidden to screen readers

    headingElement.addEventListener('click', () => {
        toggleContent();
    });

    headingElement.addEventListener('keypress', () => {
        if (event.key === " " || event.key === "Enter") {
            toggleContent();
            event.preventDefault(); // Pressing the space bar in some browsers will scroll the page
        }
    });

    function toggleContent() {

        const expanded = headingElement.getAttribute('aria-expanded') === 'true';

        if (expanded) {
            headingElement.setAttribute('aria-expanded', 'false');

            contentElement.removeAttribute('tabindex'); // Prevent the content from receiving focus
            contentElement.setAttribute('aria-hidden', 'true');
            $(contentElement).slideUp();
        } else {
            headingElement.setAttribute('aria-expanded', 'true');

            contentElement.setAttribute('tabindex', '0'); // Allow the content to receive focus
            contentElement.setAttribute('aria-hidden', 'false');
            $(contentElement).slideDown();
        }


    }

}



// Inaccessible accordion

initInaccessibleAccordion('inaccessibleHeadingOne', 'inaccessibleContentOne');


function initInaccessibleAccordion(headingId, contentId) {

    const headingElement = document.getElementById(headingId);
    const contentElement = document.getElementById(contentId);

    contentElement.style.display = 'none'; // Initially hide the content

    headingElement.addEventListener('click', () => {
        $(contentElement).slideToggle();
    })

}