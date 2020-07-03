import VueCompositionApi from '@vue/composition-api'
import PortalVue from 'portal-vue'
import '@/assets/css/tailwind.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { useSupercharge } from '@/composables'
import ClickOutside from 'vue-click-outside'
// import VueAnalytics from 'vue-analytics';

// Vue.use(VueAnalytics, {
//     id: 'UA-171584767-1',
//     router
// })

Vue.directive('on-click-outside', ClickOutside)

Vue.config.productionTip = false
Vue.use(PortalVue)
Vue.use(VueCompositionApi)

useSupercharge()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
