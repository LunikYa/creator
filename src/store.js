import Vue  from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    user: {
      email:'',
      uid:'',
      forms: []
    },
    forms: []
  },

  mutations: {
    addNewForm (state, newval) {
      state.user.forms = [];
      for(let key in newval){
        state.user.forms.push(newval[key])
      }
    },
    addCurrentUser(state, newUser){
      state.user.email = newUser.email
      state.user.uid = newUser.uid
    }    
  },
  actions: {
    pushFormsToData(context, obj) {

      firebase.auth().onAuthStateChanged(function(user) {

      if (user) {
        console.log(2, user, user.uid);
           firebase.database().ref('users/' + user.uid + '/forms/' + obj.title)
       .set({
          title:       obj.title,
          discription: obj.discription,
          questions:   obj.questions,
          preview:     obj.preview
        })
       .then(resolve =>
       {
          console.log(resolve);
          firebase.database().ref('users/' + 'forms/'+ user.uid).on('value', 
            function(snapshot){
              context.commit('addNewForm', snapshot.val())
          })
        })}})
    },

    pullForms(context, newval){
      firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
         console.log('pullForms', user)
         context.commit('addCurrentUser', user)        
      firebase.database().ref('users/'+ user.uid + '/forms').on('value', 
        function(snapshot){     
          context.commit('addNewForm', snapshot.val())
      })
      }else{
        context.commit('addCurrentUser', {email: '', uid: '', forms: []})
        firebase.database().ref().off()
          alert("Пользователь не зареган")
          router.push({path: '/'})
      }
      })}}
  })


