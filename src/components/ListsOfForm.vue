<template>
  <div>
  <div v-for="item in this.$root.$store.state.forms">
      <CreateShow :form="item"/>
    </div>
  </div>
</template>

<script>
import CreateShow from '../components/CreateShow.vue'
export default {
  name: 'ListsOfForm',
  data () {
    return {
      
    }
  },
  components:{
    CreateShow
  },
  methods: {
    // goCreate(){
    //   this.$router.push( {path:'/Create'})
    // },
    // goHome(){
    //   this.$router.push( {path:'/'})
    // },

  },
  computed:{
    getArr(){
      return this.$root.$store.state.forms
    }
  },
  created: function(){
    console.log(this.$root.$store.state.forms);
    this.$root.$store.dispatch('pullForms')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button{
    font-size: 26px;
    line-height: 23px;
    color: white;
    padding: 20px 40px;
    border: 3px solid white;
    border-radius: 10px;
    cursor: pointer;
    background-color: /*transparent*/#000;
    margin-bottom: 30px;
  }
</style>
