// Declaração de variáveis
const themeChanger = document.getElementById('themeChanger');
const menuHamb = document.getElementById('HambCheckbox');
const menuHambLabel = document.querySelector('label[for="HambCheckBox"]');
const menuAside = document.querySelector('aside');
const navBar = document.querySelector('nav');
const root = document.documentElement;

// Eventos
document.addEventListener('click', (e) =>  {
    const target = e.target;
    const asideNegArea = menuAside.contains(target);
    console.log(target);
    if(!menuHamb.checked) return;
    if(!menuHamb.contains(target) && !navBar.contains(target) && !menuAside.contains(target)) {
        menuHamb.checked = false;
    };
    console.log('aoba');
});
themeChanger.addEventListener('change', () => {
    if(themeChanger.checked) {
        root.dataset.theme = 'light';
    } else {
        root.dataset.theme = 'dark';
    };
});
