// Import stylesheets
import './style.css';
import {drawCards} from './template.js'

drawCards()

const card = document.querySelectorAll('.card_main')
const btns = document.querySelectorAll('.btn')
const arryCards = [...card]

arryCards.forEach(data => data.addEventListener('click', handlerCard))

const textareas = new Array(...document.querySelectorAll(".js-code"))
  .forEach(textarea => drawCode(textarea));

[...btns].forEach(btn => btn.addEventListener('click', showCode))


function handlerCard () {
  const context = this.parentNode
    .getElementsByClassName('card_content')

    const ico = this.getElementsByClassName('ico')[0]

    context[0].classList.toggle('active')

    const boolValue = ico.classList.toggle('active')

    handlerIco(ico, boolValue)
    // refresh the codeMirror values 
    context[0].querySelector('.CodeMirror').CodeMirror.refresh()
}

function handlerIco (ico, bool) {
  bool ? ico.innerHTML = '─' : ico.innerHTML = '+'
}

function drawCode (textarea) {
  const editor = CodeMirror.fromTextArea(textarea,{
    lineNumbers:true,
    tabSize:4,
    theme: 'material',
    mode:"javascript",
    readOnly: true,
  });
}

function showCode () { 
  const btnId = this.value
  const jsanswer = document.querySelectorAll('.CodeMirror')
  jsanswer[btnId].classList.toggle('active')
}
