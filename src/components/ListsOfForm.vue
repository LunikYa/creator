<template>
  <div>
  <div v-for="(item, index) in getArr">
  {{item.title}}
  </div>
  </div>
</template>

<script>
export default {
  name: 'ListsOfForm',
  data () {
    return {
      
    }
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
