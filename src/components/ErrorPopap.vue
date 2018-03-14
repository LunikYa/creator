<template>
  <div class="conteiner">
    ERROR! <br/><br/>
    {{error}}
    <button class="button-back" @click="goOk">BACK</button>
  </div>
</template>

<script>

export default {
  name: 'ErrorPopap',
  props: ['error'],
  data(){
    return{

    }
  },
  methods:{
    goOk(){
      this.$emit('errorok')
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

  .button-back{
    width: 180px;
    height: 50px;
    border: none;
    background-color: $main-red;
    color: white;
    font-weight: 600;
    font-size: 16px;
    transition: all 1s;
    margin-top: 70px;
    margin-left: 80px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.3);
  }

  .button-back:hover{
    cursor: pointer;
  }

</style>
