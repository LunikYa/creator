<template>
  <div class="conteiner">
    <p class="bold">Congratulation!</p> 
    <p>form added to you list</p>
    <button class="button-back" @click="goHome">GO HOME</button>
  </div>
</template>

<script>

export default {
  name: 'SuccessfulPopap',
  props: ['error'],
  methods:{
    goHome(){
      this.$router.push( {path:'/'})
    }
  },
}
</script>

<style lang="scss" scoped>
  @import './mixins.scss';

  .conteiner{
    width: 350px;
    height: 350px;
    background: url('../assets/pop-bg.png') top / cover no-repeat;
    color: black;
    font-size: 25px;
    text-align: center;
  }
  .bold{
    font-weight: 900;
  }
  .button-back{
    width: 180px;
    height: 50px;
    border: none;
    background-color: $main-red;
    color: white;
    font-weight: 600;
    font-size: 16px;
    transition: all 1s;
    margin-top: 80px;
    margin-left: 80px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.3);
  }

  .button-back:hover{
    cursor: pointer;
  }
    
</style>
