import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    user: {
      email:'myemail',
      password: '',
      dblpass: ''
    },
    currentId: '',
    forms: []
  },

  mutations: {
    addNewForm (state, newval) {
      state.forms = [];
      for(let key in newval){
        state.forms.push(newval[key])
      }
    },
    addCurrentId(state, newval){
      // console.log(newval);
      state.currentId = newval;
      // console.log(state.currentId);
    }    
  },
  actions: {
    pushFormsToData(context, obj) {
      // localStorage.setItem('arrayOfForms', JSON.stringify(obj))
      firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // console.log(user, user.uid);
        console.log(context.currentId)
        context.commit('addCurrentId', user.uid)

      
        console.log(context.currentId);
       firebase.database().ref('users/' + user.uid + '/forms/' + obj.title)
       .set({
          title:       obj.title,
          discription: obj.discription,
          questions:   obj.questions,
          preview:     obj.preview
        })
       .then(resolve =>
       {
          firebase.database().ref('forms/'+ user.uid).on('value', 
            function(snapshot){
              context.commit('addNewForm', snapshot.val())
          })
        })}})
    },
    getCurrentId(context){
      firebase.auth().onAuthStateChanged(function(user) {
      if (user) {

        context.commit('addCurrentId', user.uid)

      }})
    },
    pullForms(context, newval){
      firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
      firebase.database().ref('users/'+ user.uid + '/forms').on('value', 
        function(snapshot){        
          context.commit('addNewForm', snapshot.val())
      })
      }else{
        firebase.database().ref().off()
          alert("Пользователь не зареган")
      }
      })}}
  })

