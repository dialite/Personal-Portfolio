//Navbar Selector
const close = document.querySelector('.close');
const nav = document.querySelector('.place');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');

//Work details Selector
const caravan = document.querySelector(".super-frame");
const docBody = document.querySelector("body");
const overlay = document.querySelector(".pop-bg");
const cards = document.querySelector(".work");

//Work projects
const projects = [
  {
    cardClass: ['grid-item'],
    cardImg: ['content-frame'],
    imgDetails: ['desktop-image-1', 'frame-case-a', 'column-one'],
    articleClassList: ['desktop-content', 'column-two'],
    h2TitleClass: ['content'],
    name: 'Tonic',
    canopyClass: ['canopy', 'flex'],
    tagline: ['CANOPY', 'Back EndDev', '2015'],
    p: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, tenetur officiis. Temporibus aut error, obcaecatifacere alias at sequi quae eveniet tempora, cupiditate perspiciatis, doloremque consequatur labore qui nostrum culpa placeat veritatis odio laboriosam ut quidem sunt asperiores..',
    featuredImage: 'img/Nature.svg',
    liFormat: ['flex', 'tool-content'],
    technologies: ['html', 'css', 'javascript'],
    live: 'https://bushido-brown.github.io/My-Portfolio2/',
    source: 'https://github.com/Bushido-brown/My-Portfolio2',
  },
  {
    cardClass: ['grid-item', 'mobile-switch', ],
    cardImg: ['content-frame'],
    imgDetails: ['desktop-image-2', 'frame-case-b', 'column-two'],
    articleClassList: ['desktop-content', 'column-one'],
    h2TitleClass: ['content'],
    name: 'Multi-Post Stories',
    canopyClass: ['canopy', 'flex'],
    tagline: ['CANOPY', 'Back EndDev', '2015'],
    p: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, tenetur officiis. Temporibus aut error, obcaecatifacere alias at sequi quae eveniet tempora, cupiditate perspiciatis, doloremque consequatur labore qui nostrum culpa placeat veritatis odio laboriosam ut quidem sunt asperiores..',
    featuredImage: 'img/Professional-art-printing.svg',
    liFormat: ['flex', 'tool-content'],
    technologies: ['html', 'css', 'javascript'],
    live: 'https://bushido-brown.github.io/My-Portfolio2/',
    source: 'https://github.com/Bushido-brown/My-Portfolio2',
  },
  {
    cardClass: ['grid-item', 'second-desktop-switch'],
    cardImg: ['content-frame'],
    imgDetails: ['desktop-image-2', 'frame-case-b', 'column-two'],
    articleClassList: ['desktop-content', 'column-one'],
    h2TitleClass: ['content'],
    name: 'Multi-Post Stories',
    flexClass: ['flex'],
    canopyClass: ['canopy'],
    tagline: ['FACEBOOK', 'Full Stack Dev', '2015'],
    p: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, tenetur officiis. Temporibus aut error, obcaecatifacere alias at sequi quae eveniet tempora, cupiditate perspiciatis, doloremque consequatur labore qui nostrum culpa placeat veritatis odio laboriosam ut quidem sunt asperiores..',
    featuredImage: 'img/Professional-art-printing.svg',
    liFormat: ['flex', 'tool-content'],
    rubyClass: ['ruby'],
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    live: 'https://bushido-brown.github.io/My-Portfolio2/',
    source: 'https://github.com/Bushido-brown/My-Portfolio2',
  },
  {
    cardClass: ['grid-item', 'mobile-switch'],
    cardImg: ['content-frame'],
    imgDetails: ['desktop-image-3', 'frame-case-c', 'column-one'],
    articleClassList: ['desktop-content', 'column-two'],
    h2TitleClass: ['content'],
    name: 'Tonic',
    flexClass: ['flex'],
    canopyClass: ['canopy'],
    tagline: ['CANOPY', 'Back EndDev', '2015'],
    p: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, tenetur officiis. Temporibus aut error, obcaecatifacere alias at sequi quae eveniet tempora, cupiditate perspiciatis, doloremque consequatur labore qui nostrum culpa placeat veritatis odio laboriosam ut quidem sunt asperiores..',
    featuredImage: 'img/Facebook.svg',
    liFormat: ['flex', 'tool-content'],
    technologies: ['html', 'css', 'javascript'],
    live: 'https://bushido-brown.github.io/My-Portfolio2/',
    source: 'https://github.com/Bushido-brown/My-Portfolio2',
  },
  {
    cardClass: ['grid-item', 'second-desktop-switch'],
    cardImg: ['content-frame'],
    imgDetails: ['desktop-image-3', 'frame-case-c', 'column-one'],
    articleClassList: ['desktop-content', 'column-two'],
    h2TitleClass: ['content'],
    name: 'Facebook 360',
    flexClass: ['flex'],
    canopyClass: ['canopy'],
    tagline: ['FACEBOOK', 'Full Stack Dev', '2015'],
    p: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, tenetur officiis. Temporibus aut error, obcaecatifacere alias at sequi quae eveniet tempora, cupiditate perspiciatis, doloremque consequatur labore qui nostrum culpa placeat veritatis odio laboriosam ut quidem sunt asperiores..',
    featuredImage: 'img/Facebook.svg',
    liFormat: ['flex', 'tool-content'],
    rubyClass: ['ruby'],
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    live: 'https://bushido-brown.github.io/My-Portfolio2/',
    source: 'https://github.com/Bushido-brown/My-Portfolio2',
  },
  {
    cardClass: ['grid-item', 'mobile-switch'],
    cardImg: ['content-frame'],
    imgDetails: ['desktop-image-4', 'frame-case-d', 'column-two'],
    articleClassList: ['desktop-content', 'column-one'],
    h2TitleClass: ['content'],
    name: 'Multi-Post Stories',
    flexClass: ['flex'],
    canopyClass: ['canopy'],
    tagline: ['CANOPY', 'Back EndDev', '2015'],
    p: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, tenetur officiis. Temporibus aut error, obcaecatifacere alias at sequi quae eveniet tempora, cupiditate perspiciatis, doloremque consequatur labore qui nostrum culpa placeat veritatis odio laboriosam ut quidem sunt asperiores..',
    featuredImage: 'img/Facebook.svg',
    liFormat: ['flex', 'tool-content'],
    technologies: ['html', 'css', 'javascript'],
    live: 'https://bushido-brown.github.io/My-Portfolio2/',
    source: 'https://github.com/Bushido-brown/My-Portfolio2',
  },
  {
    cardClass: ['grid-item', 'second-desktop-switch'],
    cardImg: ['content-frame'],
    imgDetails: ['desktop-image-4', 'frame-case-d', 'column-two'],
    articleClassList: ['desktop-content', 'column-one'],
    h2TitleClass: ['content'],
    name: 'Uber Navigation',
    flexClass: ['flex'],
    canopyClass: ['canopy'],
    tagline: ['Uber', 'Lead Developer', '2018'],
    p: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, tenetur officiis. Temporibus aut error, obcaecatifacere alias at sequi quae eveniet tempora, cupiditate perspiciatis, doloremque consequatur labore qui nostrum culpa placeat veritatis odio laboriosam ut quidem sunt asperiores..',
    featuredImage: 'img/Facebook.svg',
    liFormat: ['flex', 'tool-content'],
    rubyClass: ['ruby'],
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    live: 'https://bushido-brown.github.io/My-Portfolio2/',
    source: 'https://github.com/Bushido-brown/My-Portfolio2',
  },
];

