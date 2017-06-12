class Component {
  constructor (element) {
    if (element) {
      this.element = element
      this.attributes = element.dataset
    }
  }

  // Use the init method in components that inherit from this class so you
  // don't have to call `constructor(element) { super(element); }` manually.
  init () {

  }
}

function registerComponent (selector, ComponentClass) {
  const elements = document.querySelectorAll(selector)

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]
    const component = new ComponentClass(element, element.dataset)

    if (component instanceof Component) {
      component.init()
    }
  }
}

module.exports = {
  registerComponent,
  Component
}
