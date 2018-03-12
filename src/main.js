// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store.js'

// Vue.config.productionTip = false
 var config = {
    apiKey: "AIzaSyBFpDX6KcnAXV2bpfW_QZZ4zu-q7P6PHMk",
    authDomain: "creatorforms.firebaseapp.com",
    databaseURL: "https://creatorforms.firebaseio.com",
    projectId: "creatorforms",
    storageBucket: "",
    messagingSenderId: "809579668298"
  };
  firebase.initializeApp(config);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
