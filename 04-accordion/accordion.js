
// Inaccessible accordion

const inaccessibleHeadingOne = document.getElementById('inaccessibleHeadingOne');
const inaccessibleAreaOne = document.getElementById('inaccessibleAreaOne');

inaccessibleAreaOne.style.display = 'none';

inaccessibleHeadingOne.addEventListener('click', () => {
    $(inaccessibleAreaOne).slideToggle();
});






