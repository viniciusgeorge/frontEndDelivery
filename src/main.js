import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './routes/route.js'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
