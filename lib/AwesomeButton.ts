import styles from './AwesomeButton.scss?inline'
import template from './AwesomeButton.html?raw'

export class AwesomeButton extends HTMLElement {
  dom: Element = null

  bar: Bar = null
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })

    this.addStyle()
  }

  connectedCallback() {
    console.log('connectedCallback首次被插入到文档DOM时被调用')
    this.addHTML()
    const type = this.getAttribute('type') || 'default'
    this.dom.classList.add(type)
  }
  disconnectedCallback() {
    console.log('disconnectedCallback当custom element从文档DOM删除时调用')
  }
  adoptedCallback() {
    console.log('adoptedCallback当custom element被移动到新文档时被调用')
  }
  attributeChangedCallback() {
    console.log(
      'attributeChangedCallback当custom element增加、移除或更改自身属性时被调用',
    )
  }

  addStyle() {
    const node = document.createElement('style')
    node.innerHTML = styles
    this.shadowRoot!.appendChild(node)
  }

  addHTML() {
    const node = new DOMParser().parseFromString(template, 'text/html').body
      .firstElementChild
    this.dom = node
    node.addEventListener('click', (e) => {
      e.stopPropagation()
      if (this.onclick) {
        this.onclick(e as MouseEvent)
      } else {
        console.log('inner click')
      }
    })
    this.shadowRoot!.appendChild(node)
  }
}
