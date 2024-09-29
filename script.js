// Smooth Scroll ke bagian yang diklik di navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Memuat proyek dari JSON dan menampilkannya di halaman (jika menggunakan JSON)
  fetch('projects.json')
    .then(response => response.json())
    .then(data => {
      let projectsSection = document.querySelector('#projects .row');
      data.forEach(project => {
        let projectCard = `
          <div class="col-md-4">
            <div class="card">
              <img src="${project.image}" class="card-img-top" alt="${project.title}" loading="lazy">
              <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <a href="${project.link}" class="btn btn-primary">View More</a>
              </div>
            </div>
          </div>
        `;
        projectsSection.innerHTML += projectCard;
      });
    })
    .catch(error => console.error('Error loading projects:', error));

    // Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  // Initialize AOS (Animate on Scroll)
  AOS.init();
  
  