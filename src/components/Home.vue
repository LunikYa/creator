<template>
  <div>
    <button @click="goCreate">Create new form</button>
    <button @click="goHome">Home</button>
    
    <router-view/>
  </div>
  
</template>

<script>
import CreateShow from '../components/CreateShow.vue'
export default {

  name: 'home',
  data () {
    return {
      
    }
  },
  components:{
    CreateShow
  },
  methods: {
    goCreate(){
      this.$router.push( {path:'/Create'})
    },
    goHome(){
      this.$router.push( {path:'/'})
    },

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
