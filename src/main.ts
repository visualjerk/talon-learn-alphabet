import { createApp } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import App from './App.vue'
import './index.css'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./views/Home.vue'),
  },
  {
    path: '/alphabet',
    component: () => import('./views/Alphabet.vue'),
  },
  {
    path: '/session',
    component: () => import('./views/Session.vue'),
  },
  {
    path: '/session-result',
    component: () => import('./views/SessionResult.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')