//Creates tag names without attributes
function createTag(tagname) {
  const elem = document.createElement(tagname);
  return elem;
}

//Creates tag names with attributes and text
function createTagWithAttribute(tagName, [attribute, value, text]) {
  const tag = document.createElement(tagName);
  tag.setAttribute(attribute, value);
  tag.textContent = text;
  return tag;
}

//Creates tag names with only attributes
function createTagWithAttributeOnly(tagName, [attribute, value]) {
  const tag = document.createElement(tagName);
  tag.setAttribute(attribute, value);
  return tag;
}

//  create an image tag with src & alt values
function createImgTag([srcValue, altvalue]) {
  const imgTag = document.createElement('img');
  imgTag.setAttribute('src', srcValue);
  imgTag.setAttribute('alt', altvalue);
  return imgTag;
}

//Create links with href
function createLink(linkText, href) {
  const a = document.createElement('a');
  a.textContent = linkText;
  a.setAttribute('href', href);
  return a;
}

function createCard(projects, index) {
  //  create outer div for a card '.grid-item'
  const card = createTag('div');
  card.classList.add(...projects[index].cardClass);

  // create inner div for a card
  const cardImg = createTag('div');
  cardImg.classList.add(...projects[index].cardImg);
  card.appendChild(cardImg);

  // create the project image tag
  // const imgTag = createImgTag([projects[index].imgDetails[0], projects[index].imgDetails[1]]);
  // cardImg.appendChild(imgTag);

  const imgTag = createTag('div');
  imgTag.classList.add(...projects[index].imgDetails);
  cardImg.appendChild(imgTag);

  //  create the article
  const article = createTag('div');
  article.classList.add(...projects[index].articleClassList);
  cardImg.appendChild(article);

  //  create h2 title
  const h3Title = createTag('div');
  h3Title.classList.add(...projects[index].h2TitleClass);
  article.appendChild(h3Title);

  //  create title
  const h3Content = createTag('h3');
  h3Content.textContent = projects[index].name;
  h3Title.appendChild(h3Content);

  const canop = createTag('div');
  canop.classList.add(...projects[index].canopyClass);
  h3Title.appendChild(canop);

  //  create options link;
  const link1 = createLink('CANOPY', '#');
  link1.classList.add(...projects[index].canopyClass);
  canop.appendChild(link1);

  const link2 = createLink('Back End Dev', '#');
  link2.classList.add('history', 'font');
  canop.appendChild(link2);

  const link3 = createLink('2015', '#');
  link3.classList.add('history', 'font');
  canop.appendChild(link3);

  //  create paragraph and append to article
  const p = createTag('p');
  p.textContent = projects[index].p;
  article.appendChild(p);

  //  create languge div ul
  const langDiv = createTag('div');
  langDiv.classList.add(...projects[index].liFormat);
  article.appendChild(langDiv);

  //  create languge div links
  const link4 = createLink('html', '#');
  link4.classList.add('font');
  langDiv.appendChild(link4);

  const link5 = createLink('css', '#');
  link5.classList.add('font');
  langDiv.appendChild(link5);

  const link6 = createLink('javascript', '#');
  link6.classList.add('font');
  langDiv.appendChild(link6);

  //  create a button
  const button = createTag('button');
  button.type = 'submit';
  button.name = index;
  button.textContent = 'See Project';
  article.appendChild(button);
  cards.appendChild(card);
}

