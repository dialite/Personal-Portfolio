//  Navbar Selector
const close = document.querySelector(".close");
const nav = document.querySelector(".place");
const navLinks = document.querySelectorAll(".nav-link");
const hamburger = document.querySelector(".hamburger");
const identityBox2 = document.querySelector(".identity-box");

//  Work details Selector
const caravan = document.querySelector(".super-frame");
const docBody = document.querySelector("body");
const overlay = document.querySelector(".pop-bg");
const cards = document.querySelector(".work");

//  Work projects
const projects = [
  {
    cardClass: ["grid-item", "anime"],
    cardImg: ["content-frame"],
    imgDetails: ["desktop-image-1", "frame-case-a", "column-one"],
    articleClassList: ["desktop-content", "column-two"],
    h2TitleClass: ["content"],
    name: "Doctor's Appointment",
    highlights: ["Health", "Full Stack Dev", "2023"],
    stacks: ["React js", "Ruby on Rails", "PostgreSQL"],
    tagline: ["Health", "Full Stack Dev", "2023"],
    p: "Revolutionize your medical practice with our web application – register new doctors, store patient information securely, and schedule appointments effortlessly. Say goodbye to paper-based systems and streamline your operations with ease. Try it now!",
    description:
      "Streamline your medical practice with ease! Our innovative web application allows you to seamlessly register new doctors, securely store patient information, and schedule appointments with just a few clicks. Say goodbye to the hassle of paper-based systems and hello to a more efficient way of managing your medical practice. Try it out today!",
    featuredImagetiny: "img/doctors-app-mobile-1.png",
    featuredImage: "img/doctors-app-desk.png",
    liFormat: ["flex", "tool-content"],
    technologies: ["React js", "Ruby on Rails", "PostgreSQL"],
    live: "https://doctorsfinal.netlify.app/",
    source: "https://github.com/dialite/Doctors-appointment-frontend",
  },
  {
    cardClass: ["grid-item", "mobile-switch"],
    cardImg: ["content-frame"],
    imgDetails: ["desktop-image-2", "frame-case-b", "column-two"],
    articleClassList: ["desktop-content", "column-one"],
    h2TitleClass: ["content"],
    name: "Coin Stats",
    highlights: ["COIN STATS", "React Dev", "2022"],
    stacks: ["React", "Redux", "Javascript"],
    tagline: ["COIN STATS", "React Dev", "2022"],
    p: "Track your favorite cryptocurrencies on the go with Crypto Stats – the ultimate mobile web app for real-time market capitalization stats. Stay ahead of the game with our user-friendly and innovative app, powered by CoinStats API. Download now and stay in the know!",
    description:
      "Stay ahead of the game with Crypto Stats – the ultimate mobile web application for real-time cryptocurrency tracking! Powered by CoinStats API, our innovative app delivers the latest market capitalization stats for all your favorite digital currencies, all in one convenient location. Designed with React and Redux, Crypto Stats offers a seamless and user-friendly experience for crypto enthusiasts on the go. Download now and stay in the know!",
    featuredImagetiny: "img/coin-stats-mobile.png",
    featuredImage: "img/coin-stats-decktop1.png",
    liFormat: ["flex", "tool-content"],
    technologies: ["React", "Redux", "Javascript"],
    live: "https://coin-stats.netlify.app/",
    source: "https://github.com/dialite/coin-stats",
  },
  {
    cardClass: ["grid-item", "second-desktop-switch", "anime"],
    cardImg: ["content-frame"],
    imgDetails: ["desktop-image-2", "frame-case-b", "column-two"],
    articleClassList: ["desktop-content", "column-one"],
    h2TitleClass: ["content"],
    name: ["Coin Stats"],
    highlights: ["COIN STATS", "React Dev", "2022"],
    stacks: ["React", "Redux", "Javascript"],
    tagline: ["COIN STATS", "React Dev", "2022"],
    p: "Track your favorite cryptocurrencies on the go with Crypto Stats – the ultimate mobile web app for real-time market capitalization stats. Stay ahead of the game with our user-friendly and innovative app, powered by CoinStats API. Download now and stay in the know!",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, tenetur officiis. Temporibus aut error, obcaecatifacere alias at sequi quae eveniet tempora, cupiditate perspiciatis, doloremque consequatur labore qui nostrum culpa placeat veritatis odio laboriosam ut quidem sunt asperiores..",
    featuredImagetiny: "img/coin-stats-mobile.png",
    featuredImage: "img/coin-stats-decktop1.png",
    liFormat: ["flex", "tool-content"],
    rubyClass: ["ruby"],
    technologies: ["React", "Redux", "Javascript"],
    live: "https://coin-stats.netlify.app/",
    source: "https://github.com/dialite/coin-stats",
  },
  {
    cardClass: ["grid-item", "mobile-switch"],
    cardImg: ["content-frame"],
    imgDetails: ["desktop-image-3", "frame-case-c", "column-one"],
    articleClassList: ["desktop-content", "column-two"],
    h2TitleClass: ["content"],
    name: "Climate Action Innovation - COP27",
    highlights: ["COP27", "Front EndDev", "2022"],
    stacks: ["html", "css", "javascript"],
    tagline: ["COP27", "Front EndDev", "2022"],
    p: "Join the global fight against climate change with Climate Action Innovation Zone COP27 event website. Designed to inspire and built with HTML, CSS, and JavaScript, our innovative webpage provides a user-friendly platform for the world's leading climate change summit. Join the movement for a brighter, greener future – visit us now!",
    description:
      "Join the global fight against climate change with the Climate Action Innovation Zone COP27 event website! Designed with Cindy Shin's guidelines and built with HTML, CSS, and JavaScript, our innovative webpage offers a seamless and engaging experience for the world's leading climate change summit. Explore our user-friendly platform and join the movement for a brighter, greener future. Don't miss out – visit us today!",
    featuredImage: "img/cop-27.png",
    featuredImagetiny: "img/cop-27-mobile.png",
    liFormat: ["flex", "tool-content"],
    technologies: ["html", "css", "javascript"],
    live: "https://dialite.github.io/COP27/",
    source: "https://github.com/dialite/COP27",
  },
  {
    cardClass: ["grid-item", "second-desktop-switch", "anime"],
    cardImg: ["content-frame"],
    imgDetails: ["desktop-image-3", "frame-case-c", "column-one"],
    articleClassList: ["desktop-content", "column-two"],
    h2TitleClass: ["content"],
    name: "Climate Action Innovation - COP27",
    highlights: ["COP27", "Front EndDev", "2022"],
    stacks: ["html", "css", "javascript"],
    tagline: ["FACEBOOK", "Fron End Dev", "2022"],
    p: "Join the global fight against climate change with Climate Action Innovation Zone COP27 event website. Designed to inspire and built with HTML, CSS, and JavaScript, our innovative webpage provides a user-friendly platform for the world's leading climate change summit. Join the movement for a brighter, greener future – visit us now!",
    description:
      "Join the global fight against climate change with the Climate Action Innovation Zone COP27 event website! Designed with Cindy Shin's guidelines and built with HTML, CSS, and JavaScript, our innovative webpage offers a seamless and engaging experience for the world's leading climate change summit. Explore our user-friendly platform and join the movement for a brighter, greener future. Don't miss out – visit us today!",
    featuredImage: "img/cop-27.png",
    featuredImagetiny: "img/cop-27-mobile.png",
    liFormat: ["flex", "tool-content"],
    rubyClass: ["ruby"],
    technologies: ["html", "css", "javascript"],
    live: "https://dialite.github.io/COP27/",
    source: "https://github.com/dialite/COP27",
  },
  {
    cardClass: ["grid-item", "mobile-switch"],
    cardImg: ["content-frame"],
    imgDetails: ["desktop-image-4", "frame-case-d", "column-two"],
    articleClassList: ["desktop-content", "column-one"],
    h2TitleClass: ["content"],
    name: "Book Store Tracker",
    highlights: ["BOOKS", "Front End Dev", "2022"],
    stacks: ["React", "Redux", "Javascript"],
    tagline: ["BOOKS", "Front End Dev", "2022"],
    p: "Effortlessly manage your reading list with our book-tracking web application. Our user-friendly platform, built with React, Redux, and an external API, makes it easy to browse, add, and delete books. Whether you're an avid reader or just starting out, start your reading journey with us today!",
    description:
      "Take control of your reading list with our book-tracking web application – the ultimate tool for book lovers everywhere! Developed with the power of React, Redux, and an external API, our innovative platform empowers users to browse, add, and delete books with ease. Whether you're a bookworm or just starting, our user-friendly interface makes it easy to manage your reading list. Download now and start your book journey today!",
    featuredImage: "img/bookstore-desktop-1.png",
    featuredImagetiny: "img/bookstore-mobile.png",
    liFormat: ["flex", "tool-content"],
    technologies: ["React", "Redux", "Javascript"],
    live: "https://book-record.netlify.app/",
    source: "https://github.com/dialite/bookstore-app",
  },
  {
    cardClass: ["grid-item", "second-desktop-switch", "anime"],
    cardImg: ["content-frame"],
    imgDetails: ["desktop-image-4", "frame-case-d", "column-two"],
    articleClassList: ["desktop-content", "column-one"],
    h2TitleClass: ["content"],
    name: "Book Store Tracker",
    highlights: ["BOOKS", "Front End Dev", "2022"],
    stacks: ["React", "Redux", "Javascript"],
    tagline: ["Books", "Front End Developer", "2022"],
    p: "Effortlessly manage your reading list with our book-tracking web application. Our user-friendly platform, built with React, Redux, and an external API, makes it easy to browse, add, and delete books. Whether you're an avid reader or just starting out, start your reading journey with us today!",
    description:
      "Take control of your reading list with our book-tracking web application – the ultimate tool for book lovers everywhere! Developed with the power of React, Redux, and an external API, our innovative platform empowers users to browse, add, and delete books with ease. Whether you're a bookworm or just starting, our user-friendly interface makes it easy to manage your reading list. Download now and start your book journey today!",
    featuredImage: "img/bookstore-desktop-1.png",
    featuredImagetiny: "img/bookstore-mobile.png",
    liFormat: ["flex", "tool-content"],
    rubyClass: ["ruby"],
    technologies: ["React", "Redux", "Javascript"],
    live: "https://book-record.netlify.app/",
    source: "https://github.com/dialite/bookstore-app",
  },
];

