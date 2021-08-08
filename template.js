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
    const codecontainer = document.createElement('textarea')


    ulExamples.classList.add( "example" );
    ulTest.classList.add( "test" );
    card.classList.add( "card" );
    cardHeader.classList.add( "card_main");
    cardContext.classList.add( "card_content" );
    cardFooter.classList.add( "card_footer" );
    codecontainer.classList.add("js-code")
  
    cardHeader.innerHTML = `
    <div class="card__header">
      <h2>${e.title}</h2>
      <p class="ico">+</p> 
    </div>
    <div class="overview">
      <p>${e.overview}</p>
    </div>
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
      <div class="btn-container">
        <button class="btn" value='${e.id}'>Show Answer</button>
      </div>
    `
    codecontainer.innerHTML = `${e.code}`


    cardContext.appendChild(ulExamples)
    cardContext.innerHTML += '<h3>Test</h3>'
    cardContext.appendChild(ulTest)
    cardContext.appendChild(cardFooter)
    cardContext.appendChild(codecontainer)
    card.appendChild(cardHeader)
    card.appendChild(cardContext)
    cardContainer.appendChild(card)
  })
}
