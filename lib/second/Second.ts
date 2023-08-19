import template from './Second.html?raw'

export class Second extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.addHTML()
  }

  addHTML() {
    const node = new DOMParser().parseFromString(template, 'text/html').body
      .firstElementChild
    this.shadowRoot!.appendChild(node)
  }
}