//  Creates tag names without attributes
function createTag(tagname) {
  const elem = document.createElement(tagname);
  return elem;
}

//  Creates tag names with attributes and text
function createTagWithAttribute(tagName, [attribute, value, text]) {
  const tag = document.createElement(tagName);
  tag.setAttribute(attribute, value);
  tag.textContent = text;
  return tag;
}

//  Creates tag names with only attributes
function createTagWithAttributeOnly(tagName, [attribute, value]) {
  const tag = document.createElement(tagName);
  tag.setAttribute(attribute, value);
  return tag;
}

function createCard(index) {
  //  create outer div for a card '.grid-item'
  const card = createTag("div");
  card.classList.add(...projects[index].cardClass);

  // create inner div for a card
  const cardImg = createTag("div");
  cardImg.classList.add(...projects[index].cardImg);
  card.appendChild(cardImg);

  // create the project image tag
  const imgTag = createTag("div");
  imgTag.classList.add(...projects[index].imgDetails);
  cardImg.appendChild(imgTag);

  //  create the article
  const article = createTag("div");
  article.classList.add(...projects[index].articleClassList);
  cardImg.appendChild(article);

  //  create h2 title
  const h3Title = createTag("div");
  h3Title.classList.add(...projects[index].h2TitleClass);
  article.appendChild(h3Title);

  //  create title
  const h3Content = createTag("h3");
  h3Content.textContent = projects[index].name;
  h3Title.appendChild(h3Content);

  // Create dynamic text for each cards showing highlights
  const highlightList = createTag("ul");
  highlightList.classList.add("flex");
  h3Title.appendChild(highlightList);

  for (let i = 0; i < projects[index].highlights.length; i++) {
    const listItem = createTag("li");
    listItem.classList.add("canopy");
    listItem.textContent = projects[index].highlights[i];
    highlightList.appendChild(listItem);
  }

  // const canop = createTag("ul");
  // canop.classList.add("flex");
  // h3Title.appendChild(canop);

  // //  create options link;
  // const link1 = createTag("li");
  // link1.classList.add("canopy");
  // link1.textContent = "CANOPY";
  // canop.appendChild(link1);

  // const link2 = createTag("li");
  // link2.textContent = "Back End Dev";
  // canop.appendChild(link2);

  // const link3 = createTag("li");
  // link3.textContent = "2015";
  // canop.appendChild(link3);

  //  create paragraph and append to article
  const p = createTag("p");
  p.textContent = projects[index].p;
  article.appendChild(p);

  //  create languge div ul
  const langDiv = createTag("ul");
  langDiv.classList.add(...projects[index].liFormat);
  article.appendChild(langDiv);

  //  create languge div links
  const stackList = createTag("ul");
  stackList.classList.add("flex");
  langDiv.appendChild(stackList);

  for (let i = 0; i < projects[index].stacks.length; i++) {
    const listItem = createTag("li");
    listItem.classList.add("canopy");
    listItem.textContent = projects[index].stacks[i];
    stackList.appendChild(listItem);
  }

  // const link4 = createTag("li");
  // link4.textContent = "html";
  // langDiv.appendChild(link4);

  // const link5 = createTag("li");
  // link5.textContent = "css";
  // langDiv.appendChild(link5);

  // const link6 = createTag("li");
  // link6.textContent = "javascript";
  // langDiv.appendChild(link6);

  //  create a button
  const button = createTag("button");
  button.type = "submit";
  button.name = index;
  button.textContent = "See Project";
  article.appendChild(button);
  cards.appendChild(card);
}

