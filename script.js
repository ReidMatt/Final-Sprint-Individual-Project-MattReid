document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {title: 'Project 1', description: 'A cool project', image: 'project1.jpg', link: '#'},
  ];

  const projectContainer = document.getElementById('project-container');

  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');

    projectElement.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}">View Project</a>
    `;

    projectContainer.appendChild(projectElement);
  });
    
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(bar => {
    const skillLevel = bar.getAttribute ('data-skill');
    bar.style.width =skillLevel + '&';
  });

  const currentYear = new Date().getFullYear();
  document.getElementById('current-year').textContent = currentYear;
});