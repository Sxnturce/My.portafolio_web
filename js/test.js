const btnSwitch = document.querySelector("#switche");


btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('darksw');
    btnSwitch.classList.toggle('activesw');
});
iconSun.addEventListener('click', () => {
    document.body.classList.toggle('darksw');
    btnSwitch.classList.toggle('activesw');
});
iconMoon.addEventListener('click', () => {
    document.body.classList.toggle('darksw');
    btnSwitch.classList.toggle('activesw');
});