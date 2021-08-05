import {data} from './datas.js'

export function drawCards () {
  const cardContainer = document.querySelector('.cards_container')

  data.forEach(e => {
    const card = document.createElement('div');
    const cardHeader = document.createElement('div');
    const cardContext = document.createElement('div');
    const cardFooter = document.createElement('div');
    const ulExamples = document.createElement('ul')
    const ulTest = document.createElement('ul')


    ulExamples.classList.add( "example" );
    ulTest.classList.add( "test" );

    card.classList.add( "card" );
    cardHeader.classList.add( "card__header");
    cardContext.classList.add( "card_content" );
    cardFooter.classList.add( "card_footer" );


    cardHeader.innerHTML = `
    <h2>${e.title}</h2>
    <p class="ico">+</p>
    `

    cardContext.innerHTML = `
    <p>${e.context}</p>
    <h3>Example:</h3>
  `
    e.examples.forEach(example => {
      ulExamples.innerHTML += `
      <li>${example}</li>
      `
    })

    e.test.forEach(example => {
      ulTest.innerHTML += `
      <li>${example}</li>
      `
    })

    cardFooter.innerHTML = `
      <div class="btn-left">
        <button class="btn">Show Answer</button>
      </div>
    `

    cardContext.appendChild(ulExamples)
    cardContext.innerHTML += '<h3>Test</h3>'
    cardContext.appendChild(ulTest)
    cardContext.appendChild(cardFooter)
    card.appendChild(cardHeader)
    card.appendChild(cardContext)
    cardContainer.appendChild(card)
  })
}
