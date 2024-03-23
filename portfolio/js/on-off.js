function loadParticlesScript() {
    const script = document.createElement('script');
    script.src = 'js/particles.js';
    script.id = 'particles-script';
    document.body.appendChild(script);
  }

  function unloadParticlesScript() {
    const script = document.getElementById('particles-script');
    if (script) {
      script.remove();
    }
  }
  
  function toggleParticles() {
    const button = document.getElementById('toggleParticles');
    button.classList.toggle('active');
  }
  