// Iterate createCard function through the lists of projects
for (let i = 0; i < projects.length; i += 1) {
  createCard(i);
}

const projectBtns = document.querySelectorAll(".content-frame  button");

const modalWindow = createTag("div");
modalWindow.classList.add("modal-window");
const modalHeader = createTag("div");
modalHeader.classList.add("modal-header");
const innerModalHeader = createTag("div");
innerModalHeader.classList.add("inner-modal-header");

//  cretae the buttton here
const modalBtn = createTag("button");
modalBtn.classList.add("modal-button");
modalBtn.type = "button";
modalBtn.innerHTML = "&times;";
const modalBody = createTag("div");
modalBody.classList.add("modal-body");

close.addEventListener("click", () => {
  nav.classList.add("hide");
  identityBox2.classList.add("active");
  identityBox2.classList.remove("hide");
});

document.addEventListener("DOMContentLoaded", function () {
  var identityBox = document.querySelector(".identity-box");
  identityBox.classList.add("active");
});

hamburger.addEventListener("click", () => {
  nav.classList.remove("hide");
  identityBox2.classList.add("hide");
});

Array.from(navLinks).forEach((navlink) =>
  navlink.addEventListener("click", () => {
    nav.classList.add("hide");
    identityBox2.classList.remove("hide");
  })
);

