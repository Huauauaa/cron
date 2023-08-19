import { Second } from './second/Second'
import { Cron } from './Cron'
import { Year } from './year/Year'
import { Minute } from './minute/Minute'

const install = () => {
  customElements.define('cron-expression', Cron)
  customElements.define('cron-second', Second)
  customElements.define('cron-minute', Minute)
  customElements.define('cron-year', Year)
}

export default { install }
