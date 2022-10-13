const arrows = document.querySelectorAll('.text-content');

// Basic function to open and close awnsers. //

arrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    arrow.childNodes[3].classList.toggle('active');
    arrow.childNodes[1].classList.toggle('active');
    arrow.childNodes[1].childNodes[1].classList.toggle('active');
  });
});
