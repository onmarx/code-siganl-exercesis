// Import stylesheets
import './style.css';
import {drawCards} from './template.js'

drawCards()

const card = document.querySelectorAll('.card__header')
const arryCards = [...card]

arryCards.forEach(data => data.addEventListener('click', handlerCard))


function handlerCard () {
  const context = this.parentNode
    .getElementsByClassName('card_content')
  const ico = this.getElementsByClassName('ico')[0]
  context[0].classList.toggle('active')
  const boolValue = ico.classList.toggle('active')
  this.classList.toggle('active')
  handlerIco(ico, boolValue)
}

function handlerIco (ico, bool) {
  bool ? ico.innerHTML = '─' : ico.innerHTML = '+'
}