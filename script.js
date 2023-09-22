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
    name: "Sage: SAAS AI Platform",
    highlights: ["OPEN & REPLICATE AI", "Next.js 13", "2023"],
    stacks: ["Next.js", "Tailwind", "Prisma-DB"],
    tagline: ["GPT-4 AI", "Next.js Dev", "2023"],
    p: "Experience the future with an AI SaaS platform featuring five powerful AI tools. Seamlessly navigate and enjoy a user-centric design. Effortless integration for smooth billing. Our platform empowers your journey. Embrace the AI-driven era of 2023.",
    description:
      "Discover the future through an AI SaaS platform boasting an array of five robust AI tools, each designed to empower your journey. Effortlessly explore and delight in our user-centered design, offering a seamless and intuitive experience. Streamline your billing process with easy integration, ensuring a smooth financial operation. Our platform is your gateway to embracing the AI-driven landscape of 2023 and beyond.",
    featuredImagetiny: "img/sage1.png",
    featuredImage: "img/sage1.png",
    liFormat: ["flex", "tool-content"],
    technologies: ["Stripe", "Crisp", "PlanetScale"],
    live: "https://saas-ai-platform-2qqyp5ra0-dialite.vercel.app/",
    source: "https://github.com/dialite/Saas__AI_Platform.git",
  },
  {
    cardClass: ["grid-item", "mobile-switch"],
    cardImg: ["content-frame"],
    imgDetails: ["desktop-image-2", "frame-case-b", "column-two"],
    articleClassList: ["desktop-content", "column-one"],
    h2TitleClass: ["content"],
    name: "Experience OpenAI GPT-4 URL Summarizer",
    highlights: ["OpenAI", "Vite Dev", "2023"],
    stacks: ["React", "Redux", "Tailwind"],
    tagline: ["OPEN-AI", "Vite Dev", "2022"],
    p: "Generates article summaries from links or text inputs, leveraging OpenAI's powerful language model. Enhances comprehension and productivity with concise and accurate summaries.",
    description:
      "GPT AI Summarizer with React, Redux, Tailwind CSS, Vite, and OpenAI. Generates article summaries from links or text inputs, leveraging OpenAI's powerful language model. Enhances comprehension and productivity with concise and accurate summaries.",
    featuredImagetiny: "img/sumz.png",
    featuredImage: "img/sumz.png",
    liFormat: ["flex", "tool-content"],
    technologies: ["React", "Redux", "Javascript"],
    live: "https://ai-gpt-4-content-summarizer.netlify.app/",
    source: "https://github.com/dialite/GPT-AI-Summarizer.git",
  },
  {
    cardClass: ["grid-item", "second-desktop-switch", "anime"],
    cardImg: ["content-frame"],
    imgDetails: ["desktop-image-2", "frame-case-b", "column-two"],
    articleClassList: ["desktop-content", "column-one"],
    h2TitleClass: ["content"],
    name: ["Experience OpenAI GPT-4 URL Summarizer"],
    highlights: ["Open-AI", "Vite Dev", "2023"],
    stacks: ["React", "Redux", "Tailwind"],
    tagline: ["OPEN-AI", "Vite Dev", "2022"],
    p: "Generates article summaries from links or text inputs, leveraging OpenAI's powerful language model. Enhances comprehension and productivity with concise and accurate summaries.",
    description:
      "GPT AI Summarizer with React, Redux, Tailwind CSS, Vite, and OpenAI. Generates article summaries from links or text inputs, leveraging OpenAI's powerful language model. Enhances comprehension and productivity with concise and accurate summaries.",
    featuredImagetiny: "img/sumz.png",
    featuredImage: "img/sumz.png",
    liFormat: ["flex", "tool-content"],
    rubyClass: ["ruby"],
    technologies: ["React", "Redux", "Javascript"],
    live: "https://ai-gpt-4-content-summarizer.netlify.app/",
    source: "https://github.com/dialite/GPT-AI-Summarizer.git",
  },
  {
    cardClass: ["grid-item", "mobile-switch"],
    cardImg: ["content-frame"],
    imgDetails: ["desktop-image-3", "frame-case-c", "column-two"],
    articleClassList: ["desktop-content", "column-one"],
    h2TitleClass: ["content"],
    name: "ECOMSTATS: Admin Dashboard",
    highlights: ["MERN", "Material-UI", "2023"],
    stacks: ["MongoDB", "Express", "React", "Node"],
    tagline: ["Data Modelling", "React.js", "2023"],
    p: "Empower your data management with this feature-rich Admin Dashboard, designed for exceptional performance. Experience seamless server-side pagination for efficient data handling and an enhanced user experience.",
    description:
      "Elevate your data management capabilities with this feature-rich Admin Dashboard, meticulously crafted to deliver exceptional performance and functionality. It combines the power of the MERN (MongoDB, Express.js, React, Node.js), Nivo, and Material UI stack, ensuring seamless server-side pagination for efficient data handling while enhancing the overall user experience.",
    featuredImagetiny: "img/dashboard1.png",
    featuredImage: "img/dashboard1.png",
    liFormat: ["flex", "tool-content"],
    technologies: ["Nivo", "MERN", "Material-UI"],
    live: "https://admin-dashboard-jw3x.onrender.com",
    source: "https://github.com/dialite/MERN-Admin-Dashboard.git",
  },
  {
    cardClass: ["grid-item", "second-desktop-switch", "anime"],
    cardImg: ["content-frame"],
    imgDetails: ["desktop-image-3", "frame-case-c", "column-one"],
    articleClassList: ["desktop-content", "column-two"],
    h2TitleClass: ["content"],
    name: "ECOMSTATS: Admin Dashboard",
    highlights: ["MERN", "Material-UI", "2023"],
    stacks: ["MongoDB", "Express", "React", "Node"],
    tagline: ["Data Modelling", "React.js", "2023"],
    p: "Empower your data management with this feature-rich Admin Dashboard, designed for exceptional performance. Experience seamless server-side pagination for efficient data handling and an enhanced user experience.",
    description:
      "Elevate your data management capabilities with this feature-rich Admin Dashboard, meticulously crafted to deliver exceptional performance and functionality. It combines the power of the MERN (MongoDB, Express.js, React, Node.js), Nivo, and Material UI stack, ensuring seamless server-side pagination for efficient data handling while enhancing the overall user experience.",
    featuredImagetiny: "img/dashboard1.png",
    featuredImage: "img/dashboard1.png",
    liFormat: ["flex", "tool-content"],
    rubyClass: ["ruby"],
    technologies: ["Nivo", "MERN", "Material-UI"],
    live: "https://admin-dashboard-jw3x.onrender.com",
    source: "https://github.com/dialite/MERN-Admin-Dashboard.git",
  },

  {
    cardClass: ["grid-item", "mobile-switch"],
    cardImg: ["content-frame"],
    imgDetails: ["desktop-image-4", "frame-case-d", "column-two"],
    articleClassList: ["desktop-content", "column-one"],
    h2TitleClass: ["content"],
    name: "Doctor's Appointment",
    highlights: ["Health", "Full Stack Dev", "2023"],
    stacks: ["React js", "Ruby on Rails", "PostgreSQL"],
    tagline: ["Health", "Full Stack Dev", "2023"],
    p: "Revolutionize your medical practice with our web application – register new doctors, store patient information securely, and schedule appointments effortlessly. Say goodbye to paper-based systems and streamline your operations with ease. Try it now!",
    description:
      "Streamline your medical practice with ease! Our innovative web application allows you to seamlessly register new doctors, securely store patient information, and schedule appointments with just a few clicks. Say goodbye to the hassle of paper-based systems and hello to a more efficient way of managing your medical practice. Try it out today!",
    featuredImage: "img/doctors-app-desk.png",
    featuredImagetiny: "img/doctors-app-mobile-1.png",
    liFormat: ["flex", "tool-content"],
    technologies: ["React js", "Ruby on Rails", "PostgreSQL"],
    live: "https://doctorsfinal.netlify.app/",
    source: "https://github.com/dialite/Doctors-appointment-frontend",
  },
  {
    cardClass: ["grid-item", "second-desktop-switch", "anime"],
    cardImg: ["content-frame"],
    imgDetails: ["desktop-image-4", "frame-case-d", "column-two"],
    articleClassList: ["desktop-content", "column-one"],
    h2TitleClass: ["content"],
    name: "Doctor's Appointment",
    highlights: ["Health", "Full Stack Dev", "2023"],
    stacks: ["React js", "Ruby on Rails", "PostgreSQL"],
    tagline: ["Health", "Full Stack Dev", "2023"],
    p: "Revolutionize your medical practice with our web application – register new doctors, store patient information securely, and schedule appointments effortlessly. Say goodbye to paper-based systems and streamline your operations with ease. Try it now!",
    description:
      "Streamline your medical practice with ease! Our innovative web application allows you to seamlessly register new doctors, securely store patient information, and schedule appointments with just a few clicks. Say goodbye to the hassle of paper-based systems and hello to a more efficient way of managing your medical practice. Try it out today!",
    featuredImage: "img/doctors-app-desk.png",
    featuredImagetiny: "img/doctors-app-mobile-1.png",
    liFormat: ["flex", "tool-content"],
    rubyClass: ["ruby"],
    technologies: ["React", "Redux", "Javascript"],
    live: "https://doctorsfinal.netlify.app/",
    source: "https://github.com/dialite/Doctors-appointment-frontend",
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
  // identityBox2.classList.add("active");
  identityBox2.classList.remove("hide");
});

document.addEventListener("DOMContentLoaded", function () {
  var identityBox2 = document.querySelector(".identity-box");
  identityBox2.classList.add("active");
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
let userData = {
  nameInput: "",
  emailInput: "",
  messageInput: "",
};

// Retrieve data from localStorage
const savedUserData = localStorage.getItem("userData");
if (savedUserData) {
  userData = JSON.parse(savedUserData);
}

// Set input field values from userData
userName.value = userData.nameInput;
userEmail.value = userData.emailInput;
userMessage.value = userData.messageInput;

// Store data using localStorage
function storeData() {
  // Only store non-empty values
  if (userName.value !== "") {
    userData.nameInput = userName.value;
  }
  if (userEmail.value !== "") {
    userData.emailInput = userEmail.value;
  }
  if (userMessage.value !== "") {
    userData.messageInput = userMessage.value;
  }
  localStorage.setItem("userData", JSON.stringify(userData));
}

// Call storeData at every event
userName.addEventListener("keyup", storeData);
userEmail.addEventListener("keyup", storeData);
userMessage.addEventListener("keyup", storeData);

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
