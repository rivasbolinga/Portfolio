'use script';

const windowModal = document.querySelector('.mobile-nav');
const btnOpenMenu = document.querySelector('.hamburger-icon');
const btnCloseMenu = document.querySelector('.btn-close');
const modalContainer = document.querySelector('.modal-container');
const sectionLink = document.querySelector('.link');
const containerProject = document.querySelector('.projects-cards');
const overlay = document.querySelector('.overlay');
const btnCollaboration = document.querySelector('.btn-collaboration');
// Open and close MENU window

const openMenu = function () {
  windowModal.classList.remove('hidden');
};
const closeMenu = function () {
  windowModal.classList.add('hidden');
};
btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);
sectionLink.addEventListener('click', closeMenu);

// Create array

const projectInfo = [
  {
    id: 0,
    name: 'Library - Book List',
    description: "Library - Book List is a small library app where you can record, delete and mark as read a list of books that you have read or you want to read. The project is part of The Odin Project's curriculum.",
    image: '../assets/mylibrary.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    liveVersion: 'https://rivasbolinga.github.io/Library/',
    source: 'https://github.com/rivasbolinga/Library',
  },
  {
    id: 1,
    name: 'To Do List',
    description: 'To Do List is a simple application where you can list, remove, edit and mark as complete all the tasks that you have to do.',
    image: './assets/todo1.png',
    technologies: [
      'HTML/CSS',
      'Webpack',
      'JavaScript'],
    liveVersion: 'https://rivasbolinga.github.io/To-Do-App/dist/',
    source: 'https://github.com/rivasbolinga/To-Do-App',
  },
  {
    id: 2,
    name: 'Home for all',
    description: 'Capstone project from Microverse curriculum first module: html, css and JavaScript. It is a dinamic website for an animal rigths conference.',
    image: './assets/homeforall.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript'],
    liveVersion: 'https://rivasbolinga.github.io/Home-For-All/',
    source: 'https://github.com/rivasbolinga/Home-For-All',
  },
  {
    id: 3,
    name: 'Rock Paper Scissors',
    description: 'Simple implementation of Rock Paper Scissors game where you can play in the browser against an AI, This project is from The Odin Project curriculum.',
    image: './assets/rps.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript'],
    liveVersion: 'https://rivasbolinga.github.io/RockPaperScissors/',
    source: 'https://github.com/rivasbolinga/RockPaperScissors',
  },
  {
    id: 4,
    name: 'Tic Tac Toe',
    description: 'The classic game of Tic Tac Toe where you can play on the browser with an oponent.',
    image: './assets/tictactoe.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript'],
    liveVersion: 'https://rivasbolinga.github.io/Tic-Tac-Toe/',
    source: 'https://github.com/rivasbolinga/Tic-Tac-Toe',
  },
  {
    id: 5,
    name: 'Calculadora',
    description: 'Project of a simple calculator from The Odin Project Curriculum using the material I have learned in "fundamentas of Javascript Course". Use of simple functions for the functionality of the calculator.',
    image: './assets/Calculadora.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript'],
    liveVersion: 'https://rivasbolinga.github.io/Calculadora/',
    source: 'https://github.com/rivasbolinga/Calculadora',
  },
];

//  Create modal
const displayModal = (id) => {
  projectInfo.forEach((work) => {
    if ((Number(id)) === work.id) {
      modalContainer.classList.add('active');
      overlay.classList.add('active');
      let html = '';
      html += `
    <button class="close-modal">&times</button>
    <h3 class="project-title">${projectInfo[id].name}</h3>
    <ul class="card-tech-modal">
      <li>${projectInfo[id].technologies[0]}</li>
      <li>${projectInfo[id].technologies[1]}</li>
      <li>${projectInfo[id].technologies[2]}</li>
    </ul>
    <img class="project-image" src="${projectInfo[id].image}">
    <p class="project-description">${projectInfo[id].description}</p>
    <div class="btns-modal">
    <button class="btn-modal seeLive"><a href="${projectInfo[id].liveVersion}">See live
    <i class="fa-regular fa-share-from-square"></i>
    </a></button>
    <button class="btn-modal seeSource"><a href="${projectInfo[id].source}">See source        <i class="fa-brands fa-github"></i></a></button>
    </div>
    <div class="next-prev-proj">
        <button class="prev-btn">
        <i class="fa-solid fa-arrow-left"></i>
        Previous project</button>
        <button class="prev-btn">Next Project
        <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>`;

      modalContainer.innerHTML = html;
    }
  });
  // close modal
  const btnCloseModal = document.querySelector('.close-modal');

  btnCloseModal.addEventListener('click', (e) => {
    e.preventDefault();
    modalContainer.classList.remove('active');
    overlay.classList.remove('active');
  });
};

// Display projects
projectInfo.forEach((work) => {
  const projectCard = document.createElement('div');
  projectCard.className = `project-card-${work.id}`;
  const html = `
    <div class="project-wrapper-${work.id}">
    <img id=project-pic class="pict project-picture-${work.id}" src = ${work.image} alt=${work.name}>
    <div class="project-card-details-${work.id}" id=project-card-details>
      <h4 class="project-name">${work.name}</h4>
      <ul class="card-tech">
      <li>${work.technologies[0]}</li>
       <li>${work.technologies[1]}</li>
       <li>${work.technologies[2]}</li>
      </ul>
      <button class="btn-see-project" id="${work.id}">See this project &#10132</button>
    </div>
    </div>`;
  containerProject.insertAdjacentHTML('afterbegin', html);
});

const btnSee = document.querySelectorAll('.btn-see-project');
btnSee.forEach((btn) => btn.addEventListener('click', (e) => {
  const { id } = e.target;
  displayModal(id);
}));
/// Navbar

const navContainer = document.querySelector('.nav-links');

navContainer.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
// btn collaboration to form section

btnCollaboration.addEventListener('click', (e)=> {
  const id = e.target.getAttribute('href');
  document.querySelector(id).scrollIntoView({behavior:'smooth'});
})
// fade over Navbar

const nav = document.querySelector('.header-menu');

const hoverNav = function (e) {
  if (e.target.classList.contains('nav-link')) {
    const link = e.target;
    const siblings = link.closest('.header-menu').querySelectorAll('.nav-link');

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
  }
};

nav.addEventListener('mouseover', hoverNav.bind(0.5));
nav.addEventListener('mouseout', hoverNav.bind(1));

// sticky header
const navv = document.querySelector('.desk-header');
const navHeight = nav.getBoundingClientRect().height;
const header = document.querySelector('.introduction');

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navv.classList.add('sticky');
  else navv.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
// --Form validation

const errorMessage = document.querySelector('.error-message');
const form = document.getElementById('form-section');
const email = document.getElementById('email');
const emailRegex = /^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z0-9_.]+$/;

form.addEventListener('submit', (e) => {
  if (!emailRegex.test(email.value)) {
    e.preventDefault();
    errorMessage.style.display = 'block';
  }
});

// -- Local Storage

let localData = {
  name: '',
  email: '',
  message: '',
};

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('textarea');

function dataLocalStore() {
  localStorage.setItem('name', JSON.stringify(localData));
}

form.addEventListener('change', () => {
  localData.name = nameInput.value;
  localData.email = emailInput.value;
  localData.message = messageInput.value;
  dataLocalStore();
});

if (JSON.parse(localStorage.getItem('name')) !== null) {
  localData = JSON.parse(localStorage.getItem('name'));
  nameInput.setAttribute('value', localData.name);
  emailInput.setAttribute('value', localData.email);
  messageInput.value = localData.message;
}
