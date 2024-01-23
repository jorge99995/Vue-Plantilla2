
require('./bootstrap');

window.Vue = require('vue').default;

import App from './App.vue'

new Vue({
    render: h => h(App),

  }).$mount('#app')
