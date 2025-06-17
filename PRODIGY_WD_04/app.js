document.addEventListener('DOMContentLoaded', function() {
  // Resume button
  const resumeBtn = document.querySelector('.custom-btn[download]');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.open('https://raw.githubusercontent.com/SooryaDevil/PRODIGY_WD_04/main/PRODIGY_WD_04/Soorya%20Dev-%20resume.pdf', '_blank');
    });
  }

  // Github button
  const githubBtn = document.querySelector('.custom-btn[target="_blank"]');
  if (githubBtn) {
    githubBtn.setAttribute('href', 'https://github.com/SooryaDevil');
  }
});
