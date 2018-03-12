<template>
  <!-- <div class="wrapp"> -->
  <div class="conteiner">
    {{error}}
    <button class="button-back" @click="goOk">BACK</button>
  </div>
 <!-- </div> -->

</template>

<script>
// import CreateShow from '../components/CreateShow.vue'

export default {
  name: 'ErrorPopap',
  props: ['error'],
  data () {
    return {
     
    }
  },
  methods:{
    goOk(){
      this.$emit('errorok')
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
    // margin: 0 auto;
    text-align: center;
  }

  .button-back{
    width: 150px;
    height: 40px;
    color: $main-blue;
    background-color: #fff;
    border: none;
    cursor: pointer;
    opacity: 0.8;
    margin: 40px 0px 0px 70px;

  }
</style>
