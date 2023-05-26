import { version } from '../../../../package.json'
import { DateTime } from 'luxon'

export default {
  data () {
    return {
      version: version,
      currentYear: DateTime.now().toFormat('y')
    }
  }
}
