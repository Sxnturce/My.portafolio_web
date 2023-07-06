const toggle = document.getElementById('#toggleLight');
const body = document.querySelector('body');



toggle.addEventListener('click', function () {
    this.classList('bi-sun-fill');
})


// const temaOscuro = () => {
//     document.querySelector("body").setAttribute("data-bs-theme", "dark");
//     document.querySelector("#d1-icon").setAttribute("class", "bi bi-sun-fill");
// }

// Letras
// const miTexto = document.getElementsByClassName('genesy');

// Agrega una clase al elemento para activar el efecto de temblor
// miTexto.classList.add('temblor');