const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.querySelectorAll('.service-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.service-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.service-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab)?.classList.add('active');
  });
});


const io = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); } });
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
