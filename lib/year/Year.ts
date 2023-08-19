import template from './Year.html?raw'

export class Year extends HTMLElement {
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
