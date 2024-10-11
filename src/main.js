import { createApp } from 'vue'
import './style.scss'
import App from '@/App.vue'
import router from '@/router'

/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* add some free styles */
import { faHotel } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

/* add each imported icon to the library */
library.add(faHotel, faUtensils)

createApp(App)
 .use(router)
 .mount('#app')


