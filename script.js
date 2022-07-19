const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Image control - dark/light
function imageMode(color) {
  image1.src=`/images/undraw_fish_bowl_uu88_${color}.svg`;
  image2.src=`/images/undraw_solution_mindset_re_57bf_${color}.svg`;
  image3.src=`/images/undraw_speed_test_re_pe1f_${color}.svg`;
}

// Dark mode styles
function darkMode() {
  nav.style.backgroundColor = 'rgb (0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb (255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
  // toggleIcon.children[1].classList.remove('fa-sun');
  // toggleIcon.children[1].classList.add('fa-moon');
  // image1.src=`/images/undraw_fish_bowl_uu88_${color}.svg`;
  // image2.src=`/images/undraw_solution_mindset_re_57bf_${color}.svg`;
  // image3.src=`/images/undraw_speed_test_re_pe1f_${color}.svg`;
  imageMode('dark');

  
}

// Light mode styles
function lightMode() {
  nav.style.backgroundColor = 'rgb (255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb (0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
  // toggleIcon.children[1].classList.remove('fa-moon');
  // toggleIcon.children[1].classList.add('fa-sun');
  // image1.src='/images/undraw_fish_bowl_uu88_light.svg';
  // image2.src='/images/undraw_solution_mindset_re_57bf_light.svg';
  // image3.src='/images/undraw_speed_test_re_pe1f_light.svg';
  imageMode('light');
  
}

// Switch theme dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme','dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme','light');
    lightMode();
  }
  // console.log(event.target.checked);
}

// Event listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme
// const currentTheme = localStorage.getItem('theme');
// if (currentTheme) {
//   document.documentElement.setAttribute('dark-theme',currentTheme);

//   if (currentTheme === 'dark') {
//     toggleSwitch.checekd = true;
//     darkMode();
//   }
// }