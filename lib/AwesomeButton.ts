import styles from './AwesomeButton.scss?inline'
// import styles from './AwesomeButton.less?inline'

export class AwesomeButton extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    const styleNode = document.createElement('style')
    styleNode.innerHTML = styles
    this.shadowRoot!.appendChild(styleNode)
    const button = document.createElement('div')
    button.classList.add('awesome-button')
    const slot = document.createElement('slot')
    button.appendChild(slot)
    this.shadowRoot!.appendChild(button)
  }
}
