const test = require('ava')
const AEM = require('../')

test('Insert to DOM', t => {
  const element = document.createElement('button')
  element.innerText = 'button-element'
  document.body.appendChild(element)

  t.is(document.querySelector('button'), element)
  t.is(document.querySelector('button').innerText, 'button-element')
})

test('Register component', t => {
  class Button extends AEM.Component {
    init () {
      this.element.innerText = 'button-aem'
    }
  }

  AEM.registerComponent('button', Button)

  t.is(document.querySelector('button').innerText, 'button-aem')
})
