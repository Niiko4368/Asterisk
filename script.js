const menuButton = document.querySelector('.menu');
const menuOptions = document.getElementById('menuOptions');

menuButton.addEventListener('click', () => {
  if (menuOptions.style.display === 'block') {
    menuOptions.style.display = 'none';
  } else {
    menuOptions.style.display = 'block';
  }
});
