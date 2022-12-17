'use script';

const windowModal = document.querySelector('.mobile-nav');
const btnOpenMenu = document.querySelector('.hamburger-icon');
const btnCloseMenu = document.querySelector('.btn-close');
const modalContainer = document.querySelector('.modal-container');
const sectionLink = document.querySelector('.link');
const containerProject = document.querySelector('.projects-cards');
const projectName = document.querySelector('.project-title');
const projectImage = document.querySelector('.project-image');
const projectDescription = document.querySelector('.project-description');
const technoTags = document.querySelector('.card-tech-modal');

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
    id: 1,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './assets/P1.png',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript',
    ],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 2,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './assets/P2.png',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 3,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './assets/P3.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 4,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './assets/P4.png',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 5,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './assets/P5.png',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 6,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './assets/P6.png',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
];

// Create modal
const displayModal = (i) => {
  document.getElementById(`${projectInfo[i].id}`).addEventListener('click', () => {
    btnOpenMenu.style.display = 'none';
    modalContainer.style.display = 'flex';
    projectName.innerText = projectInfo[i].name;
    projectImage.src = projectInfo[i].image;
    projectDescription.innerText = projectInfo[i].description;
    technoTags.innerHTML = `
    <li>${projectInfo[i].technologies[0]}</li>
    <li>${projectInfo[i].technologies[1]}</li>
    <li>${projectInfo[i].technologies[2]}</li>`;
  });
};

// Display projects
projectInfo.forEach((e, i) => {
  const projectCard = document.createElement('div');
  projectCard.className = `project-card-${projectInfo[i].id}`;
  const html = `
    <div class="project-wrapper-${projectInfo[i].id}">
    <img id=project-pic class="pict project-picture-${projectInfo[i].id}" src = ${projectInfo[i].image} alt=${projectInfo[i].name}>
    <div class="project-card-details-${projectInfo[i].id}" id=project-card-details>
      <h4 class="project-name">${projectInfo[i].name}</h4>
      <ul class="card-tech">
      <li>${projectInfo[i].technologies[0]}</li>
       <li>${projectInfo[i].technologies[1]}</li>
       <li>${projectInfo[i].technologies[2]}</li>
      </ul>
      <button class="btn-see-project" id="${projectInfo[i].id}">See this project &#10132</button>
    </div>
    </div>`;
  containerProject.insertAdjacentHTML('afterbegin', html);
  displayModal(i);
});

// close modal
const btnCloseModal = document.querySelector('.close-modal');
const closeModal = function () {
  modalContainer.style.display = 'none';
  btnOpenMenu.style.display = 'block';
};
btnCloseModal.addEventListener('click', closeModal);

//navbar
const navContainer = document.querySelector('.nav-links');
const navLink = document.querySelector('.navbar-link');

navContainer.addEventListener('click', function (e){
  e.preventDefault();
  if(e.target.classList.contains('nav-link')){
    const id = e.target.getAttribute('href');
   document.querySelector(id).scrollIntoView({behavior: "smooth"})
  }
})

// form validation

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

// local storage

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
