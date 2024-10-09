import { createRouter, createWebHistory } from 'vue-router'

import TheHome from '@/pages/TheHome.vue'
import TheAbout from '@/pages/TheAbout.vue'
import TheContact from '@/pages/TheContact.vue'

import TwoColumn from '@/components/TwoColumn.vue'
import TwoColLeft from '@/components/HomePhotoOne.vue'
import TwoColRight from '@/components/TheHistory.vue'

import ThreeColumn from '@/components/ThreeColumn.vue'
import ThreeColLeft from '@/components/GreatLoction.vue'
import ThreeColMiddle from '@/components/FreeMeals.vue'
import ThreeColRight from '@/components/FitnessRoom.vue'


const routes = [
 {
  path: '/:id', name: 'Home', component: TheHome, children: [
   {
    paht: "twocol", component: TwoColumn,
    children: [
     { path: "twocol-left", component: TwoColLeft },
     { path: "twocol-right", component: TwoColRight },
    ]

   },
   {
    path: "threecol", component: ThreeColumn,
    children: [
     { path: "threecol-left", component: ThreeColLeft },
     { path: "threecol-middle", component: ThreeColMiddle },
     { path: "threecol-right", component: ThreeColRight },
    ]
   }
  ]

 },
 {
  path: '/about', name: 'About', component: TheAbout,
  // children: [
  //  {
  //   path: 'threecol', component: ThreeColumn,
  //   children: [
  //    { path: 'threecol-left', component: GreatLocation },
  //    { path: 'threecol-middle', component: FreeMeals },
  //    { path: 'threecol-right', component: FitnessRoom },
  //   ]
  //  }
  // ]
 },
 {
  path: '/contact', name: 'Contact', component: TheContact,
  // children: [
  //  {
  //   path: 'twocol', component: TwoColumn,
  //   children: [
  //    { path: 'homephoto', component: HomePhotoOne },
  //    { path: 'thehistory', component: TheHistory },
  //   ]
 }
]


const router = createRouter({
 history: createWebHistory(),
 routes
})
export default router