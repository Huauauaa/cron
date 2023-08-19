import template from './Cron.html?raw'
import styles from './Cron.scss?inline'
import { addStyle } from './util'

export class Cron extends HTMLElement {
  private _type = ''

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  get activeType() {
    return this._type
  }

  set activeType(type: string) {
    const activeElement = this.shadowRoot.querySelector(
      `input[value="${this._type}"]`,
    )
    activeElement?.parentElement.classList.remove('active')

    this._type = type

    const content = this.shadowRoot.querySelector('.content')
    content.innerHTML = `<cron-${type}></cron-${type}>`

    const target = this.shadowRoot.querySelector(`input[value="${type}"]`)
    target.parentElement.classList.add('active')
  }

  connectedCallback() {
    this.addHTML()
    addStyle(this, styles)
    this.activeType = 'year'
  }

  addHTML() {
    const node = new DOMParser().parseFromString(template, 'text/html').body
      .firstElementChild
    this.shadowRoot!.appendChild(node)

    node
      .querySelector('form[data-el="type"]')
      .addEventListener('change', (e: any) => {
        const type = e.target.value
        this.activeType = type
      })
  }
}
