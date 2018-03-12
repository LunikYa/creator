import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// var usersRef = firebase.database()
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
      state.forms = [];
      for(let key in newval){
        state.forms.push(newval[key])
      }
    },
    
  },
  actions: {
    pushFormsToData(context, obj) {
      // localStorage.setItem('arrayOfForms', JSON.stringify(obj))
       firebase.database().ref('forms/' + obj.title+obj.discription.length).set({
        title: obj.title,
        discription: obj.discription,
        questions: obj.questions
      }).then(resolve =>{
        console.log("SDsdsdsds");
       firebase.database().ref('forms/').on('value', function(snapshot){
        context.commit('addNewForm', snapshot.val())
       })
        
      })
    },
    pullForms(context, newval){
      firebase.database().ref('forms/').on('value', function(snapshot){
        console.log(snapshot.val());
        context.commit('addNewForm', snapshot.val())
    })
  }
  }
    // pullFormsFromLocalStorage (context, nameKey) {
    //   return localStorage.nameKey
    // }
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