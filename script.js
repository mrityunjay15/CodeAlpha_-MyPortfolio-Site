AOS.init({
  duration: 800,
  once: false
});


const texts = ["FULL STACK DEVELOPER", "SOFTWARE ENGINEER", "JAVA ENTHUSIAST"];
let count = 0, index = 0, currentText = "", letter = "";

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing-text").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 100);
  }
})();

// Back to Top button

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;
const icon = themeToggle.querySelector("i");


//dark/light mode function
function toggleTheme() {
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");

  // Icon change with fade

  icon.classList.remove("fa-sun", "fa-moon");
  icon.style.opacity = 0;
  setTimeout(() => {
    icon.classList.add(isDark ? "fa-moon" : "fa-sun");
    icon.style.opacity = 1;
  }, 200);
}

themeToggle.addEventListener("click", toggleTheme);

document.querySelectorAll('.fill').forEach(fill => {
  const width = fill.style.width;
  fill.style.width = '0';  
  setTimeout(() => {
    fill.style.transition = 'width 1s ease-in-out';
    fill.style.width = width;
  }, 100);   
});


const aboutText = `Hi! I'm Mritunjay Prajapati, a passionate Full Stack Developer who loves 
creating sleek, responsive, and impactful web applications. I specialize in 
frontend development using HTML, CSS, JavaScript, React.js, and Tailwind CSS,AOS, 
and I have backend expertise in Java, Spring Boot, REST APIs, web services, 
and MySQL. With a solid foundation in Java and Data Structures & Algorithms. 
I have built multiple projects including a Calculator, Random Password Generator, a To-Do List App, 
and Responsive Image Gallery.
I am continuously learning new technologies and strive to develop applications that solve real-world problems.`;

function typeWriter(text, elementId, speed = 15) {
  let index = 0;
  const element = document.getElementById(elementId);
  element.innerHTML = "";
  function type() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }
  type();
}

// ABOUT ME BUTTON TOGGLE 
function toggleAboutMe() {
  const about = document.querySelector('.about-container');
  const icon = document.getElementById('folderIcon');

  if (about.style.display === 'block') {
    about.style.display = 'none';
    icon.classList.remove('fa-folder-open');
    icon.classList.add('fa-folder');
  } else {
    about.style.display = 'block';
    icon.classList.remove('fa-folder');
    icon.classList.add('fa-folder-open');
    typeWriter(aboutText, 'typed-about');
  }
}

// DATE AND TIME

function updateTimestamp() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-IN', { hour12: false });
  const date = now.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
  document.getElementById("timestamp").textContent = `${date} | ${time} `;
}

updateTimestamp();    
setInterval(updateTimestamp, 1000);  // Update every second


let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");
const resumeBtn = document.getElementById("resumeBtn");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;


  // Navbar hide/show

  if (currentScrollY > lastScrollY) {
    navbar.classList.add("hide");
    resumeBtn.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
    resumeBtn.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
});

document.querySelectorAll(".read-more-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".project-card"); 
    const desc = card.querySelector(".project-desc");

    desc.classList.toggle("expanded");
    btn.textContent = desc.classList.contains("expanded")
      ? "Read Less"
      : "Read More";
  });
});