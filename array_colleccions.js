const catalogo = [];

const form = document.querySelector('#formJoc');
const titulo = document.querySelector('#titulo');
const plataforma = document.querySelector('#plataforma');
const any = document.querySelector('#any');
const preu = document.querySelector('#preu');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  catalogo.push({
    titol: titulo.value.trim(),
    plataforma: plataforma.value.trim(),
    any: Number(any.value),
    preu: Number(preu.value)
  });

  form.reset();
  console.log(catalogo);
});
