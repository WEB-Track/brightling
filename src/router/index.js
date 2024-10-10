import { createRouter, createWebHistory } from 'vue-router'

// Page View/
import TheHome from '@/pages/TheHome.vue'
import TheAbout from '@/pages/TheAbout.vue'
import TheContact from '@/pages/TheContact.vue'

// Two Column Components (Home)
import TwoColumn from '@/components/TwoColumn.vue'
import TwoColLeft from '@/components/HomePhotoOne.vue'
import TwoColRight from '@/components/TheHistory.vue'

// Two Column Components (Home)
import ThreeColumn from '@/components/ThreeColumn.vue'
import ThreeColLeft from '@/components/GreatLoction.vue'
import ThreeColMiddle from '@/components/FreeMeals.vue'
import ThreeColRight from '@/components/FitnessRoom.vue'


const routes = [
  {
    path: '/:id', name: 'Home', component: TheHome,
    children: [
      {
        paht: "twocol", name: TwoColumn, component: TwoColumn,
        children: [
          { path: "twocol-left", name: TwoColLeft, component: TwoColLeft },
          { path: "twocol-right", name: TwoColRight, component: TwoColRight },
        ]
      },
      {
        path: "threecol", name: ThreeColumn, component: ThreeColumn,
        children: [
          { path: "threecol-left", name: ThreeColLeft, component: ThreeColLeft },
          { path: "threecol-middle", name: ThreeColMiddle, component: ThreeColMiddle },
          { path: "threecol-right", name: ThreeColRight, component: ThreeColRight },
        ]
      }
    ]
  },
  {
    path: '/about', name: 'About', component: TheAbout
  },
  {
    path: '/contact', name: 'Contact', component: TheContact
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router