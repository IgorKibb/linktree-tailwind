const nome = document.querySelector('#nome');
const mostrarRodape = document.querySelector('.invisible');

nome.addEventListener('click', () =>{
  mostrarRodape.classList.remove('invisible')
})
