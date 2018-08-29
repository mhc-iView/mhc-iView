import Vue from 'vue'
import App from './App.vue'
import iView from 'iView';
import ElementUI from 'element-ui';
import 'iview/dist/styles/iview.css';
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(iView)
Vue.use(ElementUI)
//按需引入iView组件
// Vue.component('Icon', Icon);
// Vue.component('Button', Button);
// Vue.component('Select', Select);
// //iView3.0按需引入的Bug(https://segmentfault.com/a/1190000016009449)
// Vue.prototype.$IVIEW = {};

new Vue({
  el: '#app',
  render: h => h(App)
});
