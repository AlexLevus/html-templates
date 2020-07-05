import './styles.scss';

const socialButton = document.querySelector('.article-preview__social');
const socialWindow = document.querySelector('.social-window');
const socialImage = document.querySelector('.article-preview__social-image');
const socialWindowContainer = document.getElementById('social');

function changeClass(mainClass) {
  return (element, from, to) => {
    element.classList.remove(mainClass + from);
    element.classList.add(mainClass + to);
  };
}

function toggleClasses() {
  socialButton.classList.toggle('article-preview__social_inactive');
  socialButton.classList.toggle('article-preview__social_active');
  socialImage.classList.toggle('article-preview__social-image_inactive');
  socialImage.classList.toggle('article-preview__social-image_active');
}

function toggleSocialWindow() {
  const isWindowVisible = socialWindow.classList.contains('social-window_visible');

  if (isWindowVisible) {
    socialWindow.hidden = true;
    changeClass('social-window')(socialWindow, '_visible', '_hidden');
  } else {
    socialWindow.hidden = false;
    changeClass('social-window')(socialWindow, '_hidden', '_visible');
  }

  toggleClasses();
}

function socialAwayListener({ target }) {
  const isClickInside = socialWindowContainer.contains(target);
  const isWindowVisible = socialWindow.classList.contains('social-window_visible');

  if (!isClickInside && isWindowVisible) {
    changeClass('social-window')(socialWindow, '_visible', '_hidden');
    toggleClasses();
  }
}

socialButton.addEventListener('click', toggleSocialWindow);
document.addEventListener('click', socialAwayListener);
