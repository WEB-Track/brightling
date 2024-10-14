import { createApp } from 'vue'
import './style.scss'
import App from '@/App.vue'
import router from '@/router/index.js'

import TwoColumn from '@/components/TwoColumn.vue'
import ThreeColumn from '@/components/ThreeColumn.vue'

/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* add some free styles */
import { faHotel } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

/* add each imported icon to the library */
library.add(faHotel, faUtensils)

// export default {
//  props: [
//   'threeColLeft: Object',
//   'threeColMiddle: Object',
//   'threeColRight: Object',
//   'twoColLeft: Object',
//   'twoColRight: Object',

//  ]
// }

createApp(App)
 .use(router)
 .component('slot-comp', TwoColumn, ThreeColumn)
 .mount('#app')


