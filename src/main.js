import { createApp } from 'vue'
import './style.scss'
import App from '@/App.vue'
import router from '@/router'

import TwoColumn from '@/components/TwoColumn.vue'
import ThreeColumn from '@/components/ThreeColumn.vue'

/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* add some free styles */
import { faHotel } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

/* add each imported icon to the library */
library.add(faHotel, faUtensils)

export default {
 props: [
  'threeColLeft',
  'threeColMiddle',
  'threeColRight',
  'twoColLeft',
  'twoColRight',

 ]
}

createApp(App)
 .use(router)
 .component(TwoColumn, ThreeColumn)
 .mount('#app')


