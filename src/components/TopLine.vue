<template>
  <div class="top-line">
    <div class="conteiner-go-home" @click="goHome" v-show="showButtons">
      <img src="../assets/back-home.svg" alt="go home">
      <span>Home</span>
    </div>
    <h1 class="logo">MegaCreator</h1>
  </div>
</template>

<script>
export default {
  name: 'TopLine',
  data () {
    return {

    }
  },
  methods: {
     goHome(){
      console.log(this.$route.name)
      this.$router.push( {path:'/'})
    }
  },
  computed:{
    showButtons(){
      return this.$route.name !== 'Home';
    }
  }
}
</script>

<style lang="scss" scoped>
 @import './mixins.scss';
  .top-line{
    width: 100%;
    height: 80px;
    background-color: $main-black;
    color: white;
    position: fixed;
    z-index: 999;
    top:0;
    left: 0;
  }

  h1.logo{
    font-size: 25px;
    font-weight: 600px;
    margin-top: 20px;
  }

  .conteiner-go-home{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    margin-top: 20px;
    width: 100px;
    opacity: 0.8;

    img{
      width: 30px;
      height: 30px;
    }
  }

  .conteiner-go-home:hover{
    opacity: 1;
    cursor: pointer;
  }
</style>
