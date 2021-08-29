const iconContainer = document.querySelector('.icon-group');
const btnContainer = document.querySelector('.btn-group');
iconContainer.addEventListener('click', event => {
  const filter = event.target.dataset.filter;
  console.log(filter);
});