createCard(projects, 0);
createCard(projects, 1);
createCard(projects, 2);
createCard(projects, 3);
createCard(projects, 4);
createCard(projects, 5);
createCard(projects, 6);

const projectBtns = document.querySelectorAll('.content-frame  button');

const modalWindow = createTag('div');
modalWindow.classList.add('modal-window');
const modalHeader = createTag('div');
modalHeader.classList.add('modal-header');
const innerModalHeader = createTag('div');
innerModalHeader.classList.add('inner-modal-header');

//  cretae the buttton here
const modalBtn = createTag('button');
modalBtn.classList.add('modal-button');
modalBtn.type = 'button';
modalBtn.innerHTML = '&times;';
const modalBody = createTag('div');
modalBody.classList.add('modal-body');


close.addEventListener('click', () => {
  nav.classList.add('hide');
});

hamburger.addEventListener('click', () => {
  nav.classList.remove('hide');
});

Array.from(navLinks).forEach((navlink) => navlink.addEventListener('click', () => {
  nav.classList.add('hide');
}));

Array.from(projectBtns).forEach((projectBtn) => projectBtn.addEventListener('click', (e) => {
  const project = projects[+(e.target.name)];
  modalWindow.appendChild(modalHeader);
  modalWindow.appendChild(modalBody);
  docBody.appendChild(modalWindow);
  const modalTitle = createTag('h1');
  modalTitle.classList.add('font');
  modalTitle.classList.add('modal-h1');
  modalTitle.textContent = project.name;
  innerModalHeader.appendChild(modalTitle);
  modalHeader.appendChild(innerModalHeader);
  modalHeader.appendChild(modalBtn);

  const taglineDiv = createTag('div');
  taglineDiv.classList.add('tagline');
  const ul = createTag('ul');
  const li1 = createTag('li');
  li1.classList.add('title');
  const li2 = createTag('li');
  li2.classList.add('bg-dot');
  const li3 = createTag('li');
  li3.classList.add('bg-dot');
  li1.appendChild(createTagWithAttribute('a', ['href', '#', project.tagline[0]]));
  li2.appendChild(createTagWithAttribute('a', ['href', '#', project.tagline[1]]));
  li3.appendChild(createTagWithAttribute('a', ['href', '#', project.tagline[2]]));
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  taglineDiv.appendChild(ul);
  modalBody.appendChild(taglineDiv);
  const imageDiv = createTag('div');
  imageDiv.classList.add('modal-img');
  const imgTag = createTagWithAttributeOnly('img', ['src', project.featuredImage]);
  imageDiv.appendChild(imgTag);
  modalBody.appendChild(imageDiv);
  const lowerContentDiv = createTag('div');
  lowerContentDiv.classList.add('lower-content');
  modalBody.appendChild(lowerContentDiv);

  //  create the modal paragraph
  const paragraph = createTag('p');
  paragraph.textContent = project.description;
  paragraph.classList.add('description');
  lowerContentDiv.appendChild(paragraph);
  const asideContentDiv = createTag('div');
  asideContentDiv.classList.add('modal-aside');

  //  create the modal paragraph
  const techDiv = createTag('div');
  techDiv.classList.add('technologies');
  const ul2 = createTag('ul');
  ul2.classList.add('tech-list');
  const li4 = createTag('li');
  li4.classList.add('tech-item');
  const li5 = createTag('li');
  li5.classList.add('tech-item');
  const li6 = createTag('li');
  li6.classList.add('tech-item');
  li4.appendChild(createTagWithAttribute('a', ['href', '#', project.technologies[0]]));
  li5.appendChild(createTagWithAttribute('a', ['href', '#', project.technologies[1]]));
  li6.appendChild(createTagWithAttribute('a', ['href', '#', project.technologies[2]]));
  ul2.appendChild(li4);
  ul2.appendChild(li5);
  ul2.appendChild(li6);
  techDiv.appendChild(ul2);
  asideContentDiv.appendChild(techDiv);

  //  add see source & live links
  const extDiv = createTag('div');
  extDiv.classList.add('ext-div');
  const ul3 = createTag('ul');
  ul3.classList.add('ext-list');
  const li7 = createTag('li');
  li7.classList.add('ext-item', 'live');
  const li8 = createTag('li');
  li8.classList.add('ext-item', 'source');
  li7.appendChild(createTagWithAttribute('a', ['href', project.live, 'See live']));
  li8.appendChild(createTagWithAttribute('a', ['href', project.source, 'See Source']));
  ul3.appendChild(li7);
  ul3.appendChild(li8);
  extDiv.appendChild(ul3);
  asideContentDiv.appendChild(extDiv);
  lowerContentDiv.appendChild(asideContentDiv);

  //  class additions and removals
  docBody.classList.add('still');
  overlay.classList.add('active');
  caravan.classList.add('blur-effect');
  modalWindow.classList.remove('close');
}));

window.addEventListener('load', () => {
  overlay.classList.remove('active');
  modalWindow.classList.add('close');
  caravan.classList.remove('blur-effect');
  docBody.classList.remove('still');
});

modalBtn.addEventListener('click', () => {
  modalWindow.classList.add('close');
  overlay.classList.remove('active');
  caravan.classList.remove('blur-effect');
  docBody.classList.remove('still');
  innerModalHeader.innerHTML = '';
  modalBody.innerHTML = '';
});
