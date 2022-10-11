const toglle= document.getElementById('toogle');
const flexy = document.getElementById('flexy');

toogle.addEventListener('change', (e) => {
    flexy.classList.toggle('show-monthly');
});
