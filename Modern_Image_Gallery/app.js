const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 1;

// Destructuring in vars
// const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];
// arrow function way
// imgs.forEach(img => img.addEventListener('click', e => (current.src = e.target.src)));


// function way
imgs.forEach(img => img.addEventListener('click', thumbs));

function thumbs(e) {
  
  current.src = e.target.src;
  // Add fade in class
  current.classList.add('fade-in');

  // Set timeout remove fade-in class
  setTimeout(() => current.classList.remove('fade-in'), 400);

  console.log(current);
}

