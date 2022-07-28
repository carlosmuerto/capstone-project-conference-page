const imageModale = document.querySelector('#image-modale');
const imageContents = document.querySelectorAll('.about-images .content-item');

function modifyImgModal(src, alt) {
  imageModale.querySelector('img').src = src;
  imageModale.querySelector('img').alt = alt;
}
function showModal() {
  if (imageModale.classList.contains('show')) {
    imageModale.classList.remove('show');
  } else {
    imageModale.classList.add('show');
  }
}

function intImgModal() {
  imageModale.addEventListener('click', showModal);
  imageContents.forEach((element) => {
    element.addEventListener('click', () => {
      modifyImgModal(
        element.querySelector('img').src,
        element.querySelector('.generated-name').textContent,
      );
      showModal();
    });
  });
}

export default intImgModal;