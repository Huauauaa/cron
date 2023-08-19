import { AwesomeButton } from './AwesomeButton'

const install = () => {
  customElements.define('awesome-button', AwesomeButton)
}

export default { AwesomeButton, install }