//  FORM SUBMISSION VALIDATION
const formContainer = document.getElementById("form");
formContainer.addEventListener("submit", (event) => {
  const mailInput = document.getElementById("email");
  const messageError = document.querySelector(".error-message");
  if (mailInput.value === mailInput.value.toLowerCase()) {
    messageError.textContent = "";
  } else {
    event.preventDefault();
    messageError.innerHTML =
      "*email must be in lower case <br> * form not sent";
  }
});

//  Create input variables
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userMessage = document.getElementById("message");

// Object to store user data
const userData = {
  nameInput: userName,
  emailInput: userEmail,
  messageInput: userMessage,
};

// Store data using localStorage
function storeData() {
  userData.nameInput = userName.value;
  userData.emailInput = userEmail.value;
  userData.messageInput = userMessage.value;
  localStorage.setItem("userData", JSON.stringify(userData));
}

// call storeData at every event
userName.addEventListener("keyup", storeData);
userEmail.addEventListener("keyup", storeData);
userMessage.addEventListener("keyup", storeData);

// Check for info in local-storage
const savedUserData = localStorage.getItem("userData");
document.getElementById("name").value = JSON.parse(savedUserData).nameInput;
document.getElementById("email").value = JSON.parse(savedUserData).emailInput;
document.getElementById("message").value =
  JSON.parse(savedUserData).messageInput;

