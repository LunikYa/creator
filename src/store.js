import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    user: {
      email: 'myemail',
      password: '',
      dblpass: ''
    },
    forms: []
  },
  mutations: {
    addNewForm (state, newval) {
      state.forms.push(newval)
    },
    pullForms(state, newval){
      state.forms.push((JSON.parse(newval)))
    }
  },
  actions: {
    // pushFormsToLocalStorage (context, obj) {
    //   localStorage.setItem('arrayOfForms', JSON.stringify(obj))
    // },

    // pullFormsFromLocalStorage (context, nameKey) {
    //   return localStorage.nameKey
    // }
  }
})

// currentPopap:'',
//       bool: false,
//       countRadio: 1,
//       newForm:
//       {
//         title: '',
//         discription: '',
//         questions: [{question: '', options: [], type: this.currentPopap}]
//         {
//           str: [], //{questions: '', options: ['','']}
//           radio: [],
//           select: []
//         }
//       }
//     }