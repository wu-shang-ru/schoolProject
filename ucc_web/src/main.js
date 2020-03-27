import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import 'bootstrap'; // Import js file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import css file
import BootstrapVue from 'bootstrap-vue'

// fontawesomeIcon
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComment, faUserCircle, faUserFriends, faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//ElementUI
import ElementUI from 'element-ui';
import '../theme/index.css';

Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faComment, faUserCircle, faUserFriends, faBars, faSearch)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
