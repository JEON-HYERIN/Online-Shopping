const navEl = document.querySelector('nav');
const clothesEls = document.querySelectorAll('.clothes');
navEl.addEventListener('click', event => {
  const filter = event.target.dataset.filter;
  // console.log(filter);
  if (filter === null) {
    return;
  }
  clothesEls.forEach(function(clothesEl) {
    // console.log(clothesEl.dataset.type);
    if(filter === clothesEl.dataset.type) {
      clothesEl.classList.remove('invisible');
    } else {
      clothesEl.classList.add('invisible');
    }
  });
});
