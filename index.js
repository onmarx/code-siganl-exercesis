// Import stylesheets
import './style.css';
import { drawCards } from './template.js';

drawCards();

const card = document.querySelectorAll('.card_main');
const btns = document.querySelectorAll('.btn');
const arryCards = [...card];

arryCards.forEach(data => data.addEventListener('click', handlerCard));

// colocar el codigo de la api en un editor de codeMirror
const textareas = new Array(...document.querySelectorAll('.js-code')).forEach(
  textarea => drawCode(textarea)
);

// Evento para mostrar el codigo con las respuesta
[...btns].forEach(btn => btn.addEventListener('click', showCode));


function handlerCard() {
  const content = this.parentNode.getElementsByClassName('card_content');
  const title = this.querySelector('.card__header');
  const ico = this.getElementsByClassName('ico')[0];
  // add || remove classlist
  content[0].classList.toggle('active');
  title.classList.toggle('active');
  const boolValue = ico.classList.toggle('active');
  handlerIco(ico, boolValue);
  // refresh the codeMirror values
  // content[0].querySelector('.CodeMirror').CodeMirror.refresh()
}

function handlerIco(ico, bool) {
  bool ? (ico.innerHTML = '─') : (ico.innerHTML = '+');
}

// styles and configurations for add code on html document
function drawCode(textarea) {
  const editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true,
    tabSize: 4,
    theme: 'material',
    mode: 'javascript',
    readOnly: false,
    matchBrackets: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    extraKeys: { 'Ctrl-Space': 'autocomplete' },
    scrollbarStyle: 'simple'
  });
}
// Obtein the value of de javascrit editor
//console.log(editor.getValue())

// Show the code when the btn has clicked
function showCode() {
  const btnId = this.value;
  const jsanswer = document.querySelectorAll('.CodeMirror');
  jsanswer[btnId].classList.toggle('active');
  jsanswer[btnId].CodeMirror.refresh();
}