Array.from(projectBtns).forEach((projectBtn) =>
  projectBtn.addEventListener("click", (e) => {
    const project = projects[+e.target.name];
    modalWindow.appendChild(modalHeader);
    modalWindow.appendChild(modalBody);
    docBody.appendChild(modalWindow);
    const modalTitle = createTag("h1");
    modalTitle.classList.add("font");
    modalTitle.classList.add("modal-h1");
    modalTitle.textContent = project.name;
    innerModalHeader.appendChild(modalTitle);
    modalHeader.appendChild(innerModalHeader);
    modalHeader.appendChild(modalBtn);

    const taglineDiv = createTag("div");
    taglineDiv.classList.add("tagline");
    const ul = createTag("ul");
    const li1 = createTag("li");
    li1.classList.add("title");
    const li2 = createTag("li");
    li2.classList.add("bg-dot");
    const li3 = createTag("li");
    li3.classList.add("bg-dot");
    li1.appendChild(
      createTagWithAttribute("a", ["src", "#", project.tagline[0]])
    );
    li2.appendChild(
      createTagWithAttribute("a", ["scr", "#", project.tagline[1]])
    );
    li3.appendChild(
      createTagWithAttribute("a", ["src", "#", project.tagline[2]])
    );
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    taglineDiv.appendChild(ul);
    modalBody.appendChild(taglineDiv);
    const imageDiv = createTag("div");
    imageDiv.classList.add("modal-img");

    const imgTag = createTagWithAttributeOnly("img", [
      "src",
      window.innerWidth >= 768
        ? project.featuredImage
        : project.featuredImagetiny,
    ]);
    console.log("featuredImage: ", project.featuredImage);
    console.log("featuredImagetiny: ", project.featuredImagetiny);
    imageDiv.appendChild(imgTag);
    modalBody.appendChild(imageDiv);
    const lowerContentDiv = createTag("div");
    lowerContentDiv.classList.add("lower-content");
    modalBody.appendChild(lowerContentDiv);

    //  create the modal paragraph
    const paragraph = createTag("p");
    paragraph.textContent = project.description;
    paragraph.classList.add("description");
    lowerContentDiv.appendChild(paragraph);
    const asideContentDiv = createTag("div");
    asideContentDiv.classList.add("modal-aside");

    //  create the modal paragraph
    const techDiv = createTag("div");
    techDiv.classList.add("technologies");
    const ul2 = createTag("ul");
    ul2.classList.add("tech-list");
    const li4 = createTag("li");
    li4.classList.add("tech-item");
    const li5 = createTag("li");
    li5.classList.add("tech-item");
    const li6 = createTag("li");
    li6.classList.add("tech-item");
    li4.appendChild(
      createTagWithAttribute("a", ["src", "#", project.technologies[0]])
    );
    li5.appendChild(
      createTagWithAttribute("a", ["src", "#", project.technologies[1]])
    );
    li6.appendChild(
      createTagWithAttribute("a", ["src", "#", project.technologies[2]])
    );
    ul2.appendChild(li4);
    ul2.appendChild(li5);
    ul2.appendChild(li6);
    techDiv.appendChild(ul2);
    asideContentDiv.appendChild(techDiv);

    //  add see source & live links
    const extDiv = createTag("div");
    extDiv.classList.add("ext-div");
    const ul3 = createTag("ul");
    ul3.classList.add("ext-list");
    const li7 = createTag("li");
    li7.classList.add("ext-item", "live");
    const li8 = createTag("li");
    li8.classList.add("ext-item", "source");

    const liveLink = createTagWithAttribute("a", [
      "href",
      project.live,
      "See live",
    ]);
    liveLink.setAttribute("target", "_blank");
    li7.appendChild(liveLink);

    const sourceLink = createTagWithAttribute("a", [
      "href",
      project.source,
      "See Source",
    ]);
    sourceLink.setAttribute("target", "_blank");
    li8.appendChild(sourceLink);

    ul3.appendChild(li7);
    ul3.appendChild(li8);
    extDiv.appendChild(ul3);
    asideContentDiv.appendChild(extDiv);
    lowerContentDiv.appendChild(asideContentDiv);

    //  class additions and removals
    docBody.classList.add("still");
    overlay.classList.add("active");
    caravan.classList.add("blur-effect");
    modalWindow.classList.remove("close");
  })
);

window.addEventListener("load", () => {
  overlay.classList.remove("active");
  modalWindow.classList.add("close");
  caravan.classList.remove("blur-effect");
  docBody.classList.remove("still");
});

modalBtn.addEventListener("click", () => {
  modalWindow.classList.add("close");
  overlay.classList.remove("active");
  caravan.classList.remove("blur-effect");
  docBody.classList.remove("still");
  innerModalHeader.innerHTML = "";
  modalBody.innerHTML = "";
});

// Languages, framework and skils dropdown
const nextElements = document.querySelectorAll(".next");

nextElements.forEach((nextElement) => {
  const moreElement = nextElement.querySelector(".more");
  const content = nextElement.nextElementSibling;
  nextElement.addEventListener("click", () => {
    content.classList.toggle("hide");
    moreElement.classList.toggle("more-rotate");
  });
});
