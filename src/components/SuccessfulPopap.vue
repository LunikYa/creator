<template>

  <div class="conteiner">
    Congratulation new form added to you list
    <button class="button-back" @click="goHome">BACK</button>
  </div>

 

</template>

<script>
// import CreateShow from '../components/CreateShow.vue'

export default {
  name: 'SuccessfulPopap',
  props: ['error'],
  data () {
    return {
     
    }
  },
  methods:{
    goHome(){
      this.$router.push( {path:'/'})
    }
  },
 
  components:{
    // CreateShow
  },
}
</script>

<style lang="scss" scoped>
  @import './mixins.scss';

  .conteiner{
    width: 300px;
    height: 300px;
    background-color: $main-blue;
    color: white;

  }

  .button-back{
    width: 150px;
    height: 40px;
    color: white;
    background-color: $main-blue;
    border: none;
    cursor: pointer;
    opacity: 0.8;
    margin-left: 5px;
    margin: 40px 0px 0px 70px;
  }
</style>
