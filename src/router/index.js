import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/Home.vue'
import Form from '../views/pages/Form.vue'
import Confirm from '../views/pages/Confirm.vue'
import Success from '../views/pages/Success.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/layouts/BaseLayout.vue'),
      children: [
        {
          path: "",
          name: 'Home',
          component: Home
        }
      ]
    },
    {
      path: '/form',
      component: () => import('../views/layouts/BaseLayout.vue'),
      children: [
        {
          path: "",
          name: 'Form',
          component: Form
        },
        {
          path: "confirm",
          name: 'Confirm',
          component: Confirm
        },
        {
          path: "success",
          name: 'Success',
          component: Success
        }
      ]
    }
  ]
})

export default router
