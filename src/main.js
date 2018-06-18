/* eslint-disable no-console */
import Vue from 'vue'
import App from './App.vue'
import { Version } from 'test-lib3'

console.log(Version)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
