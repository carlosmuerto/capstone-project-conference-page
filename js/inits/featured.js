import persons from './objects/persons.js';

const featuredPersonsMax = document.querySelector('#featured-persons-max');
const featuredContent = document.querySelector('#featured-persons .content');
const featuredContentItem = document.querySelector('#featured-persons .content .content-item');
const featuredPersonsMoreBtn = document.querySelector('#featured-persons .more-btn button');

function buildPicSrc(personName) {
  const code = personName.replace(' ', '-').replace(/[^a-zA-Z0-9]/g, '');
  return `assets/persons/avatar-${code}.jpg`;
}

function replaceInternalId(node, index) {
  node.id = node.id.replace('internal', index.toString());
}

function BuildFeaturedPerson(index) {
  const fctclone = featuredContentItem.cloneNode(true);
  const person = persons[index];
  fctclone.classList.remove('internal');
  replaceInternalId(fctclone, index);

  const picElement = fctclone.querySelector('#featured-persons-pic-internal');
  picElement.src = buildPicSrc(person.personName);
  replaceInternalId(picElement, index);

  const personNameElement = fctclone.querySelector('#featured-persons-name-internal');
  personNameElement.textContent = person.personName;
  replaceInternalId(personNameElement, index);

  const emailElement = fctclone.querySelector('#featured-persons-email-internal');
  emailElement.textContent = person.email;
  replaceInternalId(emailElement, index);

  const SentenceElement = fctclone.querySelector('#featured-persons-Sentence-internal');
  SentenceElement.textContent = person.Sentence;
  replaceInternalId(SentenceElement, index);

  return fctclone;
}

function buildFeatureContent() {
  featuredContent.innerHTML = null;
  for (
    let index = 0;
    index < featuredPersonsMax.textContent && index < persons.length;
    index += 1
  ) {
    featuredContent.appendChild(BuildFeaturedPerson(index));
  }
}

function showMoreFeaturePersons() {
  featuredPersonsMax.textContent = Number.parseInt(featuredPersonsMax.textContent, 10) + 2;
  buildFeatureContent();
}

export default function initfeaturedPersons() {
  buildFeatureContent();

  featuredPersonsMoreBtn.addEventListener('click', showMoreFeaturePersons);
}