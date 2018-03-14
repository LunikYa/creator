
import Vue    from 'vue'
import App    from './App'
import router from './router'
import store  from './store.js'

 var config = {
    apiKey:             "AIzaSyBFpDX6KcnAXV2bpfW_QZZ4zu-q7P6PHMk",
    authDomain:         "creatorforms.firebaseapp.com",
    databaseURL:        "https://creatorforms.firebaseio.com",
    projectId:          "creatorforms",
    storageBucket:      "",
    messagingSenderId:  "809579668298"
  };

  firebase.initializeApp(config);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
