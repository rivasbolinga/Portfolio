'use script';

const windowModal = document.querySelector('.mobile-nav');
const btnOpenMenu = document.querySelector('.hamburger-icon');
const btnCloseMenu = document.querySelector('.btn-close');
const sectionLink = document.querySelector('.link');

// OPEN AND CLOSE MENU WINDOW
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
    image: '../assets/P1.png',
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
    image: '../assets/P2.png',
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
    image: '../assets/P3.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 4,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: '../assets/P4.png',
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
    image: '../assets/P5.png',
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
    image: '../assets/P6.png',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
];

// Display projects

for (let i = 0; i < projectInfo.length; i++) {
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
  createModal(i);
}
// Create modal
const createModal = (i) => {
  document.getElementById(`${projectInfo[i].id}`).addEventListener('click', () => {
    btnOpenMenu.style.display = 'none';
    modalContainer.style.display = 'flex';
    projectName.innerText = projectInfo[i].name;
    projectImage.src = projectInfo[i].image;
    projectDescription.innerText = projectInfo[i].description;
  });
};
