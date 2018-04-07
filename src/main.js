// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;

// Initialize Firebase
var config = {
  apiKey: 'DATA-FIREBASE',
  authDomain: 'DATA-FIREBASE',
  databaseURL: 'DATA-FIREBASE',
  projectId: 'DATA-FIREBASE',
  storageBucket: 'DATA-FIREBASE',
  messagingSenderId: 'DATA-FIREBASE'
}

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
