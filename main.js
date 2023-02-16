// Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnReset = document.querySelector('#btnReset')
const cookie = screen1.querySelector('img')

// Eventos
btnReset.addEventListener('click', switchScreens)
cookie.addEventListener('click', switchScreens)

// Funções Callback

function switchScreens() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}