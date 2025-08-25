// Theme toggle
const root=document.documentElement,themeBtn=document.getElementById('themeToggle');
if(localStorage.getItem('theme')) root.setAttribute('data-theme',localStorage.getItem('theme'));
themeBtn.addEventListener('click',()=>{
  const t=root.getAttribute('data-theme')==='dark'?'light':'dark';
  root.setAttribute('data-theme',t);
  localStorage.setItem('theme',t);
});

// Menu toggle
const menu=document.getElementById('menuToggle'),nav=document.getElementById('navLinks');
menu.addEventListener('click',()=>{nav.classList.toggle('show');});

// Reveal on scroll
const els=document.querySelectorAll('.reveal');
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
},{threshold:0.2});
els.forEach(el=>io.observe(el));
