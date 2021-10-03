import { createSSRApp, createApp, h } from 'vue'
import App from './App.vue'
import router from './router';
import { store } from './store'

import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Carousel from 'primevue/carousel'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

export default function () {
  const isSSR = typeof window === 'undefined'
  const rootComponent = {
    render: () => h(App),
    components: { App },
  }
const app = (isSSR ? createSSRApp : createApp)(rootComponent)
  app
    .use(router)
    .use(store)
	.use(PrimeVue)
	
    .component('InputText', InputText)
    .component('Button', Button)
    .component('Carousel', Carousel)	
  return {
    app,
    router,
    store,
	PrimeVue
  }
}

/*
import { createApp } from 'vue'
import App from './App.vue'

import './registerServiceWorker'
import router from './router'
import store from './store'

import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Carousel from 'primevue/carousel'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const isSSR = typeof window === 'undefined'
const app = (isSSR ? createSSRApp : createApp)(rootComponent)

// const app = createApp(App)
app
  .use(store)
  .use(router)
  .use(PrimeVue)

  .component('InputText', InputText)
  .component('Button', Button)
  .component('Carousel', Carousel)
  
  .mount('#app')
*/