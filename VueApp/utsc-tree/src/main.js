import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'vue-search-select/dist/VueSearchSelect.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebookSquare, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as VueGoogleMaps from 'vue2-google-maps'

library.add(faTwitter, faFacebookSquare, faInstagram, faLinkedinIn)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: '*** GOOGLE API KEY ***',
    libraries: 'places' // necessary for places input
  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
