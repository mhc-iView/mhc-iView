import Vue from 'vue'
import App from './App.vue'
import { Icon, Button } from 'iview';
import 'iview/dist/styles/iview.css';

//按需引入iView组件
Vue.component('Icon', Icon);
Vue.component('Button', Button);
//iView3.0按需引入的Bug(https://segmentfault.com/a/1190000016009449)
Vue.prototype.$IVIEW = {};

new Vue({
  el: '#app',
  render: h => h(App)
});
